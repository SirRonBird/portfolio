<template>
  <div id="app">
    <div class="header">
      <h1>Conway's Game of Life</h1>
    </div>
    <div class="main">
      <div class="rules">
        <h2>Rules:</h2>
        <ul>
          <li>Any live cell with two or three neighbors survives.</li>
          <li>Any dead cell with three live neighbors becomes a live cell.</li>
          <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
          <li>Right-click to add red cells for a second team.</li>
          <li>New cells are assigned to the player with the majority of contributing neighbors. In a tie, the new cell is split 50/50.</li>
        </ul>
        <div class="controls">
          <button @click="startGame">Start</button>
          <button @click="stopGame">Stop</button>
          <button @click="clearGrid">Clear</button>
        </div>
      </div>
      <div class="container">
        <div class="grid" @mousedown.left="isDrawing = 'blue'" @mousedown.right.prevent="isDrawing = 'red'" @mouseup="isDrawing = null" @contextmenu.prevent>
          <div
              v-for="(row, rowIndex) in grid"
              :key="'row-' + rowIndex"
              class="row"
          >
            <div
                v-for="(cell, colIndex) in row"
                :key="'cell-' + colIndex"
                :class="['cell', { alive: cell.color === 'blue', enemy: cell.color === 'red' }]"
                @mouseover="toggleCell(rowIndex, colIndex)"
                @mousedown.left="toggleCell(rowIndex, colIndex, 'blue', true)"
                @mousedown.right.prevent="toggleCell(rowIndex, colIndex, 'red', true)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grid: Array.from({ length: 64 }, () => Array(64).fill({ color: null })),
      isDrawing: null,
      intervalId: null,
    };
  },
  methods: {
    toggleCell(row, col, color = null, force = false) {
      if (this.isDrawing || force) {
        const newColor = color || this.isDrawing;
        this.grid[row][col] = { color: newColor };
      }
    },
    getNeighborCounts(row, col) {
      const counts = { blue: 0, red: 0 };
      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
      ];

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (
            newRow >= 0 &&
            newRow < this.grid.length &&
            newCol >= 0 &&
            newCol < this.grid[0].length
        ) {
          const neighbor = this.grid[newRow][newCol];
          if (neighbor.color) {
            counts[neighbor.color]++;
          }
        }
      }
      return counts;
    },
    nextGeneration() {
      const newGrid = this.grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const neighbors = this.getNeighborCounts(rowIndex, colIndex);
            const totalNeighbors = neighbors.blue + neighbors.red;
            const dominantColor = neighbors.blue > neighbors.red ? 'blue' : (neighbors.red > neighbors.blue ? 'red' : null);

            if (cell.color) {
              return {color: totalNeighbors === 2 || totalNeighbors === 3 ? cell.color : null};
            } else {
              if (totalNeighbors === 3) {
                if (dominantColor) {
                  return {color: dominantColor};
                } else {
                  return {color: Math.random() < 0.5 ? 'blue' : 'red'};
                }
              }
              return {color: null};
            }
          })
      );
      this.grid = newGrid;
    },
    startGame() {
      if (!this.intervalId) {
        this.intervalId = setInterval(this.nextGeneration, 100);
      }
    },
    stopGame() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    clearGrid() {
      this.grid = Array.from({length: 64}, () => Array(64).fill({color: null}));
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}

.rules {
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.rules h2 {
  margin-top: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.grid {
  display: grid;
  grid-template-rows: repeat(64, 1fr);
  grid-template-columns: repeat(64, 1fr);
  width: 90vmin;
  height: 90vmin;
  border: 1px solid #000;
  user-select: none;
}

.row {
  display: contents;
}

.cell {
  width: 100%;
  height: 100%;
  border: 0.5px solid #ddd;
  background-color: #fff;
}

.cell.alive {
  background-color: blue;
}

.cell.enemy {
  background-color: red;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>

function displayMatrix(): void {
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      matDisplay.innerText = `${matDisplay.innerText}     ${matrix[i][j].toString()}`;
    }
    matDisplay.append(br);
  }
}

function initializeMatrix(): void {
  for (let i = 0; i < dimension; i++) {
    matrix[i] = new Array(dimension);
    for (let j = 0; j < dimension; j++) {
      matrix[i][j] = 0;
    }
  }
}

function changeMatrixRow(target: number): void {
  initializeMatrix();
  for (let j = 0; j < dimension; j++) {
    matrix[target][j] = 1;
  }
  displayMatrix()
}

function changeMatrixColumn(target: number): void {
  initializeMatrix();
  for (let i = 0; i < dimension; i++) {
    matrix[i][target] = 1;
  }
  displayMatrix()
}

function changeMatrixDiagonalMain(): void {
  initializeMatrix();
  for (let i = 0; i < dimension; i++) {
    for (let j = i; j < dimension; j++) {
      if(i === j){
        matrix[i][j] = 1;
      }
    }
  }
  displayMatrix()
}

function changeMatrixDiagonalSecondary(): void {
  initializeMatrix();
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension-i; j++) {
      if(i+j === dimension-1){
        matrix[i][j] = 1;
      }
    }
  }
  displayMatrix()
}

const matDisplay: HTMLElement = document.getElementById('displayMatrix');
const br: HTMLElement = document.createElement('br');
const buttons = document.getElementById('buttons');
const btn1: HTMLButtonElement = document.createElement('button');
const btn2: HTMLButtonElement = document.createElement('button');
const btn3: HTMLButtonElement = document.createElement('button');
const refresh: HTMLButtonElement = document.createElement('button');
let dimension: number = 0;
const matrix: number[][] = [];

btn1.innerText = 'Change line';
btn2.innerText = 'Change column';
btn3.innerText = 'Change diagonal';
refresh.innerText = 'Refresh';

while (dimension <= 1) {
  dimension = Number(prompt('Give a number for the matrix:'));

  if (dimension < 2) {
    alert('Invalid number');
  }
}

btn1.addEventListener('click', () => {
  const row: number = Number(prompt('Give the row you want to change:'));

  if ((row <= dimension) && (row > 0)) {
    matDisplay.innerText = '';
    changeMatrixRow(row - 1);
  } else {
    alert('Invalid number');
  }
})

btn2.addEventListener('click', () => {
  const column: number = Number(prompt('Give the column you want to change:'));

  if ((column <= dimension) && (column > 0)) {
    matDisplay.innerText = '';
    changeMatrixColumn(column - 1);
  } else {
    alert('Invalid number');
  }
})

btn3.addEventListener('click', () => {
  const diagonalRow: any = prompt('What diagonal you want to display: m or s?');

  if (diagonalRow === 'm') {
    matDisplay.innerText = '';
    changeMatrixDiagonalMain();
  } else if(diagonalRow === 's'){
    matDisplay.innerText = '';
    changeMatrixDiagonalSecondary();
  }else{
    alert('Invalid character');
  }
})

refresh.addEventListener('click', () => {
  matDisplay.innerText = ''
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      matrix[i][j] = 0;
    }
  }
  displayMatrix()
})

initializeMatrix();
displayMatrix();
buttons.append(btn1, btn2, btn3, refresh);
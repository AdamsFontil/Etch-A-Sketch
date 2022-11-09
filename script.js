
// creating divs is done
const gridContainer = document.querySelector('.gridContainer')
const container = document.querySelector(".container");
const size = document.querySelector('.size')
const clear = document.querySelector('.clear')
const erase = document.querySelector('.erase')
const hovered = document.querySelector('.hovered')
const gridItem = document.querySelector('.grid-item')

rows = 40

function clearGrid () {
    for (elem of document.getElementsByClassName('grid-item')){
    console.log('cleargrid')
    console.log(elem)
    elem.style.backgroundColor = 'white'
    }
  }

function removeGrid () {
while (container.firstChild )container.removeChild(container.firstChild);
    }

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    hover()
  };
};

function hover() {
container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
});
}

function gridSize () {
size.addEventListener('click',()  => {
    cols = rows
    rows = prompt('Size: ')
    clearGrid()
    removeGrid()
    makeRows(rows, rows)
});
}


erase.addEventListener('click', () => {
    removeGrid()
    });

clear.addEventListener('click', () => {
    clearGrid()
    });

makeRows(rows, rows);
gridSize()

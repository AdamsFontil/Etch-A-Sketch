
// creating divs is done
const gridContainer = document.querySelector('.gridContainer')
const container = document.querySelector(".container");
const size = document.querySelector('.size')
const clear = document.querySelector('.clear')
const erase = document.querySelector('.erase')
const hovered = document.querySelector('.hovered')
const gridItem = document.querySelector('.grid-item')

rows = 16

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



erase.addEventListener('click', () => {
  removeGrid()
  });

clear.addEventListener('click', () => {
        clearGrid()
    });


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";

    hover()
  };
};




// console.log(eraser())




// rows = prompt('Size: ')
makeRows(rows, rows);
let color;

function rainbw() {  // this function will let the computer pick at random rock, paper or scissors.//
    randomNum = Math.floor(Math.random() * 5); // this is done by first picking a random number from 0 to 2//
    if (randomNum === 0) { //after the number is chosen, the results will be assigned a choice//
        color = "red"
    } else if (randomNum === 1) {
        color = "blue"
    } else if (randomNum === 2) {
        color = "yellow"
    }
    return color // this what this function ultimately returns, one choice rock, paper, or scissors.

}



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

gridSize()

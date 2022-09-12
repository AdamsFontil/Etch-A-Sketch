
// creating divs is done
const container = document.querySelector(".container");

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
// rows = prompt('Size: ')
rows = 30
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

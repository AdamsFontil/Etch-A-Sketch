const container = document.querySelector('.container')


size = 5

createGrid = (size) => {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < size ** 2; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

createGrid(10)

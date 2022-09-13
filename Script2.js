const container = document.querySelector('.container')
const gridItem = document.createElement('div')


let size = 16

for (i = 0; i < size ** 2; i++ ) {
gridItem.classList.add('grid-item')
gridItem.innerText = i
container.appendChild(gridItem)

}



var markerDiv = document.createElement("div");
markerDiv.innerHTML = "<div id='MyCoolDiv' style='color: #2b0808'>123</div>";
document.getElementById("playerContainer").appendChild(markerDiv);

// after a brief delay, REMOVE the appended child
setTimeout(function(){
    var myCoolDiv = document.getElementById("MyCoolDiv");
    document.getElementById("playerContainer").removeChild(myCoolDiv);
}, 1500);


var myCoolDiv = document.createElement("div");
// Don't reall need this: myCoolDiv.id = "MyCoolDiv";
myCoolDiv.style.color = "#2b0808";
myCoolDiv.appendChild(
  document.createTextNode("123")
);
document.getElementById("playerContainer").appendChild(myCoolDiv);

setTimeout(function(){
    // No need for this, we already have it from the above:
    // var myCoolDiv = document.getElementById("MyCoolDiv");
    document.getElementById("playerContainer").removeChild(myCoolDiv);
}, 1500);

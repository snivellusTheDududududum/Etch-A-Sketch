const GRIDSIDE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;
sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

function setBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide){
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const WidthOrHeight = `${(GRIDSIDE / squaresPerSide) - 1}px`;

    for (let i = 0; i < numOfSquares; i++){
        const gridCell = document.createElement("div");

        gridCell.style.width =   gridCell.style.height = WidthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover',setBackgroundColor);
    }
}

function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function (){
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value); 
}

createGridCells(16);






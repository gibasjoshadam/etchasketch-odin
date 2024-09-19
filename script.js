const userHeight = document.querySelector(".height");
const userWidth = document.querySelector(".width");
const userBlockSize = document.querySelector(".size");

const etchArea = document.querySelector("#area");

const applyBtn = document.querySelector("button");

let gridNumOfRow=40, gridNumOfColumn=200, blockSize=20, gridTotalBlocks;
let gridRowSizePx, gridColumnSizePx, blockSizePx;
let drawing = false;

applyBtn.addEventListener("click", applySettings);

function applySettings(){
    removeBlocks();
    drawing = false;

    gridNumOfRow = parseInt(userWidth.value);
    gridNumOfColumn = parseInt(userHeight.value);
    blockSize = parseInt(userBlockSize.value);

    setCanvas();
    renderGrid();
}

function setCanvas() {
    gridTotalBlocks = gridNumOfRow * gridNumOfColumn;
    gridRowSizePx = `${(gridNumOfRow * blockSize)}px`; 
    gridColumnSizePx = `${(gridNumOfColumn * blockSize)}px`;
    blockSizePx = `${blockSize}px`;

    etchArea.style.height = gridColumnSizePx;
    etchArea.style.width = gridRowSizePx;
}

function removeBlocks() {
    while(etchArea.firstChild){
        etchArea.firstChild.remove();
    }
}

function createBlock() {
    const gridSingle = document.createElement("block");

    gridSingle.style.height = blockSizePx;
    gridSingle.style.width = blockSizePx;
    gridSingle.style.backgroundColor = "white";

    etchArea.appendChild(gridSingle);

    mouseHover = () => {
        if (drawing){
        gridSingle.style.backgroundColor = randomRgbColor();
        }
    }
    mouseDrawingEnable = () => {
        drawing = true;
    }
    mouseDrawingDisable = () => {
        drawing = false;
    }

    gridSingle.addEventListener("mousedown", mouseDrawingEnable);
    gridSingle.addEventListener("mouseup", mouseDrawingDisable);
    gridSingle.addEventListener("mouseover", mouseHover);
}

function randomValue255(){
    return Math.floor(Math.random()*255)
}

function randomRgbColor(){
    return `rgb(${randomValue255()}, ${randomValue255()}, ${randomValue255()})`
}

function renderGrid(){
    for (let i = 1; i <= gridTotalBlocks; i++){
        createBlock();
    }
}
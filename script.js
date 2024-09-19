const etchArea = document.querySelector("#area");

const gridNumOfRow = 20;
const gridNumOfColumn = 20;
const blockSize = 30;

const gridTotalBlocks = gridNumOfRow * gridNumOfColumn;

const gridRowSizePx = `${gridNumOfRow * blockSize}px`; 
const gridColumnSizePx = `${gridNumOfColumn * blockSize}px`;
const blockSizePx = `${blockSize}px`;

etchArea.style.height = gridColumnSizePx;
etchArea.style.width = gridRowSizePx;

function createBlock() {
    const gridSingle = document.createElement("block");

    gridSingle.style.height = blockSizePx;
    gridSingle.style.width = blockSizePx;
    gridSingle.style.backgroundColor = "#ffccff";

    etchArea.appendChild(gridSingle);

    gridSingle.addEventListener("mouseover", () => {
        gridSingle.style.backgroundColor = "#ff66cc";
    })
    gridSingle.addEventListener("mouseout", () => {
        gridSingle.style.backgroundColor = "#ffccff";
    })
}

for (let i = 1; i <= gridTotalBlocks; i++){
    createBlock();
}
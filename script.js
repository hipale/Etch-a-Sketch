let randomColor;
let randomNum;
let gridDivNum = 6;
createNewGrid()
function createNewGrid() {
const gridCont = document.querySelector("#gridCont");
for (let i = 0; i < gridDivNum; i++) {
gridVert = document.createElement("div");
gridVert.className = "gridDivVert";
gridCont.appendChild(gridVert);
for (let x = 0; x < gridDivNum - 1; x++) {
gridHori = document.createElement("div");
gridHori.className = "gridDivHori";
gridCont.appendChild(gridHori);
}
};
//gridVert.style.width = "100% / gridDivNum";
};

gridCont.addEventListener("mouseover", colorChange);
function colorChange(e) {
randomNum = Math.round(Math.random() * 100000)
    randomColor =`#${randomNum}`
    if (e.target.style.backgroundColor == randomColor) {
        e.target.style.backgroundColor = "white";
    } else {
        e.target.style.backgroundColor = randomColor;
    };
}

const button = document.querySelector("button");
button.addEventListener("click", popUpPrompt);
function popUpPrompt(e) {
    let askSizePrompt = parseInt(prompt("How big should be the grid: "));
    if (askSizePrompt > 100) {
        alert("The grid should be smaller than 10000 divs");
        popUpPrompt();
    } else {
        removeOldGrid()
        gridDivNum = askSizePrompt;
        createNewGrid()
    }
}
/*function removeOldGrid() {
gridHori.remove();
gridVert.remove();
} */
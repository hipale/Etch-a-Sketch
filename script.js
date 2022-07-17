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
gridVert.style.width = "100% / gridDivNum";
gridVert.style.height = "100% / gridDivNum";
};

gridCont.addEventListener("mouseover", colorChange);
function colorChange(e) {
    randomColor =`#${Math.round(Math.random() * 100000)}`;
    targetColor = e.target.style.backgroundColor;
        if (targetColor == "white"){ 
            let changTargetColor = parseInt(targetColor.split("").slice(0, 1).join(""));
            e.target.style.backgroundColor = `#${changTargetColor / (0.1 * changTargetColor)}`;
        } else {
            e.target.style.backgroundColor = randomColor; 
        }
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
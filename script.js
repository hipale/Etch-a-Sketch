let randomColor;
let gridDivNum = 6;
createNewGrid()
function createNewGrid() {
const gridCont = document.querySelector("#gridCont");
for (let i = 0; i < gridDivNum; i++) {
let gridVert = document.createElement("div");
gridVert.className = "gridDivVert";
gridCont.appendChild(gridVert);
for (let x = 0; x < gridDivNum - 1; x++) {
let gridHori = document.createElement("div");
gridHori.className = "gridDivHori";
gridCont.appendChild(gridHori);
}
};
//gridVert.style.width = "100% / gridDivNum";
//gridVert.style.height = "100% / gridDivNum";
};

gridCont.addEventListener("mouseover", colorChange);
function colorChange(e) {
    randomColor =`#${Math.floor(Math.random()*16777215).toString(16)}`;
    let targetColor = e.target.style.backgroundColor;
       if (targetColor !== "white") {
        e.target.style.backgroundColor = randomColor; 
       } else {
        targetColor.split("").slice(0, 1).join("");
        e.target.style.backgroundColor = `#${targetColor - (0.1 * targetColor)}`;
       }
    
       
}

const button = document.querySelector("button");
button.addEventListener("click", popUpPrompt);
function popUpPrompt(e) {
    let askSizePrompt = parseInt(prompt("How big should be the grid: "));
    if (askSizePrompt > 100) {
        alert("The grid should be smaller than 10000 divs");
    } else {
        //removeOldGrid()
        gridDivNum = askSizePrompt;
        //createNewGrid()
    }
}
/*function removeOldGrid() {
gridHori.remove();
gridVert.remove();
} */


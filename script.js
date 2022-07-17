let randomColor;
let gridHori;
let gridVert;
let gridDivNum = 6;

createNewGrid()
function createNewGrid() {
const gridCont = document.querySelector("#gridCont");
for (let i = 0; i < gridDivNum; i++) {
gridVert = document.createElement("div");
gridVert.style.width = `${100 / gridDivNum}%`;
gridVert.style.height = `${100 / gridDivNum}%`;
gridVert.className = "gridDivVert";
gridCont.appendChild(gridVert);
for (let x = 0; x < gridDivNum - 1; x++) {
gridHori = document.createElement("div");
gridHori.className = "gridDivHori";
gridHori.style.width = `${100 / gridDivNum}%`;
gridHori.style.height = `${100 / gridDivNum}%`;
gridCont.appendChild(gridHori);
}
};
};

gridCont.addEventListener("mouseover", colorChange);
function colorChange(e) {
    randomColor =`#${Math.floor(Math.random()*16777215).toString(16)}`;
    let targetColor = e.target.style.backgroundColor;
       if (e.target.className !== "touched") {
        e.target.style.backgroundColor = randomColor; 
        e.target.classList.add("touched");
       } else {
        targetColor.split("").slice(0, 1).join("");
        e.target.style.backgroundColor = `#${targetColor - (targetColor * 0.1)}`;
       }
       gridCont.style.backgroundColor = "white";
}

const button = document.querySelector("button");
button.addEventListener("click", popUpPrompt);
function popUpPrompt(e) {
    let askSizePrompt = parseInt(prompt("How big should be the grid: "));
    if (askSizePrompt > 100) {
        alert("The grid should be smaller than 10000 divs");
    } else {
        removeOldGrid()
        gridDivNum = askSizePrompt;
        createNewGrid()
    }
}
function removeOldGrid() {
gridCont.innerHTML ="";
} 


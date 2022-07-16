let gridVert;
const gridCont = document.querySelector("#gridCont");
for (let i = 0; i < 6; i++) {
gridVert = document.createElement("div");
console.log("a")
gridVert.className = "gridDivVert";
gridCont.appendChild(gridVert);
for (let x = 0; x < 5; x++) {
gridHori = document.createElement("div");
gridHori.className = "gridDivHori";
gridCont.appendChild(gridHori);
}
};


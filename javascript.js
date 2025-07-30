console.log("working?");

const defaultSize = 16;

const container = document.querySelector(".container");
console.log(container);


function createRow(defaultSize){
    for (let i = 0; i < defaultSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    }  
}

createRow(defaultSize);

const row = document.querySelectorAll(".row");
function createGrid(defaultSize){
    row.forEach(row =>{
        for (let i = 0; i < defaultSize; i++){
            const column = document.createElement("div");
            column.classList.add("column");
            //column.textContent = "Hi"
            row.appendChild(column);
        }  
    })
}

createGrid(defaultSize);
const columns = document.querySelectorAll(".column");
columns.forEach(column => {
    column.addEventListener("mouseover", () => {
    console.log("Mouse entered!");
    column.style["background-color"] = "grey";
    });
});

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', function(){
    let newSize = prompt("Enter a number for the new grid size");

    //createRow(newSize);
    //createGrid(newSize);
    defaultSize = newSize;

})

/*
columns.forEach(column => {
    column.addEventListener("mouseout", () => {
    console.log("Mouse exit!");
    });
});
*/






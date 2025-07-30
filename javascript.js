console.log("working?");

const container = document.querySelector(".container");
console.log(container);


function createRow(){
    for (let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    }  
}

createRow();

const row = document.querySelectorAll(".row");
function createGrid(){
    row.forEach(row =>{
        for (let i = 0; i < 16; i++){
            const column = document.createElement("div");
            column.classList.add("column");
            //column.textContent = "Hi"
            row.appendChild(column);
        }  
    })
}

createGrid();
const columns = document.querySelectorAll(".column");
columns.forEach(column => {
    column.addEventListener("mouseover", () => {
    console.log("Mouse entered!");
    column.style["background-color"] = "grey";
    });
});

/*
columns.forEach(column => {
    column.addEventListener("mouseout", () => {
    console.log("Mouse exit!");
    });
});
*/






console.log("working?");

let defaultSize = 16;

const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = ''; // Clear old grid

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    addHoverEffect(); // Reapply events after grid is built
}

createGrid(defaultSize);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addHoverEffect() {
    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.addEventListener("mouseover", () => {
            column.style["background-color"] = getRandomColor();
        });
    });
}



const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', function(){
    let newSize = prompt("Enter a number for the new grid size");
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Invalid input! Please enter a number between 1 and 100.");
        return;
    }
    newSize = parseInt(newSize);

    createGrid(newSize);
})








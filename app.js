/* const expandButton1 = document.querySelectorAll(".arrows")[0];
const expandButton2 = document.querySelectorAll(".arrows")[1];
const subMenu = document.querySelectorAll(".compSubMen")[0]

expandButton1.addEventListener("click", () => {
    if(expandButton1.style.transform === '')
    expandButton1.style.transform = 'rotate(180deg)';
else if(expandButton1.style.transform === 'rotate(180deg)'){
    expandButton1.style.transform = '';
}
}) 
expandButton2.addEventListener("click", () => {
    if(expandButton2.style.transform === '') {
    expandButton2.style.transform = 'rotate(180deg)';
    subMenu.style.visibility = "visible";
    }
else if(expandButton2.style.transform === 'rotate(180deg)'){
    expandButton2.style.transform = '';
    subMenu.style.visibility = "hidden";
    subMenu.classList.toggle("hidden");
}
}) 

 */



const expandButtons = document.querySelectorAll(".arrows");
const subMenu = document.querySelectorAll(".compSubMen")[0];

function toggleButton(button, subMenu) {
    if (button.style.transform === '') {
        button.style.transform = 'rotate(180deg)';
        if (subMenu) {
            subMenu.style.visibility = "visible";
            subMenu.classList.remove("hidden");
        }
    } else if (button.style.transform === 'rotate(180deg)') {
        button.style.transform = '';
        if (subMenu) {
            subMenu.style.visibility = "hidden";
            subMenu.classList.add("hidden");
        }
    }
}

// Attach event listeners to each button
expandButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Pass the subMenu only for the second button
        toggleButton(button, index === 1 ? subMenu : null);
    });
});

console.log("it works!")

 
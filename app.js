const expandButton1 = document.querySelectorAll(".arrows")[0];
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



console.log("it works!")


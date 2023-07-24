const mainbtn = document.querySelector("button")
const body = document.body
const cuColor = document.querySelector(".cu-color")
console.log(cuColor)

function rcg() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const rc = `rgb(${red},${green},${blue})`
    return rc;

}
mainbtn.addEventListener("click", () => {
    const rccc = rcg();
    body.style.backgroundColor = rccc;
    cuColor.textContent = rccc
 
})
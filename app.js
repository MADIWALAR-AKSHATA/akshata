// Added js feature
let btn = document.createElement("button");
btn.innerText = "click here";
btn.addEventListener("click", ()=>{
    document.querySelector("body").append(btn);
})
let namey = document.querySelector("#bringmename")
let points = document.querySelector(".todo-list-item-points")
let assist =  document.querySelector(".todo-list-item-assist")

let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    let lettuce = document.querySelector("#select1").value;
     namey.innerText = `${lettuce}`;
 


})

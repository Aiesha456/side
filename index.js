document.querySelector("button").addEventListener("click",buttonAnimation);







function buttonAnimation(){
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
    
}

document.querySelector("button").addEventListener("click",function(){
    document.querySelector(".magic").innerHTML="<p>hiiiiii</p>"
    setTimeout(() => {
        document.querySelector(".magic").innerHTML="" 
    }, 300);
})




const color = ["red","green","blue", "purple"];
const p = document.body.querySelector("#change");
console.log(p, color);
const superEventHandler ={
    mouseOver: function(){
        p.innerText="The mouse is here";
        p.style.color=color[0];
    },
    
    mouseOut: function(){
        p.innerText="The mouse is gone";
        p.style.color=color[1];
    },
    
    windowRightClick: function(){
        p.innerText="That was a right click!";
        p.style.color=color[2];
    },
    
    windowResize: function(){
        p.innerText="You just resized";
        p.style.color=color[3];
    },
}



p.addEventListener("mouseover", superEventHandler.mouseOver);
p.addEventListener("mouseout", superEventHandler.mouseOut);
window.addEventListener("contextmenu", superEventHandler.windowRightClick);
window.addEventListener("resize", superEventHandler.windowResize);

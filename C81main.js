canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("X="+mousex+",Y="+mousey);
    circle(mousex,mousey);
}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}

function clear(){
document.getElementById("mycanvas").style.backgroundcolor="white";
}
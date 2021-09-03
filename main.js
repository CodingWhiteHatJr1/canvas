var mouseEvent="empty";
var lastPositionOfX,lastPositionOfY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";

var widthOfLine=4;

canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
    color=document.getElementById("color").value;
    widthOfLine=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    CurrentPositionOfX=e.clientX-canvas.offsetLeft;
    CurrentPositionOfY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;

        console.log("Last Position of X and Y coordinates = ");
        console.log("X = "+lastPositionOfX+" Y = "+lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Current Position of X and Y coordinates = ");
        console.log("X = "+CurrentPositionOfX+" Y = "+CurrentPositionOfY);
        ctx.lineTo(CurrentPositionOfX, CurrentPositionOfY);
        ctx.stroke();
    }
    lastPositionOfX=CurrentPositionOfX;
    lastPositionOfY=CurrentPositionOfY;
}
function Ringclear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
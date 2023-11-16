const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;
const ballRadius = 5;

let player1Score = 0;
let player2Score = 0;
let player1Y = height/2 - paddleHeight/2;
let player2Y = height/2 - paddleHeight/2;

let ballX = width/2;
let ballY = height/2;
let ballSpeedX = 2;
let ballSpeedY = 2;


let upPressed = false;
let downPressed = false;
let wPressed = false;
let sPressed = false;

document.addEventListener("keydown", (event)=>
{
    if(event.key === "ArrowUp")
    {
        upPressed = true;
    }
    else if(event.key === "ArrowDown")
    {
        downPressed = true;
    }
    else if(event.key === "w")
    {
        wPressed = true;
    }
    else if(event.key === "s")
    {
        sPressed = true;
    }
});

document.addEventListener("keyup", (event)=>
{
    if(event.key === "ArrowUp")
    {
        upPressed = false;
    }
    else if(event.key === "ArrowDown")
    {
        downPressed = false;
    }
    else if(event.key === "w")
    {
        wPressed = false;
    }
    else if(event.key === "s")
    {
        sPressed = false;
    }
});

function update()
{

}



function gameLoop()
{
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
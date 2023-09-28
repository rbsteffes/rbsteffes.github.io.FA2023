ballButton = document.createElement("button");
ballButton.type = "button";
ballButton.innerText = "Click me!";
document.body.appendChild(ballButton);
ballButton.onclick = makeABall;

function makeABall(){
    let ball = document.createElement("div");
    ball.style.backgroundColor = "blue";
    ball.style.position = "absolute";
    ball.style.width = Math.floor(Math.random()* 50) + "px";
    ball.style.height = ball.style.width;
    ball.style.borderRadius = "50%";
    ball.style.left = Math.floor(Math.random()* 100) + "%";
    ball.style.top = Math.floor(Math.random()* 100) + "%";
    document.body.appendChild(ball);
}
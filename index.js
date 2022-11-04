const display = document.getElementById("display");
const displayWidth = 500;
const displayHeight = 500;
const scoreText = document.getElementById("scoreText");
let score=0;
let time = window.prompt("enter the time limit (second) (press space to restart)");
let speed = window.prompt("enter the speed");
let timeID = setInterval(spawnCircle,speed);
function spawnCircle(){
  const circle = document.createElement('div');
  circle.classList.add('circle');
  display.appendChild(circle);
  let x = Math.floor(Math.random()*450);
  let y = Math.floor(Math.random()*450);
  circle.style.left = x + 'px';
  circle.style.bottom = y + 'px';
  function getCoords(event){
    var x = event.offsetX;
    var y = event.offsetY;
    if (x<=28 && x>=25 && y<=28 && y>=25) score+=1;
    else score+=0.5;
    scoreText.textContent = score;
    console.log(x,y);
    display.removeChild(circle);
  } 
  circle.addEventListener('click',getCoords);
  
}

let time1 = 0;
let timeDisplay = document.getElementById('clock');
let clockId = setInterval(start,1000);

function start(){
  time1+=1;
  timeDisplay.textContent = time1;
  if (time1 >= time){
    clearInterval(clockId);
    clearInterval(timeID);
    alert(`your point is ${score}`);
  }
}

addEventListener('keydown',restart)
function restart(){
  if (event.key === " "){
    location.reload();
  }
}
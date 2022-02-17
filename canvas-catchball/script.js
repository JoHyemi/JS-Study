let canvas = document.querySelector('#gameArea');
let c = canvas.getContext('2d');

let colorArray = [
  '#A2D9CE',
  '#D6EAF8',
  '#C39BD3',
  '#F6DDCC',
  '#F9E79F'
]

canvas.addEventListener('click', function(e){
for(let i =0; i < circleArray.length; i++){
  box = circleArray[i];
  if(e.layerX >= (box.x - box.radius) &&
    e.layerX < (box.x + box.radius) &&
    e.layerY >= (box.y - box.radius) &&
    e.layerY < (box.y + box.radius))
    {
      circleArray.splice(i, 1);
    } 
}
})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  }
  this.update = function(){
    if (this.x + this.radius > 500 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > 500 || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}


let circleArray = [];

for (let i = 0; i < 50; i++){
  let radius = 30;
  let x = Math.random() * (500 - radius*2) + radius;
  let y = Math.random() * (500 - radius*2) + radius;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;
  circleArray.push(new Circle(x, y, dx, dy, radius))
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, 500, 500);

  for(let i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();

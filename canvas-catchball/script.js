let canvas = document.querySelector('#gameArea');
let c = canvas.getContext('2d');

//랜덤으로 색상 선택을 위한 색상표
let colorArray = [
  '#A2D9CE',
  '#D6EAF8',
  '#C39BD3',
  '#F6DDCC',
  '#F9E79F'
]

//캔버스 내에 클릭하는 곳의 위치에 있는 원을 원이 들어있는 배열에서 지움
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

//x, y는 현재 위치이고 dx, dy는 이동할 위치.
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  //원을 그려줌
  this.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  }
  //원이 캔버스 안에서만 움직이도록
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

//공이 랜덤하게 움직이도록
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
  //공이 이동하는 모습은 계속 지우기
  c.clearRect(0, 0, 500, 500);

  for(let i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();

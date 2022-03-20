const iconUp = document.querySelector('.icon-up img');
const iconUpBox = document.querySelector('.icon-up');
const iconHeart = document.querySelector('.icon-heart img');
const iconHeartBox = document.querySelector('.icon-heart');

//좋아요, 하트 토글
iconUpBox.addEventListener('click', ()=> {
  if(iconUpBox.style.backgroundColor == 'rgb(47, 128, 237)') {
    iconUp.src = './image/thumbsup.png';
    iconUpBox.style.backgroundColor = '';
  } else {
    iconUp.src = './image/thumbsup_2.png';
    iconUpBox.style.backgroundColor = 'rgb(47, 128, 237)';
  }
})

iconHeartBox.addEventListener('click', ()=> {
  if(iconHeartBox.style.backgroundColor == 'rgb(235, 87, 87)') {
    iconHeart.src = './image/heart.png';
    iconHeartBox.style.backgroundColor = '';
  } else {
    iconHeart.src = './image/heart2.png';
    iconHeartBox.style.backgroundColor = 'rgb(235, 87, 87)';
  }
})


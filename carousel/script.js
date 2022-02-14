    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    const imgWrap = document.querySelector('.img-wrap');
    const carouselImages = document.querySelectorAll('.img-wrap img');
    let imgWrapWidth = imgWrap.scrollWidth;
    let imgCount = imgWrap.childElementCount;

    let count = 1;

    imgWrap.style.transform = 'translateX(' + (-imgWrapWidth * count) + 'px)';

    btnRight.addEventListener('click', goRight);
    btnLeft.addEventListener('click', goLeft);


    function goRight() {
      if(count >= carouselImages.length -1) return;
        imgWrap.style.transition = "transform 0.4s ease-in-out";
        count++;
        imgWrap.style.transform = `translateX(-${imgWrapWidth * count}px)`;
    }
    function goLeft() {
      if(count <= 0) return;
      imgWrap.style.transition = "transform 0.4s ease-in-out";
      count--;
      imgWrap.style.transform = `translateX(-${imgWrapWidth *(count)}px)`;
    }


    imgWrap.addEventListener('transitionend', () => {
    if (carouselImages[count].id === 'lastClone'){
      imgWrap.style.transition = 'none';
      count = carouselImages.length -2; 
      imgWrap.style.transform = `translateX(-${imgWrapWidth *(count)}px)`;
    } else if (carouselImages[count].id === 'firstClone') {
      imgWrap.style.transition = 'none';
      count = carouselImages.length - count;
      imgWrap.style.transform =  `translateX(-${imgWrapWidth *(count)}px)`;
    }
    });

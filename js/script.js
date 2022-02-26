const upBtn       = document.querySelector('.up-button'),
      downBtn     = document.querySelector('.down-button'),
      sidebar     = document.querySelector('.sidebar'),
      mainSlide   = document.querySelector('.main-slide'),
      container   = document.querySelector('.container'),
      slidesCount = mainSlide.querySelectorAll('div').length;
      height      = container.clientHeight;


sidebar.style.top = `-${(slidesCount -1) *100}vh`


let activeSlideIndex = 0;

window.addEventListener('wheel', function(event){
    const downwardDelta = event.deltaY < 0;

    if( downwardDelta ){
        slideUp()
    }else{
        slideDown()
    }
})

function slideUp(){
    activeSlideIndex--;
    if( activeSlideIndex < 0 ){
        activeSlideIndex = slidesCount - 1;
    }
    updateSlide()
}

function slideDown(){
    activeSlideIndex++;
    if( activeSlideIndex == slidesCount ){
        activeSlideIndex = 0;
    }
    updateSlide()
}

function updateSlide(){
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform   = `translateY(${activeSlideIndex * height}px)`
}

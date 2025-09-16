(function(){
  const slidesEl = document.querySelector('.slider .slides');
  const slides = Array.from(slidesEl.children);
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let index = 0;
  const total = slides.length;
  let timer = null;

  function update() {
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
  }

  function go(n){
    index = (n + total) % total;
    update();
  }

  function nextSlide(){ go(index + 1) }
  function prevSlide(){ go(index - 1) }

  next.addEventListener('click', ()=>{ nextSlide(); resetTimer(); });
  prev.addEventListener('click', ()=>{ prevSlide(); resetTimer(); });

  function startTimer(){ timer = setInterval(nextSlide, 3500); }
  function stopTimer(){ if(timer){ clearInterval(timer); timer = null } }
  function resetTimer(){ stopTimer(); startTimer(); }

  slidesEl.addEventListener('mouseenter', stopTimer);
  slidesEl.addEventListener('mouseleave', startTimer);

  update(); startTimer();
})();

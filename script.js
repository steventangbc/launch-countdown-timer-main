const countdown = () => {
    const countDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000; // 14 days from now
  
    const updateTimer = () => {
      const now = new Date().getTime();
      const gap = countDate - now;
  
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
  
      setTimeout(() => {
        updateFlipCard('days', Math.floor(gap / day));
        updateFlipCard('hours', Math.floor((gap % day) / hour));
        updateFlipCard('minutes', Math.floor((gap % hour) / minute));
        updateFlipCard('seconds', Math.floor((gap % minute) / second));
      }, 500);
  
      if (gap < 0) {
        clearInterval(timerInterval);
        document.querySelector("h1").innerText = "We've launched!";
      }
    };
  
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to set the values immediately
  };
  
  const updateFlipCard = (id, newValue) => {
    const frontElement = document.getElementById(`${id}-front`);
    const backElement = document.getElementById(`${id}-back`);
    const flipCard = frontElement.closest('.flip-card');
  
    if (frontElement.textContent !== newValue.toString().padStart(2, '0')) {
      backElement.textContent = newValue.toString().padStart(2, '0');
      flipCard.classList.add('flip');
  
      setTimeout(() => {
        frontElement.textContent = newValue.toString().padStart(2, '0');
        flipCard.classList.remove('flip');
      }, 500);
    }
  };
  
  countdown();
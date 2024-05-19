document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");
  
    let startTime;
    let timerInterval;
    let pausedTime = 0;
  
    function startTimer() {
      startTime = Date.now() - pausedTime;
      timerInterval = setInterval(updateDisplay, 1000);
      startBtn.disabled = true;
      pauseBtn.disabled = false;
      resetBtn.disabled = false;
    }
  
    function pauseTimer() {
      clearInterval(timerInterval);
      pausedTime = Date.now() - startTime;
      startBtn.disabled = false;
      pauseBtn.disabled = true;
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      display.textContent = "00:00:00";
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      resetBtn.disabled = true;
      pausedTime = 0;
    }
  
    function updateDisplay() {
      const elapsedTime = Date.now() - startTime;
      const hours = Math.floor(elapsedTime / 3600000);
      const minutes = Math.floor((elapsedTime % 3600000) / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    }
  
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  
    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
  
    // Iniciar el cronómetro al cargar la página
    resetTimer();
  });
  
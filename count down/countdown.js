function startCountdown() {
    let countdownInput = document.getElementById('countdownInput');
    let seconds = parseInt(countdownInput.value);

    if (isNaN(seconds) || seconds <= 0) {
      alert('Please enter a positive number.');
      return;
    }

    let timeLeft = seconds;
    const timerElement = document.getElementById('timer');

    const countdownInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(countdownInterval);
        alert("Time's up!");
      }
    }, 1000);
  }
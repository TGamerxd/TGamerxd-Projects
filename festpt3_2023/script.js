const targetDate = new Date('December 22, 2023 14:00:00 GMT');

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    } else {
      document.getElementById('countdown').innerHTML = 'THE REVEALS HAVE STARTED';
    }
  }

  setInterval(updateCountdown, 1000);

  updateCountdown();

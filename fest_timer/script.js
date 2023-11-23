function updateTimer() {
    const now = new Date();

    // Specify the target time in GMT
    const targetTimeGMT = new Date(now);
    targetTimeGMT.setUTCHours(14, 0, 0); // 2:00 PM GMT

    const timeDiff = targetTimeGMT - now;

    if (timeDiff <= 0) {
        document.getElementById('timer').innerHTML = "Event has started!";
    } else {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();

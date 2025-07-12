   let count = <?php echo $start; ?>;
    let intervalId = null;
    const counterDisplay = document.getElementById('counter');

    function updateDisplay() {
      counterDisplay.textContent = count;
    }

    function startCounter() {
      if (intervalId === null) {
        intervalId = setInterval(() => {
          count++;
          updateDisplay();
        }, 1000);
      }
    }

    function stopCounter() {
      clearInterval(intervalId);
      intervalId = null;
    }

    function resetCounter() {
      stopCounter();
      count = 1;
      updateDisplay();
    }

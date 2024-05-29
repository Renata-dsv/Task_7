const startButton = document.getElementById('startButton');

let intervalId;
let counter = 0;

function startInterval() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    counter = 0;

    intervalId = setInterval(() => {
        counter++;

        console.log(counter);
    }, 1000);
}

startButton.addEventListener('click', startInterval);

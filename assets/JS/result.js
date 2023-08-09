const getUrl = new URLSearchParams(window.location.search);
const accuracy = getUrl.get("accuracy");
const points = getUrl.get("points");
const words = getUrl.get("words");
const resultSound = new Audio("./assets/sound/result2.mp3");

let accuracyElm = document.getElementById("accuracy");
let pointsElm = document.getElementById("points");
let wordsElm = document.getElementById("words");

accuracyElm.textContent = accuracy;
pointsElm.textContent = points;
wordsElm.textContent = words;
resultSound.play();
function animateNumber(
    finalNumber,
    duration = 5000,
    startNumber = 0,
    callback
) {
    const startTime = performance.now();
    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime > duration) {
            callback(finalNumber);
        } else {
            const rate = elapsedTime / duration;
            const currentNumber = Math.round(rate * finalNumber);
            callback(currentNumber);
            requestAnimationFrame(updateNumber);
        }
    }
    requestAnimationFrame(updateNumber);
}
animateNumber(Number(accuracy).toFixed(2), 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    accuracyElm.innerText = formattedNumber;
});

animateNumber(points, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    pointsElm.innerText = formattedNumber;
});
animateNumber(words, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    wordsElm.innerText = formattedNumber;
});

// -------


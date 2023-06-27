
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000; // Convert to milliseconds
}

function createPromise() {
  return new Promise((resolve) => {
    const time = getRandomTime(1, 5);
    setTimeout(() => {
      resolve(`Promise resolved after ${time / 1000} seconds.`);
    }, time);
  });
}

const promises = [];
for (let i = 0; i < 5; i++) {
  promises.push(createPromise());
}

Promise.any(promises)
  .then((result) => {
    const resultDiv = document.getElementById("yourDivId");
    resultDiv.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });

// Do not change the code above this
// add your promises to the array `promises`

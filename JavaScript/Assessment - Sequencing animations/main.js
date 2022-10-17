const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// Better approach
// Async/await
async function doAnimation() {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
}

doAnimation().then(() => console.log("Animation completed"));

// Good one
// Using nesting then
/* const animationBegins = alice1.animate(aliceTumbling, aliceTiming).finished;
animationBegins
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  .then(() => console.log("Animation ends")); */

// Worst
// Callback hell
/* function anime(alice, callback) {
  alice
    .animate(aliceTumbling, aliceTiming)
    .finished
    .then(callback);
}

function doAnimation() {
  anime(alice1, () => {
    anime(alice2, () => {
      anime(alice3, () => {
        console.log("Hellend");
      });
    });
  });
}

doAnimation(); */

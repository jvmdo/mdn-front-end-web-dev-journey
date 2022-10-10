const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const pictures = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
];

/* Declaring the alternative text for each image file */
const altText = [
  "Closeup of a human eye",
  "I really don't know what is it",
  "White and purple flowers",
  "Ancient egyptian art",
  "A specie of butterfly",
];

/* Looping through images */
for (let i = 0; i < pictures.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", pictures[i]);
  newImage.setAttribute("alt", altText[i]);
  thumbBar.appendChild(newImage);
}

/* Event listener for each image */
thumbBar.addEventListener("click", function (event) {
  displayedImage.setAttribute("src", event.target.src);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function (event) {
  const text = event.target.textContent;
  if (text.includes("Darken")) {
    event.target.textContent = "Lighten";
    overlay.style.setProperty("opacity", "0.5");
  } else {
    event.target.textContent = "Darken";
    overlay.style.setProperty("opacity", "0.0");
  }
});

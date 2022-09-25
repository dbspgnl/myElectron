const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

// document.body.style.backgroundImage = `url('/img/${chosenImage}')`;
// document.body.style.backgroundColor = "pink";
// document.body.style.backgroundImage = `url('/img/0.jpg')`;

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "body-background"
document.body.appendChild(bgImage);
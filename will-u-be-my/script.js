const noMessages = [
  "Are you sure? 🥺",
  "Really sure?? 💭"
];

let noClickCount = 0;
const baseYesSize = 16; // starting font size in px
const growthPerClick = 10; // how much it grows per NO click
const maxYesSize = 46; // cap so it doesn’t explode

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const message = document.getElementById("message");
  const image = document.getElementById("mainImage");

  noClickCount++;

  /* 🔥 CLEAR & NOTICEABLE YES growth */
  let newSize = baseYesSize + noClickCount * growthPerClick;
  if (newSize > maxYesSize) newSize = maxYesSize;
  yesButton.style.fontSize = `${newSize}px`;

  /* 1st & 2nd NO → playful tease only */
  if (noClickCount <= 2) {
    noButton.textContent = noMessages[noClickCount - 1];
    return;
  }

  /* 3rd NO → respectful ending */
  noButton.disabled = true;
  yesButton.disabled = true;

  noButton.textContent = "Thanks for being honest 💙";
  yesButton.textContent = "I appreciate you";

  message.textContent =
    "Thanks for giving me your answer. It really means a lot 😊";

  /* change image ONLY on 3rd NO */
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = "cat thx.png";
    image.style.opacity = 1;
  }, 200);
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

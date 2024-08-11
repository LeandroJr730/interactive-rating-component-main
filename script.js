const rateContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const submitBtn = document.querySelector(".submit-button");
const buttons = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");

submitBtn.addEventListener("click", () => {
  if (rating.textContent === "") {
    window.alert("Please select a rating");
  } else {
    thankYouContainer.classList.remove("hidden");
    rateContainer.style.display = "none";
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    rating.textContent = button.value;
  });
});

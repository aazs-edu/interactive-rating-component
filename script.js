"use strict";
// Select Elements
const rating = Array.from(document.querySelectorAll(".ratings-box > span"));
const submitBtn = document.getElementById("submitBtn");
const ratingState = document.getElementById("ratingState");
const submittedState = document.getElementById("submittedState");
const clientRating = document.getElementById("clientRating");

rating.forEach(c => c.addEventListener("click", (e) => {
    rating.filter(item => item !== e.target).forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
    clientRating.innerHTML = e.target.getAttribute("data-rating");
}))

submitBtn.addEventListener("click", ()=>{
    ratingState.classList.add("hide");
    submittedState.classList.remove("hide");
})
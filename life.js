let ham = document.getElementById("ham");
let show = document.getElementById("show");
let cancel = document.getElementById("cancel-icon");
let canBtn = document.getElementById("cancel-btn");

ham.addEventListener("click", (e) => {
  show.style.display = "flex";
  // show.style.transform = "translate(10px, 0)";
  // show.style.transition = "all 5s ease";
  ham.style.display = "none";
  cancel.style.display = "block";
});
cancel.addEventListener("click", (e) => {
  cancel.style.display = "none";
  show.style.display = "none";
  ham.style.display = "block";
});

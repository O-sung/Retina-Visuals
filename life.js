let ham = document.getElementById("ham");
let show = document.getElementById("show");
let cancel = document.getElementById("cancel-icon");
let canBtn = document.getElementById("cancel-btn");

ham.addEventListener("click", (e) => {
  show.style.display = "flex";
  ham.classList.add("disabled");
  cancel.style.display = "block";

  cancel.addEventListener("click", (e) => {
    cancel.style.display = "none";
    ham.style.display = "block";
    show.style.display = "none";
  });

  return;
});

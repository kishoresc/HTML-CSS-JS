document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav").classList.toggle("active");
});

function showCustomAlert() {
  document.getElementById("custom-alert").style.display = "block";
}

function closeCustomAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

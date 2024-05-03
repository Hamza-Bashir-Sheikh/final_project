document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const images = gallery.querySelectorAll("img");

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      images.forEach((img) => img.classList.remove("active"));
      img.classList.add("active");
    });
  });
});

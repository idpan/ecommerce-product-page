const hamburgerBtn = document.querySelector(".hamburger");
const linkMenu = document.querySelector(".link");
const closeBtn = document.querySelector(".close");
const cartBtn = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");
// link menu toggle
hamburgerBtn.onclick = () => {
  // linkMenu.style.display = "block";
  linkMenu.classList.add("open-link");
  setTimeout(function () {
    linkMenu.classList.add("link-transition");
  });
};
closeBtn.onclick = () => {
  // linkMenu.style.display = "none";
  linkMenu.classList.remove("link-transition");
  setTimeout(function () {
    linkMenu.classList.remove("open-link");
  }, 500);
};
console.log(hamburgerBtn);

// cart section toggle
cartBtn.onclick = () => {
  cartContainer.classList.toggle("open");
};

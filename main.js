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
// cart section toggle
cartBtn.onclick = () => {
  cartContainer.classList.toggle("open");
};

// product image
const imageForHero = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"];
const imageProduct = document.querySelector(".product-image__hero > img");
const slider = document.querySelectorAll(".product-image__hero > button");
const thunbnail = document.querySelectorAll(".product-image__thumbnail > button");
let imageProductIndex = 0;
slider.forEach((element) => {
  element.onclick = function () {
    imageProductIndex = setImageProductIndex(this.dataset.slide, imageProductIndex);

    imageProduct.setAttribute("src", `./images/${imageForHero[imageProductIndex]}`);
  };
});

thunbnail.forEach((element) => {
  element.onclick = function () {
    console.log(this);
    imageProduct.setAttribute("src", `./images/${imageForHero[this.dataset.index]}`);
    document.querySelector(".active-thumbnail").classList.remove("active-thumbnail");
    this.classList.add("active-thumbnail");
  };
});

function setImageProductIndex(slideButton, imageProductIndex) {
  if (slideButton === "left") {
    if (imageProductIndex === 0) {
      return (imageProductIndex = imageForHero.length - 1);
    }
    return (imageProductIndex -= 1);
  }
  if (slideButton === "right") {
    if (imageProductIndex === 3) {
      return (imageProductIndex = 0);
    }
    return (imageProductIndex += 1);
  }
}

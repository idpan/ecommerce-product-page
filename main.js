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
const imageProduct = document.querySelectorAll(".product-image__image > img");
const slider = document.querySelectorAll(".product-image__hero > button");
const thumbnail = document.querySelectorAll(".product-image__thumbnail > button");
let imageProductIndex = 0;
slider.forEach((element) => {
  element.onclick = function () {
    imageProductIndex = setImageProductIndex(this.dataset.slide, imageProductIndex);
    imageProduct.forEach((element) => {
      element.setAttribute("src", `./images/${imageForHero[imageProductIndex]}`);
    });
    document.querySelectorAll(".active-thumbnail").forEach((element) => {
      element.classList.remove("active-thumbnail");
    });

    thumbnail.forEach((element) => {
      if (parseInt(element.dataset.index) !== imageProductIndex) return;

      element.classList.add("active-thumbnail");
    });
  };
});

thumbnail.forEach((element) => {
  element.onclick = function () {
    imageProductIndex = parseInt(this.dataset.index);

    imageProduct.forEach((element) => {
      element.setAttribute("src", `./images/${imageForHero[imageProductIndex]}`);
    });
    document.querySelectorAll(".active-thumbnail").forEach((element) => {
      element.classList.remove("active-thumbnail");
    });
    thumbnail.forEach((element) => {
      if (parseInt(element.dataset.index) !== imageProductIndex) return;

      element.classList.add("active-thumbnail");
    });
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

// preview
const preview = document.querySelector(".preview");
const previewCloseBtn = document.querySelector(".preview__close");
imageProduct.forEach((element) => {
  element.onclick = function () {
    if (window.innerWidth >= 600) {
      preview.style.display = "flex";
    }
  };
});

previewCloseBtn.onclick = function () {
  preview.style.display = "none";
};

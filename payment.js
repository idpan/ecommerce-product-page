// button DOM
const quantityPlusBtn = document.querySelector("[data-quantity-plus]");
const quantityMinusBtn = document.querySelector("[data-quantity-minus]");

const addToCartBtn = document.querySelector(".add-to-cart");

const checkoutBtn = document.querySelector(".checkout-button");
const product = {
  companyName: "sneakers company",
  name: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.`,
  price: 250,
  discount: 50,
  id: 1234,
  image: ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"],
};

let quantityProduct = 0;
let actualPrice = (product.price * product.discount) / 100;
let totalPrice = actualPrice * quantityProduct;

// data-product-DOM
const discountDOM = document.querySelector("[data-product-discount]");
const priceDOM = document.querySelector("[data-product-price]");
const productNameDOM = document.querySelectorAll("[data-product-name]");
const companyNameDOM = document.querySelector("[data-product-companyName]");
const descriptionDOM = document.querySelector("[data-product-description]");
const actualPriceDOM = document.querySelector(".price__actual");
const quantityProductDOM = document.querySelectorAll(".quantity-product");
const cartEmptyDOM = document.querySelector(".cart-empty");
const cartIconAmount = document.querySelector(".cart-icon__amount");
// add DOM element
discountDOM.textContent = product.discount + "%";

priceDOM.textContent = "$" + product.price.toLocaleString() + ".00";
actualPriceDOM.textContent = "$" + actualPrice.toLocaleString() + ".00";
productNameDOM.forEach((element) => {
  element.textContent = product.name;
});

companyNameDOM.textContent = product.companyName;

descriptionDOM.textContent = product.description;

quantityProductDOM.forEach((element) => {
  element.textContent = quantityProduct;
});
// plus button action
quantityPlusBtn.onclick = () => {
  const cartProductContainer = document.querySelector(".cart-product-container");
  const quantityProductDOM = document.querySelectorAll(".quantity-product");
  quantityProduct += 1;
  quantityProductDOM.forEach((element) => {
    element.textContent = quantityProduct;
  });
  totalPrice = actualPrice * quantityProduct;

  if (cartProductContainer.firstElementChild) {
    const totalPriceDOM = document.querySelector(".price__total");
    totalPriceDOM.textContent = "$" + totalPrice.toLocaleString() + ".00";
  }
};
// minus button action
quantityMinusBtn.onclick = () => {
  if (quantityProduct === 0) return;
  const cartProductContainer = document.querySelector(".cart-product-container");
  const quantityProductDOM = document.querySelectorAll(".quantity-product");
  quantityProduct -= 1;

  if (quantityProduct === 0) {
    cartProductContainer.innerHTML = "";
    cartEmptyDOM.style.display = "grid";
    cartIconAmount.style.display = "none";
  }
  if (!cartProductContainer.firstElementChild) checkoutBtn.style.display = "none";

  quantityProductDOM.forEach((element) => {
    element.textContent = quantityProduct;
  });

  totalPrice = actualPrice * quantityProduct;
  if (cartProductContainer.firstElementChild) {
    const totalPriceDOM = document.querySelector(".price__total");
    totalPriceDOM.textContent = "$" + totalPrice.toLocaleString() + ".00";
  }
};
// add to cart action
addToCartBtn.onclick = () => {
  if (quantityProduct === 0) return;
  const cartProductContainer = document.querySelector(".cart-product-container");
  if (cartProductContainer.firstElementChild) {
    if (parseInt(cartProductContainer.firstElementChild.dataset.id) === product.id) {
      return;
    }
  }
  cartIconAmount.style.display = "block";
  cartEmptyDOM.style.display = "none";
  checkoutBtn.style.display = "block";
  cartProductContainer.appendChild(addProduct(product.id, `./images/${product.image[0]}`, product.name, `$${actualPrice}.00`, quantityProduct, `$${totalPrice}.00`));
};

function addProduct(id, urlImage, productName, actualPrice, quantityProduct, totalPrice) {
  // img
  const ImgDiv = document.createElement("div"),
    img = document.createElement("img");
  img.setAttribute("data-product-main-image", "");
  img.setAttribute("alt", "product-image");
  img.setAttribute("src", urlImage);
  ImgDiv.appendChild(img);
  // name & prrice div
  const nameAndPriceDiv = document.createElement("div");
  // name
  const productNameDiv = document.createElement("div");
  productNameDiv.setAttribute("data-product-name", "");
  productNameDiv.classList.add("cart-product__name");
  productNameDiv.textContent = productName;
  // price
  const priceDiv = document.createElement("div");
  priceDiv.classList.add("cart-product__price");
  const actualPriceSpan = document.createElement("span");
  actualPriceSpan.classList.add("price__actual");
  actualPriceSpan.textContent = actualPrice;
  const quantitySpan = document.createElement("span");
  quantitySpan.classList.add("quantity-product");
  quantitySpan.textContent = quantityProduct;
  const totalPriceSpan = document.createElement("span");
  totalPriceSpan.classList.add("price__total");
  totalPriceSpan.textContent = totalPrice;
  priceDiv.appendChild(actualPriceSpan);
  priceDiv.appendChild(document.createTextNode(" "));

  priceDiv.appendChild(document.createTextNode("x"));
  priceDiv.appendChild(document.createTextNode(" "));
  priceDiv.appendChild(quantitySpan);
  priceDiv.appendChild(document.createTextNode(" "));
  priceDiv.appendChild(totalPriceSpan);

  nameAndPriceDiv.appendChild(productNameDiv);
  nameAndPriceDiv.appendChild(priceDiv);
  // delete
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("type", "button");
  deleteButton.onclick = deleteCartBtn;
  const deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "./images/icon-delete.svg");
  deleteImg.setAttribute("alt", "delete-button");
  deleteButton.appendChild(deleteImg);

  const productDiv = document.createElement("div");
  productDiv.classList.add("cart-product");
  productDiv.appendChild(ImgDiv);
  productDiv.appendChild(nameAndPriceDiv);
  productDiv.appendChild(deleteButton);
  productDiv.setAttribute("data-id", id);
  return productDiv;
}
checkoutBtn.onclick = function () {
  const cartProductContainer = document.querySelector(".cart-product-container");
  cartProductContainer.innerHTML = "";
  cartEmptyDOM.style.display = "grid";
  checkoutBtn.style.display = "none";
  cartIconAmount.style.display = "none";

  quantityProduct = 0;
  quantityProductDOM.forEach((element) => {
    element.textContent = quantityProduct;
  });
};

function deleteCartBtn() {
  const cartProductContainer = document.querySelector(".cart-product-container");
  cartProductContainer.removeChild(this.parentNode);
  if (!cartProductContainer.firstElementChild) {
    checkoutBtn.style.display = "none";
    cartEmptyDOM.style.display = "grid";
  }
  quantityProduct = 0;
  quantityProductDOM.forEach((element) => {
    element.textContent = quantityProduct;
  });
  cartIconAmount.style.display = "none";
}

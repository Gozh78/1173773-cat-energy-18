var cartLink = document.querySelectorAll(".catalog-item__make-order");

var cartPopup = document.querySelector(".modal-cart");

var close = cartPopup.querySelector(".modal__button-close");
/*
cartLink.forEach((it) => {
  it.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal--show");
  });
});
*/
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("modal--show")) {
      cartPopup.classList.remove("modal--show");
    }
  }
});

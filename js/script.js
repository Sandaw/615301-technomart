var write = document.querySelector(".write-button");
var popup = document.querySelector(".modal-write-us");
var cartBuy = document.querySelectorAll(".buy-item");
var cartPopup = document.querySelector(".modal-add-cart");
var cartClose = cartPopup.querySelector(".modal-close")
var isStorageSupport = true;
var storage = "";

if (popup && write) {
    var close = popup.querySelector(".modal-close");
        form = popup.querySelector("form");
        login = popup.querySelector("[name=login]");
        email = popup.querySelector("[name=email]");
        text = popup.querySelector("[name=text-letter]");

try {
    storage = localStorage.getItem("login");
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

write.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        email.value = storage;
        text.focus();
    } else {
    login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
});

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});
};

for (var i = 0; i < cartBuy.length; i++)
    cartBuy[i].addEventListener("click", function (a) {
        a.preventDefault(),
            cartPopup.classList.add("modal-show")
});

cartClose.addEventListener("click", function (a) {
    a.preventDefault(),
        cartPopup.classList.remove("modal-show")
}),
    window.addEventListener("keydown", function (a) {
        27 === a.keyCode && cartPopup.classList.contains("modal-show") && cartPopup.classList.remove("modal-show")
});
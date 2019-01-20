var mapLink = document.querySelector(".contacts-button-map"),
    cartBuy = document.querySelectorAll(".buy-item"),
    mapPopup = document.querySelector(".modal-map"),
    cartPopup = document.querySelector(".modal-add-product"),
    mapClose = mapPopup.querySelector(".modal-close"),
    cartClose = cartPopup.querySelector(".modal-close"),
    write = document.querySelector(".write-button"),
    close = popup.querySelector(".modal-close"),
    storage = localStorage.getItem("login"),
    popup = document.querySelector(".modal-write-us");
if (write && popup && close) {
    var form = popup.querySelector("form"),
        login = popup.querySelector("[name=login]"),
        email = popup.querySelector("[name=email]"),
        text = popup.querySelector("[name=text-letter]");
    write.addEventListener("click", function(a) {
        a.preventDefault(), popup.classList.add("modal-show"), login.focus(), storage ? (login.value = storage, email.focus()) : login.focus()
    }), close.addEventListener("click", function(a) {
        a.preventDefault(), popup.classList.remove("modal-show"), popup.classList.remove("modal-error")
    }), form.addEventListener("submit", function(a) {
        login.value && email.value && text.value ? (localStorage.setItem("login", login.value), localStorage.setItem("email", email.value)) : (a.preventDefault(), popup.classList.add("modal-error"))
    }), window.addEventListener("keydown", function(a) {
        27 === a.keyCode && popup.classList.contains("modal-show") && (popup.classList.remove("modal-show"), popup.classList.remove("modal-error"))
    })
}
for (var i = 0; i < cartBuy.length; i++) cartBuy[i].addEventListener("click", function(a) {
    a.preventDefault(), cartPopup.classList.add("modal-show")
});
cartClose.addEventListener("click", function(a) {
    a.preventDefault(), cartPopup.classList.remove("modal-show")
}), window.addEventListener("keydown", function(a) {
    27 === a.keyCode && cartPopup.classList.contains("modal-show") && cartPopup.classList.remove("modal-show")
}), mapLink.addEventListener("click", function(a) {
    a.preventDefault(), mapPopup.classList.add("modal-show")
}), mapClose.addEventListener("click", function(a) {
    a.preventDefault(), mapPopup.classList.remove("modal-show")
}), window.addEventListener("keydown", function(a) {
    27 === a.keyCode && mapPopup.classList.contains("modal-show") && map.classList.remove("modal-show")
});
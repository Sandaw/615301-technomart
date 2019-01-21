var write = document.querySelector(".write-button"),
    popup = document.querySelector(".modal-write-us"),
    cartBuy = document.querySelectorAll(".buy-item"),
    cartPopup = document.querySelector(".modal-add-cart"),
    cartClose = cartPopup.querySelector(".modal-close"),
    isStorageSupport = !0,
    storage = "";
if (popup && write) {
    var close = popup.querySelector(".modal-close");
    form = popup.querySelector("form"), login = popup.querySelector("[name=login]"), email = popup.querySelector("[name=email]"), text = popup.querySelector("[name=text-letter]");
    try {
        storage = localStorage.getItem("login"), storage = localStorage.getItem("email")
    } catch (e) {
        isStorageSupport = !1
    }
    write.addEventListener("click", function(e) {
        e.preventDefault(), popup.classList.add("modal-show"), storage ? (login.value = storage, email.value = storage, text.focus()) : login.focus()
    }), close.addEventListener("click", function(e) {
        e.preventDefault(), popup.classList.remove("modal-show"), popup.classList.remove("modal-error")
    }), form.addEventListener("submit", function(e) {
        login.value && email.value && text.value ? isStorageSupport && (localStorage.setItem("login", login.value), localStorage.setItem("email", email.value)) : (e.preventDefault(), popup.classList.remove("modal-error"), popup.offsetWidth = popup.offsetWidth, popup.classList.add("modal-error"))
    }), window.addEventListener("keydown", function(e) {
        27 === e.keyCode && (e.preventDefault(), popup.classList.contains("modal-show") && (popup.classList.remove("modal-show"), popup.classList.remove("modal-error")))
    });
    var mapLink = document.querySelector(".contacts-button-map"),
        mapPopup = document.querySelector(".modal-map"),
        mapClose = mapPopup.querySelector(".modal-close");
    mapLink.addEventListener("click", function(e) {
        e.preventDefault(), mapPopup.classList.add("modal-show")
    }), mapClose.addEventListener("click", function(e) {
        e.preventDefault(), mapPopup.classList.remove("modal-show")
    }), window.addEventListener("keydown", function(e) {
        27 === e.keyCode && mapPopup.classList.contains("modal-show") && mapPopup.classList.remove("modal-show")
    })
}
for (var i = 0; i < cartBuy.length; i++) cartBuy[i].addEventListener("click", function(e) {
    e.preventDefault(), cartPopup.classList.add("modal-show")
});
cartClose.addEventListener("click", function(e) {
    e.preventDefault(), cartPopup.classList.remove("modal-show")
}), window.addEventListener("keydown", function(e) {
    27 === e.keyCode && cartPopup.classList.contains("modal-show") && cartPopup.classList.remove("modal-show")
});
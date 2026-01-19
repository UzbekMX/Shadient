const toTop = document.querySelector("#scrol-to-top")

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const send = document.querySelectorAll("#send")

send.forEach(button => {
    button.addEventListener("click", () => {
        alert("Собщение отправлено")
    })
})

const toDown = document.querySelector("#scroll-to-down")

toDown.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
})



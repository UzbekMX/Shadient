const toTop = document.querySelector("#scrol-to-top")

if (toTop) {
    toTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}


const send = document.querySelectorAll("#send")

if (send) {
    send.forEach(button => {
        button.addEventListener("click", () => {
            alert("Собщение отправлено")
        })
    })
}


const toDown = document.querySelectorAll("#scroll-to-down")

if (toDown) {
    toDown.forEach(button => {
        button.addEventListener("click", () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            })
        })
    })
}


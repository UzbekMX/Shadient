const toTop = document.querySelector("#scrol-to-top")

toTop.addEventListener ("click", () => {
    window.scrollTo ({
        top: 0, 
        behavior: "smooth"
    });
});

const send = document.querySelectorAll("#send") 

send.forEach (button => {
    button.addEventListener("click", () => {
        alert("Собщение отправлено")
    })
})

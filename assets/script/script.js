const button = document.getElementsByClassName("btn-primary");

button[2].addEventListener ("click", () => {
    window.scrollTo ({
        top: 0, 
        behavior: "smooth"
    });
});

// ich придумал кнопку,но ich вообще нихуя не понял как это arbeinet,я по факту 
// немного взял инфы из видоса с ютуба,и немного переписал с gpt
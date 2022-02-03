const offer1 = document.querySelector("#offer1");
const offer2 = document.querySelector("#offer2");
const tickMark1 = document.querySelector("#tick-mark-offer1");
const tickMark2 = document.querySelector("#tick-mark-offer2");

let x = document.querySelectorAll('.options-sections')
for (let i = 0; i < x.length; i++) {
    offer1.addEventListener('click', () => {
        tickMark1.classList.add("material-icons");
        offer1.classList.add("activeOffer");
        tickMark1.innerHTML = "done";
        tickMark2.classList.remove("material-icons");
        offer2.classList.remove("activeOffer");
        tickMark2.innerHTML = "";
    })

    offer2.addEventListener('click', () => {
        tickMark2.classList.add("material-icons");
        offer2.classList.add("activeOffer");
        tickMark2.innerHTML = "done";
        tickMark1.classList.remove("material-icons");
        offer1.classList.remove("activeOffer");
        tickMark1.innerHTML = "";
    })
}

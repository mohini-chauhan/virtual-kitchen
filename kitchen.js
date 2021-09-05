const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

const text = document.querySelector(".virtual");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === strText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = "null";
}


const card = document.querySelectorAll(".card-inner");
console.log(card)
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
        card[i].classList.toggle('is-flipped');
    });
}
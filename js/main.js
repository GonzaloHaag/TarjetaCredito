//Capturamos los datos que se van a mostrar en la card

const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVC = document.querySelector("card-cvc");

//Capturo los inputs

const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCVC= document.querySelector("#input-cvc");

//Capturo el form

const form = document.querySelector("#form");

const divThankYou = document.querySelector("#thank-you");

//Capturo los botones

const buttonConfirm = document.querySelector("#button");
const buttonContinue = document.querySelector("#continue"); //Aqui le pasamos el form.reset() y luego le paso innerText a todos los elementos de la card con jane aplessed,0000 000 y asi



var cleave = new Cleave('#input-number', { //Libreria para que en la card los numeros se separen cada "4"; 0000 0000 0000 0000
    creditCard: true,
});

inputNumber.addEventListener("input",()=>{
    cardNumber.innerText = inputNumber.value;

    if(inputNumber.value.length === 0) { //Si no hay nada escrito en el input, que el texto de la card sea el original
        cardNumber.innerText = "0000 0000 0000 0000"
    }
})
inputName.addEventListener("input",()=>{
    cardName.innerText = inputName.value;
    if(inputName.value.length === 0){
        cardName.innerText = "Jane Appleseed"
    }
})
inputMonth.addEventListener("input",()=>{
    cardMonth.innerText = inputMonth.value;

    if(inputMonth.value.length === 0) {
        cardMonth.innerText = "00"
    }
})
inputYear.addEventListener("input",()=>{
    cardYear.innerText = inputYear.value;

    if(inputYear.value.length === 0) {
        cardYear.innerText = "00"
    }
})
inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value;

    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000";
    }
})

form.addEventListener("submit",(e)=>{ //Al enviar el form

    e.preventDefault();
    form.classList.add("disabled"); //que se vaya el formulario -> Le agrego la clase disabled
    divThankYou.classList.remove("disabled"); //que aparezca el div de thankYou


})
buttonContinue.addEventListener("click",()=>{
    form.classList.remove("disabled");
    divThankYou.classList.add("disabled");
    form.reset(); //Resetea formulario
    cardName.innerText = "Jane Appleseed";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardCVC.innerText = "000";
})

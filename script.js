
const btnForSaved = document.querySelector("#showSaved");
const btnForNewOne = document.querySelector("#saveNew");
const btnBack = document.querySelector(".back");
btnForNewOne.addEventListener("click", () => showSliderN(3));
btnForSaved.addEventListener("click", () => showSliderN(2));
btnBack.addEventListener("click", () => showSliderN(1));


const showSliderN = function(number){
    document.querySelector("div.show").classList.remove("show");
    document.querySelector(`main > div:nth-child(${number})`).classList.add("show");
    if(number == 1){
        document.querySelector("header").classList.remove("show");
    }else{
        document.querySelector("header").classList.add("show");
    }
}
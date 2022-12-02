// bài 1

const day = document.getElementById("day");
const btnEnter_1 = document.querySelector(".result_1")
const firstDayWage = 100000;
const result_1 = document.getElementById("ex1_result");

btnEnter_1.addEventListener('click', () => {
    result_1.innerHTML = day.value * firstDayWage;
})

// bài 2

const num1 = document.getElementById("num1"),
    num2 = document.getElementById("num2"),
    num3 = document.getElementById("num3"),
    num4 = document.getElementById("num4"),
    num5 = document.getElementById("num5");

const btnEnter_2 = document.querySelector(".result_2")

const result_2 = document.getElementById("ex2_result_2");

btnEnter_2.addEventListener('click', () => {
    result_2.innerHTML = (Number(num1.value) + Number(num2.value) + Number(num3.value) + Number(num4.value) + Number(num5.value)) / 5;
})

// bài 3

const dollar = document.getElementById("dollar");
const btnEnter_3 = document.querySelector(".result_3")

const exchangeRate = 23500;

const result_3 = document.getElementById("ex3_result");

btnEnter_3.addEventListener('click', () => {
    result_3.innerHTML = dollar.value * exchangeRate;

})

// bài 4

const length = document.getElementById("length");
const width = document.getElementById("width");


const btnEnter_4 = document.querySelector(".result_4")

const area = document.getElementById("area");
const perimeter = document.getElementById("perimeter");


btnEnter_4.addEventListener('click', () => {
    area.innerHTML = length.value * width.value;
    perimeter.innerHTML = (Number(length.value) + Number(width.value)) * 2;
})

// bài 5
const number = document.getElementById("number");

const btnEnter_5 = document.querySelector(".result_5")

const result_5 = document.getElementById("ex5_result");


btnEnter_5.addEventListener('click', () => {
    result_5.innerHTML = number.value % 10 + Math.floor(number.value / 10);
})
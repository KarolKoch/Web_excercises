"use strict";
obj()
function obj() {
let hight = prompt("Building hight?");
let long = prompt("Long?");
let width = prompt("How wide?");
window.alert(hight * long * width)
};
let number = Math.floor(Math.random() * 11);
function play(){
    let userNumber = document.getElementById("userNumber").value;
    let message;
    if (userNumber > number) {
        message = "Twój numer jest za duży";
    } else if (userNumber < number) {
        message = "Twój numer jedt xa mały"
    } else {
        message = "Gratulacje! jest to właściwa liczba"
    }
    document.getElementById("message").innerHTML = message;
}
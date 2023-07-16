function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
        introText.classList.add('side-text-appear');
    }
    if (imagePosition < screenPosition) {
        sideImage.classList.add('sideImage-appear');
    }
}

window.addEventListener('scroll', scrollAppear);

function switchTAB() {
    var listSwitch = document.getElementById("list-switch");
    var searchSwitch = document.getElementById("search-switch");

    if (listSwitch.style.display === "none") {
        listSwitch.style.display = "grid";
        searchSwitch.style.display = "block";
    } else {
        listSwitch.style.display = "none";
        searchSwitch.style.display = "none";
    }
}

var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var btnToggle = document.getElementById("btn");
var btnLogin = document.getElementById("log");
var btnRegister = document.getElementById("reg");
var otherDiv = document.getElementById("other");
var isRegisterFormActive = false;

function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "50px";
    btnToggle.style.left = "110px";
    otherDiv.style.visibility = "hidden";
    btnRegister.style.color = "#fff";
    btnLogin.style.color = "#000";
    isRegisterFormActive = true;
}

function login() {
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    btnToggle.style.left = "0px";
    otherDiv.style.visibility = "visible";
    btnLogin.style.color = "#fff";
    btnRegister.style.color = "#000";
    isRegisterFormActive = false;
}

function goFurther() {
    var btnSubmit = document.getElementById('btnSubmit');
    if (document.getElementById("chkAgree").checked && isRegisterFormActive) {
        btnSubmit.style.background = 'linear-gradient(to right, #FA4B37, #DF2771)';
    } else {
        btnSubmit.style.background = '';
    }
}

function google() {
    window.location.href = "https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession";
}

$(document).ready(function () {
    $("form").submit(function () {
        alert("Great Job !");
        // Redirect to payment.html after form submission
        window.location.href = "payment.html";
        return false; // Prevent form submission (optional)
    });
});

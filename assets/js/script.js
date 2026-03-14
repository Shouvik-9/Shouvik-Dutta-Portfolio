document.addEventListener("DOMContentLoaded", function () {

const themeButtons = document.querySelectorAll("[data-theme]");
const themeStylesheet = document.getElementById("themeStylesheet");

// Load saved theme
const savedTheme = localStorage.getItem("selectedTheme");

if (savedTheme) {
themeStylesheet.setAttribute("href", savedTheme);


themeButtons.forEach((btn) => {
  if (btn.getAttribute("data-theme") === savedTheme) {
    btn.classList.add("active-theme");
  }
});


}

themeButtons.forEach((button) => {


button.addEventListener("click", function () {

  const themeFile = this.getAttribute("data-theme");

  // Apply theme
  themeStylesheet.setAttribute("href", themeFile);

  // Save theme in localStorage
  localStorage.setItem("selectedTheme", themeFile);

  // Update active button
  themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
  this.classList.add("active-theme");

});


});

var TxtType = function (el, toRotate, period) {

this.toRotate = toRotate;
this.el = el;
this.loopNum = 0;
this.period = parseInt(period, 10) || 2000;
this.txt = "";
this.isDeleting = false;
this.tick();
};

TxtType.prototype.tick = function () {

var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];

if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

var that = this;

var delta = 200 - Math.random() * 100;

if (this.isDeleting) delta /= 2;

if (!this.isDeleting && this.txt === fullTxt) {

  delta = this.period;
  this.isDeleting = true;

} 
else if (this.isDeleting && this.txt === "") {

  this.isDeleting = false;
  this.loopNum++;
  delta = 500;

}

setTimeout(function () {
  that.tick();
}, delta);


};

const elements = document.querySelectorAll(".typewrite");

elements.forEach((el) => {


const toRotate = el.getAttribute("data-type");
const period = el.getAttribute("data-period");

if (toRotate) {
  new TxtType(el, JSON.parse(toRotate), period);
}


});

emailjs.init("909AWBwBMRx1glAW_");

const form = document.getElementById("contact-form");

if (form) {

form.addEventListener("submit", function (e) {

  e.preventDefault();

  emailjs.sendForm(
    "service_sfd3zqf",
    "template_ue1yb85",
    this
  ).then(function () {

    alert("✅ Message sent successfully!");
    form.reset();

  }, function (error) {

    alert("❌ Failed to send message.");
    console.error(error);

  });

});

}

function reveal() {


const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element) => {

  const windowHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;

  if (elementTop < windowHeight - 100) {
    element.classList.add("active");
  }

});

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

});

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };



for (let i=0; i<=5; i++) {
  task(i);
}
  

function task(i, delay) {
setTimeout(function() {
    document.getElementById('box-1').innerHTML = `${i}+`;
  }, 700 * i);
}

  document.addEventListener("load", task);


for (let i=0; i<=15; i++) {
  task2(i);
}
  
function task2(i) {
setTimeout(function() {
    document.getElementById('box-2').innerHTML = `${i} +`;
}, 400 * i);
}
for (let i=0; i<=100; i++) {
  task3(i);
}
  
function task3(i) {
setTimeout(function() {
    document.getElementById('box-3').innerHTML = `${i} +`;
}, 120 * i);
}

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.right');
rightnav = document.querySelector('.rightnav');



burger.addEventListener('click', () =>{
    navbar.classList.toggle('h-class'); 
    navlist.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
});

function aos_init() {
  AOS.init({
    delay: 500,
    duration: 1000,
  });
}
$(window).on('load', function() {
  aos_init();
});
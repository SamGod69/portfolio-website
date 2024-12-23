let menuBtn = document.querySelector('.menu');
let closeBtn = document.querySelector('.close');
let sidebar = document.querySelector('.sidebar');
let overlay = document.querySelector('.overlay');
let menuOpen = false;

menuBtn.onclick = () => {
    sidebar.classList.toggle('animate');
    overlay.classList.toggle('onoff');
}
closeBtn.onclick = () => {
    sidebar.classList.toggle('animate');
    overlay.classList.toggle('onoff');
}
overlay.onclick = () => {
    sidebar.classList.toggle('animate');
    overlay.classList.toggle('onoff');
}
var container = document.querySelector('.container');
var toggleBtnEl = document.querySelector('.toggle');
var menuBtn = document.querySelector('.fa-bars');
var closeBtn = document.querySelector('.fa-xmark');
var itemsBar = document.querySelector('.items');
var itemEl = document.querySelectorAll('.item');


function resizing(){
    let width = window.innerWidth;
    if (width < 801) {
        itemsBar.style.display ="none";
        toggleBtnEl.classList.remove('hidden');
        menuBtn.classList.remove('hidden');
    } else {
        toggleBtnEl.classList.add('hidden');
        menuBtn.classList.add('hidden');
        closeBtn.classList.add('hidden');
        itemsBar.style.display ="flex";
    }
}


function toggle(){
    menuBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    itemsBar.style.display = (itemsBar.style.display === "none") ? "flex" : "none";
}
itemEl.forEach(item => {item.addEventListener('click', toggle)});
menuBtn.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);
window.addEventListener('resize', resizing);
window.addEventListener('load', resizing);

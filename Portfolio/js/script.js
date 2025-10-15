const menu= document.qyuerSelector("#menu");
const nav = document.querySelector(".links");

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
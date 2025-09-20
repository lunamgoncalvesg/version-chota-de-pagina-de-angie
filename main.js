document.querySelectorAll('nav ul li a')
    .forEach(link => link.addEventListener('click', () => change(link.dataset.id, link)))

function change(id, link) {
    let panels = document.querySelectorAll('main > div')
    panels.forEach(p => p.classList.remove('active'))
    document.getElementById(id).classList.add('active')
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'))
    link.classList.add('active')
}

let cart = document.querySelector('#cart');
let home = document.querySelector('#home');
let btns = document.querySelectorAll('#buy, #back');
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        cart.classList.toggle('active');
        home.classList.toggle('active');
    });
});
let links = document.querySelectorAll('nav ul li a');
let panels = document.querySelectorAll('main > .panel');
let current = 0;

function change(id, link = null) {
    panels.forEach(p => p.classList.remove('active'));
    links.forEach(a => a.classList.remove('active'));
    cart.classList.remove('active');
    panels[id].classList.add('active');
    if (link) {
        link.classList.add('active');
        current = id;
    } else {
        links[id].classList.add('active');
    }
}

links.forEach((link, index) =>
    link.addEventListener('click', () => change(index, link))
);

setInterval(() => {
    if(cart.classList.contains('active')) return;
    current = (current + 1) % panels.length;
    change(current);
}, 5000);

let cart = document.querySelector('#cart');
let home = document.querySelector('#home');
let btns = document.querySelectorAll('#buy, #back');
let form = document.querySelector('form');
let msg = document.querySelector('#msg');
let h1 = document.querySelector('#cart h1');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        cart.classList.toggle('active');
        home.classList.toggle('active');
        form.style.display = cart.classList.contains('active') ? 'grid' : 'none';
        if (!cart.classList.contains('active')) msg.innerHTML = '';
        else h1.style.display = 'block';
    });
});

let totalInput = document.querySelector('#total');
let units = 1;
let input = document.querySelector('input[type="number"]');

function updateTotal() {
    let total = units * 15000;
    totalInput.value = `$${total}`;
}

input.addEventListener('change', e => {
    units = e.target.value;
    updateTotal();
});

updateTotal();

form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    msg.innerHTML = '<h1>Su pedido llega en 3 días hábiles.</h1>';
    let h1 = document.querySelector('#cart h1');
    h1.style.display = 'none';
    let backBtn = document.querySelector("#back");
    backBtn.style.justifySelf = 'center';
    form.reset();
});
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
    btn.addEventListener('click', () => {
        cart.classList.toggle('active');
        home.classList.toggle('active');
    });
});

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let cantidad = document.querySelector('input[type="number"]').value;
    let total = cantidad * 15000;
    let msg = document.querySelector('#msg');
    if (!msg) {
        msg = document.createElement('div');
        msg.id = "mensaje-pedido";
        cart.appendChild(msg);
    }
    msg.innerHTML = `<h2>Su pedido llega en 3 días hábiles.<br>Total: $${total}</h2>`;
});

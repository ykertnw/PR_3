const $btn = document.getElementById('btn-kick');

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    const percent = this.damageHP / this.defaultHP * 100;
    this.elProgressbar.style.width = percent + '%';

    this.elProgressbar.classList.remove('low', 'critical');
    if (percent <= 20) {
        this.elProgressbar.classList.add('critical');
    } else if (percent <= 60) {
        this.elProgressbar.classList.add('low');
    }
}

function changeHP(count) {
    if (this.damageHP <= count) {
        this.damageHP = 0;
        this.renderHP();
        alert('Бедный ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
        this.renderHP();
    }
}


const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
};

$btn.addEventListener('click', function () {
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

function init() {
    character.renderHP();
    enemy.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();

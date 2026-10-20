const $btnKick = document.getElementById('btn-kick');
const $btnStrong = document.getElementById('btn-strong');

function createPokemon(name, id) {
    return {
        name: name,
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById('health-' + id),
        elProgressbar: document.getElementById('progressbar-' + id),
        renderHP: renderHP,
        renderHPLife: renderHPLife,
        renderProgressbarHP: renderProgressbarHP,
        changeHP: changeHP,
    };
}

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
        alert('Бідний ' + this.name + ' програв бій!');
        $btnKick.disabled = true;
        $btnStrong.disabled = true;
    } else {
        this.damageHP -= count;
        this.renderHP();
    }
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

const character = createPokemon('Pikachu', 'character');
const enemy = createPokemon('Charmander', 'enemy');

function fight(maxDamage) {
    character.changeHP(random(20));
    enemy.changeHP(random(maxDamage));
}

$btnKick.addEventListener('click', function () {
    fight(20);
});

$btnStrong.addEventListener('click', function () {
    fight(40);
});

function init() {
    character.renderHP();
    enemy.renderHP();
}

init();

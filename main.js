const $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
};

$btn.addEventListener('click', function () {
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

function init() {
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    const percent = person.damageHP / person.defaultHP * 100;
    person.elProgressbar.style.width = percent + '%';

    person.elProgressbar.classList.remove('low', 'critical');
    if (percent <= 20) {
        person.elProgressbar.classList.add('critical');
    } else if (percent <= 60) {
        person.elProgressbar.classList.add('low');
    }
}

function changeHP(count, person) {
    if (person.damageHP <= count) {
        person.damageHP = 0;
        renderHP(person);
        alert('Бедный ' + person.name + ' проиграл бой!');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
        renderHP(person);
    }
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();

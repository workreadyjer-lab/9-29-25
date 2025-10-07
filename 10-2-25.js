const originalColors = [];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createButtons() {
    const container = document.getElementById('buttons');
    container.innerHTML = '';
    originalColors.length = 0;
    for (let i = 0; i < 10; i++) {
        const btn = document.createElement('button');
        const color = getRandomColor();
        btn.innerText = `Button ${i + 1}`;
        btn.style.backgroundColor = color;
        originalColors.push(color);
        container.appendChild(btn);
    }
}

function changeColor(action) {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach((btn, index) => {
        if (action === 'random') {
            btn.style.backgroundColor = getRandomColor();
        } else if (action === 'reset') {
            btn.style.backgroundColor = originalColors[index];
        } else {
            btn.style.backgroundColor = action;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createButtons();
    const select = document.getElementById('color');
    select.addEventListener('change', function() {
        changeColor(this.value);
    });
});

    

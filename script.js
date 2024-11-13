const gridContainer = document.getElementById('grid-container');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 100; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create squares and add them to the grid
for (let i = 0; i < 50; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    });
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'lightgray';
    });
    gridContainer.appendChild(square);
}

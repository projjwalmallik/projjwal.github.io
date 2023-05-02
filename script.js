const coderBackground = document.querySelector('.coder-background');
const colors = ['#e91e63', '#2196f3', '#4caf50', '#ffc107', '#9c27b0'];
let index = 0;

function changeColor() {
	coderBackground.style.background = `linear-gradient(-45deg, ${colors[index]} 0%, ${colors[index + 1]} 100%)`;
	index = (index + 1) % colors.length;
}

setInterval(changeColor, 2000);

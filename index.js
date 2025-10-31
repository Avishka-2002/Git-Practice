const countEl = document.getElementById('count');
const incBtn = document.getElementById('inc');
const resetBtn = document.getElementById('reset');

let count = 0;

function render() {
	if (countEl) countEl.textContent = String(count);
}

if (incBtn) {
	incBtn.addEventListener('click', () => {
		count += 1;
		render();
	});
}

if (resetBtn) {
	resetBtn.addEventListener('click', () => {
		count = 0;
		render();
	});
}

// initial render
render();
console.log("Line 1")
function updateGradient(y) {
	document.documentElement.style.setProperty('--rotation', y * 0.3 + 5 + 'deg');
	
	/* also change --gradient-perc-1, --gradient-perc-2, --gradient-perc-3
	document.documentElement.style.setProperty('--gradient-perc-1', offset * 0.1 + 10 + '%');
	document.documentElement.style.setProperty('--gradient-perc-2', offset * 0.2 + 20 + '%');
	document.documentElement.style.setProperty('--gradient-perc-3', offset * 0.3 + 30 + '%');
	
	*/
}


window.addEventListener('scroll', () => {
	updateGradient(window.scrollY);
});

updateGradient(window.scrollY);
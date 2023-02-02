// get all divs with data-item attribute
const items = document.querySelectorAll('[data-item]');
const posIndicator = document.querySelector('#posIndicator__bar');

// add id to each item
items.forEach((item, index) => {

	// if there is already an item with the same id, add a number to the end of the id
	if (document.getElementById(item.dataset.item)) {
		item.id = item.dataset.item + index;
	}

	// if there is no item with the same id, add the id
	else {
		item.id = item.dataset.item;
	}

	// add a posIndicator a to the posIndicator div
	const a = document.createElement('a');
	a.href = '#' + item.id;
	a.id = 'Indicator:' + item.id;
	a.classList.add('posIndicator');
	a.innerHTML = index + ": " + item.dataset.item;
	posIndicator.appendChild(a);

})

// Check if the item is in the viewport 
const isInViewport = (el) => {
	const rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight / 1.25 || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Loop through all items and check if its at the top of the viewport, only one item can have the active class
let activeItem = null;

const checkActiveItem = () => {
	items.forEach(item => {

		const posIndicatorItem = document.getElementById('Indicator:' + item.id);

		if (isInViewport(item)) {
			if (activeItem) {
				activeItem.classList.remove('active');
			}
			activeItem = item;
			activeItem.classList.add('active');

			posIndicatorItem.classList.add('active');
			// scroll to the indicator item
			posIndicatorItem.scrollIntoView({block: 'nearest'});

		} else {
			posIndicatorItem.classList.remove('active');
		}

	});
}

// Add event listener to window to check if the active item has changed
window.addEventListener('scroll', checkActiveItem);
checkActiveItem()
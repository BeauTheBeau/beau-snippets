const container = document.getElementById("container")

const buttons = [
	document.getElementById("grid"),
	document.getElementById("list")
]

function layout(layout) {
	switch (layout) {
		case "grid":
			container.classList.remove("list");
			container.classList.add("grid");

			buttons[0].classList.add("active");
			buttons[1].classList.remove("active");

			localStorage.setItem("layout", "grid");

			break;
		case "list":
			container.classList.remove("grid");
			container.classList.add("list");

			buttons[0].classList.remove("active");
			buttons[1].classList.add("active");

			localStorage.setItem("layout", "list");

			break;

		default:
			container.classList.remove("grid");
			container.classList.remove("list");

			buttons[0].classList.remove("active");
			buttons[1].classList.remove("active");

			localStorage.setItem("layout", "default");

			break;
	}
}

// Get the layout from localStorage
const layoutFromStorage = localStorage.getItem("layout");

// If there is a layout in localStorage, use it
if (layoutFromStorage) {
	layout(layoutFromStorage);
}
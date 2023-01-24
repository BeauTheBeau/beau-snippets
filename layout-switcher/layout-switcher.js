function layout(layout) {
	const container = document.getElementById("container")

	switch (layout) {
		case "grid":
			container.classList.remove("list");
			container.classList.add("grid");
			break;
		case "list":
			container.classList.remove("grid");
			container.classList.add("list");
			break;

		default:
			container.classList.remove("grid");
			container.classList.remove("list");
			break;
	}
}

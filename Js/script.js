let enableNight = () => {
	var body = document.getElementById("body");

	if (body.classList.contains("theme--light")) {
		body.classList.remove("theme--light");
		body.classList.add("theme--dark");
	} else {
		body.classList.remove("theme--dark");
		body.classList.add("theme--light");
	}
};
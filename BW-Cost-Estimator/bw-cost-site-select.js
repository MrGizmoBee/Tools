function loadForm() {
	var type = document.querySelector("#site-type").value;
	console.log(type);
	if (type == "social") {
		document.querySelector("#form-load").innerHTML = socialForm;
		calculateBandwidthUsage();
	}
}

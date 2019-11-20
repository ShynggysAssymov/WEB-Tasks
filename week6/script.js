const b = document.getElementById("tasks").getElementsByTagName("button")
for (var i = 0; i < b.length; ++i) {
	b[i].addEventListener("click", function(event) {
		event.currentTarget.parentNode.dataset.status="done"
	})
};

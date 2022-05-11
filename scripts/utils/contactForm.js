export default { init, open, close, send };

function init(title) {
	document.querySelector("#modal__header-name").innerHTML = title;
	document.querySelector(".modal__close").addEventListener("click", close);
	document.querySelector(".modal__button").addEventListener("click", (e) => send(e));
}

function open() {
	const modal = document.getElementById("modal");
	const overlay = document.querySelector(".overlay");

	modal.setAttribute("aria-hidden", "false");
	overlay.setAttribute("aria-hidden", "false");
}

function close() {
	const modal = document.getElementById("modal");
	const overlay = document.querySelector(".overlay");

	modal.setAttribute("aria-hidden", "true");
	overlay.setAttribute("aria-hidden", "true");
}

function send(e) {
	const $inputs = {
		first: document.querySelector("input[name=first]"),
		last: document.querySelector("input[name=last]"),
		email: document.querySelector("input[name=email]"),
		message: document.querySelector("textarea[name=message]"),
	};

	console.log(
		`Prénom : ${$inputs.first.value}`,
		`\nNom : ${$inputs.last.value}`,
		`\nEmail : ${$inputs.email.value}`,
		`\nMessage : ${$inputs.message.value}`
	);

	e.preventDefault();
	close();
}

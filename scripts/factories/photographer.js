function photographerFactory(data) {
	const { id, name, portrait, city, country, tagline, price } = data;
	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		article.className = "photographer";
		article.innerHTML = `
			<a href="photographer.html?id=${id}" class="photographer__top">
				<img src="${picture}" alt="Photo du photographe ${name}" />
				<h2>${name}</h2>
			</a>
			<div class="photographer__bottom" tabindex="0">
				<p class="photographer__city">${city}</p>
				<p class="photographer__tagline">${tagline}</p>
				<p class="photographer__price">${price}€/jour</p>
			</div>
		`;

		return article;
	}

	function getUserBannerDOM() {
		const section = document.createElement("section");
		section.className = "photograph-banner";
		section.innerHTML = `
			<div class="photograph-banner__section photograph-banner__info" tabindex="0">
				<h1 class="photograph-banner__name">${name}</h1>
				<p class="photograph-banner__location">${city}, ${country}</p>
				<p class="photograph-banner__tagline">${tagline}</p>
			</div>
			<div class="photograph-banner__section">
				<button class="contact_button btn-primary" onclick="displayModal() tabindex="0"">Contactez-moi</button>
			</div>
			<div class="photograph-banner__section">
				<img src="assets/photographers/${portrait}" height="400" tabindex="0" />
			</div>
		`;

		return section;
	}

	return { id, name, portrait, city, tagline, price, getUserCardDOM, getUserBannerDOM };
}

export default photographerFactory;

function photographerFactory(data) {
	const { id, name, portrait, city, tagline, price } = data;
	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		article.className = "photographer";
		article.innerHTML = `
			<a href="photographer.html?id=${id}" class="photographer__top">
				<img src="${picture}" alt="Photo du photographe ${name}" />
				<h2>${name}</h2>
			</a>
			<div class="photographer__bottom" tabIndex="0">
				<p class="photographer__city">${city}</p>
				<p class="photographer__tagline">${tagline}</p>
				<p class="photographer__price">${price}€/jour</p>
			</div>
		`;

		return article;
	}
	return { id, name, portrait, city, tagline, price, getUserCardDOM };
}

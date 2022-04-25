function photographerFactory(data) {
	const { id, name, portrait, city, tagline, price } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement("article");
		article.className = "photographer";
		article.tabIndex = 0;

		const img = document.createElement("img");
		img.setAttribute("src", picture);

		const h2 = document.createElement("h2");
		h2.textContent = name;

		const p_city = document.createElement("p");
		p_city.textContent = city;
		p_city.className = "photographer__city";

		const p_tagline = document.createElement("p");
		p_tagline.textContent = tagline;
		p_tagline.className = "photographer__tagline";

		const p_price = document.createElement("p");
		p_price.textContent = `${price}€/jour`;
		p_price.className = "photographer__price";

		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p_city);
		article.appendChild(p_tagline);
		article.appendChild(p_price);
		return article;
	}
	return { id, name, portrait, city, tagline, price, getUserCardDOM };
}

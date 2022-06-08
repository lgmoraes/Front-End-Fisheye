export default class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer
  }

  create() {
    const article = document.createElement('article')
    article.className = 'photographer'
    article.innerHTML = `
			<a href="photographer.html?id=${this._photographer.id}" class="photographer__top">
				<img
          src="assets/photographers/${this._photographer.portrait}"
          alt="Photo du photographe ${this._photographer.name}"
        />
				<h2>${this._photographer.name}</h2>
			</a>
			<div class="photographer__bottom" tabindex="0">
				<p class="photographer__city">${this._photographer.city}</p>
				<p class="photographer__tagline">${this._photographer.tagline}</p>
				<p class="photographer__price">${this._photographer.price}€/jour</p>
			</div>
		`

    return article
  }
}

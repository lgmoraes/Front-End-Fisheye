import contactForm from '../utils/contactForm'

export default class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer
  }

  create() {
    const section = document.createElement('section')
    section.className = 'photograph-banner'
    section.innerHTML = `
			<div class="photograph-banner__section photograph-banner__info">
				<h1 class="photograph-banner__name" tabindex="0">${this._photographer.name}</h1>
        <div tabindex="0">
          <p class="photograph-banner__location">
            ${this._photographer.city}, ${this._photographer.country}
          </p>
          <p class="photograph-banner__tagline">${this._photographer.tagline}</p>
        </div>
			</div>
			<div class="photograph-banner__section">
				<button class="contact_button btn-primary" tabindex="0">Contactez-moi</button>
			</div>
			<div class="photograph-banner__section photograph-banner__photo">
				<img
          src="assets/photographers/${this._photographer.portrait}"
          alt="photographer"
          height="400"
          tabindex="0"
        />
			</div>
		`

    section
      .querySelector('.contact_button')
      .addEventListener('click', contactForm.open)

    return section
  }
}

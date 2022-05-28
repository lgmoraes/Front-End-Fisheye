import API from '../api'
import photographerFactory from '../factories/photographer'
import mediaFactory from '../factories/media'
import contactForm from '../utils/contactForm'
import lightbox from '../utils/lightbox'

async function displayData(data) {
  const photographBanner = document.querySelector('.photograph-banner')
  const mediasSection = document.querySelector('.medias')

  const photographerModel = photographerFactory(data.photographer)
  const photographerBannerDOM = photographerModel.getUserBannerDOM()

  /* BANNER */

  photographBanner.parentElement.replaceChild(
    photographerBannerDOM,
    photographBanner
  )

  /* THUMBNAILS */

  data.medias.forEach((media) => {
    const mediaModel = mediaFactory(media, data.photographer)
    const mediaCardDOM = mediaModel.getThumbnailDOM()

    mediasSection.appendChild(mediaCardDOM)
  })

  document.querySelectorAll('.medias video').forEach((video) => {
    video.addEventListener('mouseenter', () => {
      video.play()
    })
    video.addEventListener('mouseleave', () => {
      video.pause()
    })
  })

  /* KEY NAVIGATION */

  const logo = document.querySelector('.header__logo')
  const thumbnailLast = document.querySelector(
    '.media:last-child .media__heart'
  )

  logo.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !e.shiftKey) return false

    thumbnailLast.focus()
    document.querySelector('html').scrollTop += 100
    e.preventDefault()
  })
  thumbnailLast.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || e.shiftKey) return false

    logo.focus()
    document.querySelector('html').scrollTop = 0
    e.preventDefault()
  })

  /* INSERT */

  const likes = data.medias.reduce((cumul, media) => cumul + media.likes, 0)

  const insertDOM = document.querySelector('.insert')
  insertDOM.className = 'insert'
  insertDOM.setAttribute('tabindex', '0')
  insertDOM.innerHTML = `
		<p class="insert__likes">${likes}</p>
		<p class="insert__price">${data.photographer.price}€ / jour</p>
	`
}

async function init() {
  const photographerId = parseInt(
    new URL(document.location).searchParams.get('id')
  )
  const data = await API.getMedias(photographerId)

  /* Affiche le photographe et ses photos */
  displayData(data)

  /* MODAL & LIGHTBOX */
  contactForm.init(data.photographer.name)
  lightbox.init(data.medias, data.photographer.name)
}

init()

export function like(article) {
  const heart = article.querySelector('.media__heart')
  const counter = article.querySelector('.media__counter')
  const counterTotal = document.querySelector('.insert p')

  const likes = parseInt(counter.innerHTML)
  const likesTotal = parseInt(counterTotal.innerHTML)

  if (heart.classList.contains('media__heart--empty')) {
    heart.classList.remove('media__heart--empty')
    counter.textContent = likes + 1
    counterTotal.textContent = likesTotal + 1
  } else {
    heart.classList.add('media__heart--empty')
    counter.textContent = likes - 1
    counterTotal.textContent = likesTotal - 1
  }
}

import API from '../api'
import MediasFactory from '../factories/MediasFactory'
import PhotographersFactory from '../factories/PhotographersFactory'
import ThumbnailsFactory from '../factories/ThumbnailsFactory'
import PhotographerBanner from '../templates/PhotographerBanner'
import contactForm from '../utils/contactForm'
import lightbox from '../utils/lightbox'
import { getNodeIndexIn, minmax } from '../utils/functions'

/* Datas envoyés par l'API */
let data
/* Contien une instance de Photographer */
let photographer
/* Contien des instances de MediaImage et MediaVideo */
const medias = []
/* Tableau d'association entre les datas et les éléments HTML */
const mediasElements = {}

init()

async function displayData(data) {
  const photographBanner = document.querySelector('.photograph-banner')
  const mediasSection = document.querySelector('.medias')

  /* BANNER */

  const photographer = new PhotographersFactory(data.photographer)
  const photographerBannerDOM = new PhotographerBanner(photographer).create()

  photographBanner.parentElement.replaceChild(
    photographerBannerDOM,
    photographBanner
  )

  /* THUMBNAILS */

  data.medias.forEach((mediaData) => {
    const type = mediaData.image ? 'image' : 'video'
    const media = new MediasFactory(mediaData, type)
    const mediaCardDOM = new ThumbnailsFactory(media, type).create()

    /* L'élément est listé pour pouvoir être trié plus tard */
    mediasElements[media.id] = mediaCardDOM

    mediasSection.appendChild(mediaCardDOM)
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
  data = await API.getMedias(photographerId)

  /* Affiche le photographe et ses photos */
  displayData(data)

  /* MODAL & LIGHTBOX */
  contactForm.init(data.photographer.name)
  lightbox.init(data.medias, data.photographer.name)

  /* TRI */
  const dropdownToggleElement = document.querySelector('.dropdown__toggle')
  const dropdownMenu = document.querySelector('.dropdown__menu')
  const dropdownItems = document.querySelectorAll('.dropdown__item')

  /* Controles du Dropdown */
  dropdownToggleElement.addEventListener('click', dropdownToggle)
  dropdownToggleElement.addEventListener('keydown', function (e) {
    if (e.key !== ' ' && e.key !== 'Enter') return false

    dropdownToggle()
    document.querySelector('.dropdown__item').focus()
    e.preventDefault()
  })
  dropdownItems.forEach((item) =>
    item.addEventListener('click', () => {
      sort(item.getAttribute('data-sort'))
      dropdownToggle()
      document.querySelector('.dropdown__toggle').innerHTML = item.innerHTML
      dropdownToggleElement.focus()
    })
  )
  document
    .querySelector('.dropdown__item:last-child')
    .addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && !e.shiftKey) dropdownToggle()
    })
  dropdownMenu.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return false

    let focusIndex = getNodeIndexIn(e.target, dropdownItems)
    if (e.key === 'ArrowUp') focusIndex--
    else if (e.key === 'ArrowDown') focusIndex++

    focusIndex = minmax(focusIndex, 0, dropdownItems.length - 1)
    dropdownItems[focusIndex].focus()

    e.preventDefault()
  })
  dropdownMenu.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') dropdownToggle()
  })
}

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

function dropdownToggle() {
  const dropdown = document.querySelector('.dropdown')
  const dropdownToggle = document.querySelector('.dropdown__toggle')
  const dropdownMenu = document.querySelector('.dropdown__menu')

  if (dropdownToggle.classList.contains('hidden')) {
    dropdownToggle.classList.remove('hidden')
    dropdownMenu.classList.add('hidden')
    dropdownToggle.setAttribute('aria-expended', 'false')
    dropdown.classList.remove('expanded')
  } else {
    dropdownToggle.classList.add('hidden')
    dropdownMenu.classList.remove('hidden')
    dropdownToggle.setAttribute('aria-expended', 'true')
    dropdown.classList.add('expanded')
  }
}

function sort(arg) {
  const mediasSection = document.querySelector('.medias')
  const medias = getMedias()

  medias.sort((a, b) => {
    if (a[arg] < b[arg]) return -1
    if (a[arg] > b[arg]) return 1

    return 0
  })

  if (arg !== 'title') medias.reverse()

  medias.forEach((media) => mediasSection.appendChild(mediasElements[media.id]))
}

export function getMedias() {
  if (medias.length === 0)
    data.medias.forEach((media) => {
      const type = media.image ? 'image' : 'video'
      medias.push(new MediasFactory(media, type))
    })

  return medias
}

export function getPhotographer() {
  if (photographer === undefined)
    photographer = new PhotographersFactory(data.photographer)

  return photographer
}

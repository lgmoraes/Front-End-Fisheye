import { getPhotographFolder } from '../utils/functions'

const mediaList = []
let mediaListIndex = 0
let photographFolder

function init(medias, photographerName) {
  const lightbox = document.querySelector('.lightbox')
  const arrowLeft = document.querySelector('.lightbox__arrowLeft')
  const arrowRight = document.querySelector('.lightbox__arrowRight')
  const closeBtn = document.querySelector('.lightbox__close')

  photographFolder = getPhotographFolder(photographerName)

  medias.forEach((m) => {
    mediaList.push(m)
  })

  arrowLeft.addEventListener('click', previous)
  arrowRight.addEventListener('click', next)
  closeBtn.addEventListener('click', close)
  lightbox.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return false

    if (e.target === lightbox && e.shiftKey) {
      closeBtn.focus()
      e.preventDefault()
    } else if (e.target === closeBtn && !e.shiftKey) {
      lightbox.focus()
      e.preventDefault()
    }
  })
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      previous()
    } else if (e.key === 'ArrowRight') {
      next()
    }
  })
  lightbox.addEventListener('keydown', (e) => {
    if (e.key !== ' ' && e.key !== 'Enter') return false

    if (e.target === closeBtn) {
      close()
    } else if (e.target === arrowLeft) {
      previous()
    } else if (e.target === arrowRight) {
      next()
    }
  })
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })
}

function open(index) {
  const body = document.querySelector('body')
  const main = document.querySelector('main')
  const overlay = document.querySelector('.overlay')
  const lightbox = document.querySelector('.lightbox')

  lightbox.setAttribute('aria-hidden', 'false')
  overlay.setAttribute('aria-hidden', 'false')
  main.setAttribute('aria-hidden', 'true')
  body.classList.add('no-scroll')

  displayMedia(index)

  lightbox.focus()
}

function close() {
  const body = document.querySelector('body')
  const main = document.querySelector('main')
  const lightbox = document.querySelector('.lightbox')
  const img = document.querySelector('.lightbox__img')
  const overlay = document.querySelector('.overlay')

  lightbox.setAttribute('aria-hidden', 'true')
  overlay.setAttribute('aria-hidden', 'true')
  main.setAttribute('aria-hidden', 'false')
  body.classList.remove('no-scroll')

  /* Prevent image flash when re-open */
  img.removeAttribute('src')
}

function displayMedia(index) {
  const img = document.querySelector('.lightbox__img')
  const video = document.querySelector('.lightbox__video')
  const title = document.querySelector('.lightbox__title')

  mediaListIndex = index

  title.innerHTML = mediaList[index].title

  if (mediaList[index].image) {
    video.setAttribute('aria-hidden', 'true')

    img.setAttribute('aria-hidden', 'false')
    img.src = `assets/medias/${photographFolder}/${mediaList[index].image}`
  } else {
    img.removeAttribute('src') // Prevent image flash when re-open
    img.setAttribute('aria-hidden', 'true')

    video.setAttribute('aria-hidden', 'false')
    video.src = `assets/medias/${photographFolder}/${mediaList[index].video}`
  }
}

function next() {
  mediaListIndex++

  if (mediaListIndex > mediaList.length - 1) mediaListIndex = 0

  displayMedia(mediaListIndex)
}

function previous() {
  mediaListIndex--

  if (mediaListIndex < 0) mediaListIndex = mediaList.length - 1

  displayMedia(mediaListIndex)
}

export default { mediaList, init, open, close, next, previous }

import { getElementIndex } from '../utils/functions'
import { like } from '../pages/photographer'
import lightbox from '../utils/lightbox'

export default class ThumbnailImage {
  constructor(media) {
    this._media = media
  }

  create() {
    const article = document.createElement('article')

    article.className = 'media'
    article.innerHTML = `
      <img class="media__thumbnail"
        src="assets/thumbnails/${this._media.folder}/${this._media.image}"
        alt="${this._media.title}"
        tabindex="0"
      />
      <div class="media__desc">
        <h2 class="media__name" tabindex="0">${this._media.title}</h2>

        <div class="media__likes">
          <span class="media__counter">${this._media.likes}</span>
          <div
            class="media__heart media__heart--empty"
            role="button"
            aria-label="likes"
            tabindex="0"
          ></div>
        </div>
      </div>
		`

    const thumbnail = article.querySelector('.media__thumbnail')
    const heart = article.querySelector('.media__heart')

    article.addEventListener('click', function () {
      const index = getElementIndex(this)
      lightbox.open(index)
    })

    heart.addEventListener('click', function (e) {
      like(article)
      e.stopPropagation()
    })

    article.addEventListener('keydown', function (e) {
      if (e.key !== ' ' && e.key !== 'Enter') return false

      const index = getElementIndex(this)

      if (e.target === heart) like(this)
      else if (e.target === thumbnail) lightbox.open(index)

      e.preventDefault()
    })

    return article
  }
}

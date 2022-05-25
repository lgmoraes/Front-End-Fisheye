import { getPhotographFolder, getElementIndex } from '../utils/functions'
import { like } from '../pages/photographer'
import lightbox from '../utils/lightbox'

export default function mediaFactory(media, photographer) {
  const { id, title, date, likes } = media
  const mediaFolder = getPhotographFolder(photographer.name)

  function getThumbnailDOM() {
    const article = document.createElement('article')

    article.className = 'media'
    article.innerHTML = `
			${
        media.image
          ? `<img class="media__thumbnail" src="assets/thumbnails/${mediaFolder}/${media.image}" tabindex="0" />`
          : `<video class="media__thumbnail" src="assets/thumbnails/${mediaFolder}/${media.video}" muted="true"></video>`
      }
			<div class="media__desc">
				<h2 class="media__name" tabindex="0">${title}</h2>

				<div class="media__likes">
          <span class="media__counter">${likes}</span>
          <div class="media__heart media__heart--empty" role="button" aria-label="likes" tabindex="0"></div>
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

  return { id, title, date, likes, getThumbnailDOM }
}

import { getPhotographFolder } from '../utils/functions'
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
          ? `<img class="media__thumbnail" src="assets/thumbnails/${mediaFolder}/${media.image}" />`
          : `<video class="media__thumbnail" src="assets/thumbnails/${mediaFolder}/${media.video}" muted="true"></video>`
      }
			<div class="media__desc">
				<h2 class="media__name">${title}</h2>
				<p class="media__likes">${likes} ❤</p>
			</div>
		`

    article.addEventListener('click', function () {
      const index = Array.from(this.parentElement.children).indexOf(this)
      lightbox.open(index)
    })

    return article
  }

  return { id, title, date, likes, getThumbnailDOM }
}

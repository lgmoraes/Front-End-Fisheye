import { getPhotographFolder } from "../utils/functions";

export default function mediaFactory(media, photographer) {
	const { id, title, file, date, likes } = media;
	const mediaFolder = getPhotographFolder(photographer.name);

	function getThumbnailDOM() {
		const article = document.createElement("article");

		article.className = "media";
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
		`;

		return article;
	}

	return { id, title, file, date, likes, getThumbnailDOM };
}

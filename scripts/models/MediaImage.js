import Media from './Media'

class MediaImage extends Media {
  constructor(media) {
    super(media)
    this._image = media.image
  }

  get image() {
    return this._image
  }
}

export default MediaImage

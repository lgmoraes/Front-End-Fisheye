import Media from './Media'

class MediaVideo extends Media {
  constructor(media) {
    super(media)
    this._video = media.video
  }

  get video() {
    return this._video
  }
}

export default MediaVideo

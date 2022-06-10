import ThumbnailImage from '../templates/ThumbnailImage'
import ThumbnailVideo from '../templates/ThumbnailVideo'

export default class ThumbnailFactory {
  constructor(data, type) {
    if (type === 'image') {
      return new ThumbnailImage(data)
    } else if (type === 'video') {
      return new ThumbnailVideo(data)
    } else {
      console.error('Unknown type format')
    }
  }
}

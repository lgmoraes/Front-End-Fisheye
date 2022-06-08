import MediaImage from '../models/MediaImage'
import MediaVideo from '../models/MediaVideo'

export default class MediasFactory {
  constructor(data, type) {
    if (type === 'image') {
      return new MediaImage(data)
    } else if (type === 'video') {
      return new MediaVideo(data)
    } else {
      console.error('Unknown type format')
    }
  }
}

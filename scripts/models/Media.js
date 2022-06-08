import { getPhotographer } from '../pages/photographer'
import { getPhotographFolder } from '../utils/functions'

class Media {
  constructor(media) {
    this._id = media.id
    this._photographerId = media.photographerId
    this._title = media.title
    this._likes = media.likes
    this._date = media.date
    this._price = media.price
    this._folder = getPhotographFolder(
      getPhotographer(this._photographerId).name
    )
  }

  get id() {
    return this._id
  }

  get photographerId() {
    return this._photographerId
  }

  get title() {
    return this._title
  }

  get likes() {
    return this._likes
  }

  get date() {
    return this._date
  }

  get price() {
    return this._price
  }

  get folder() {
    return this._folder
  }
}

export default Media

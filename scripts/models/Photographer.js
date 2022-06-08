import { getPhotographFolder } from '../utils/functions'

export default class Photographer {
  constructor(data) {
    this._id = data.id
    this._name = data.name
    this._city = data.city
    this._country = data.country
    this._tagline = data.tagline
    this._price = data.price
    this._portrait = data.portrait
    this._folder = getPhotographFolder(this._name)
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get city() {
    return this._city
  }

  get tagline() {
    return this._tagline
  }

  get country() {
    return this._country
  }

  get price() {
    return this._price
  }

  get portrait() {
    return this._portrait
  }

  get folder() {
    return this._folder
  }
}

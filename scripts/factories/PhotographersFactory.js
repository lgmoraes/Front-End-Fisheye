import Photographer from '../models/Photographer'

export default class PhotographersFactory {
  constructor(data) {
    return new Photographer(data)
  }
}

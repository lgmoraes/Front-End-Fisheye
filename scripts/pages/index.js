import '../../scss/main.scss'
import API from '../api.js'
import PhotographersFactory from '../factories/PhotographersFactory.js'
import PhotographerCard from '../templates/PhotographerCard'

async function displayData() {
  const photographersSection = document.querySelector('.photographers')
  const data = await API.getPhotographers()

  data.forEach((photographerData) => {
    const photographer = new PhotographersFactory(photographerData)
    const photographerCardDOM = new PhotographerCard(photographer).create()
    photographersSection.appendChild(photographerCardDOM)
  })
}

async function init() {
  // Affiche les photographes
  displayData()
}

init()

import '../../scss/main.scss'
import API from '../api.js'
import photographerFactory from '../factories/photographer.js'

async function displayData() {
  const photographersSection = document.querySelector('.photographers')
  const data = await API.getPhotographers()

  data.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Affiche les photographes
  displayData()
}

init()

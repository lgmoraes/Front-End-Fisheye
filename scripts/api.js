export default {
  getMedias: async function (id) {
    return await fetch('../../data/photographers.json')
      .then((res) => res.json())
      .then((res) => ({
        photographer: res.photographers.find((p) => p.id === id),
        medias: res.media.filter((m) => m.photographerId === id),
      }))
  },
  getPhotographers: async function () {
    return await fetch('../../data/photographers.json')
      .then((res) => res.json())
      .then((res) => res.photographers)
  },
}

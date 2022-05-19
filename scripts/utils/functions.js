export function getPhotographFolder(name) {
  return name.split(' ')[0]
}

export function getElementIndex(el) {
  return Array.from(el.parentElement.children).indexOf(el)
}

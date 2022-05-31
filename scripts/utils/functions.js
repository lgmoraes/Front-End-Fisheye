export function getPhotographFolder(name) {
  return name.split(' ')[0]
}

export function getElementIndex(el) {
  return Array.from(el.parentElement.children).indexOf(el)
}

export function getNodeIndexIn(node, nodes) {
  return Array.from(nodes).indexOf(node)
}

export function minmax(n, min, max) {
  return Math.min(Math.max(n, min), max)
}

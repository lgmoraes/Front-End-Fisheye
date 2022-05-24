function init(title) {
  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.modal__button')
  const modalClose = document.querySelector('.modal__close')

  document.querySelector('#modal__header-name').innerHTML = title
  document
    .querySelector('#modal__title')
    .setAttribute('aria-label', `Contact me ${title}`)

  modalButton.addEventListener('click', (e) => send(e))
  modalClose.addEventListener('click', close)
  modalClose.addEventListener('keydown', (e) => {
    if (e.key !== ' ' && e.key !== 'Enter') return false

    close()
  })
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return false

    if (e.target === modal && e.shiftKey) {
      modalClose.focus()
      e.preventDefault()
    } else if (e.target === modalClose && !e.shiftKey) {
      modal.focus()
      e.preventDefault()
    }
  })
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })
}

function open() {
  const body = document.querySelector('body')
  const main = document.querySelector('main')
  const modal = document.querySelector('.modal')
  const overlay = document.querySelector('.overlay')

  modal.setAttribute('aria-hidden', 'false')
  overlay.setAttribute('aria-hidden', 'false')
  main.setAttribute('aria-hidden', 'true')
  body.classList.add('no-scroll')

  modal.focus()
}

function close() {
  const body = document.querySelector('body')
  const main = document.querySelector('main')
  const modal = document.querySelector('.modal')
  const overlay = document.querySelector('.overlay')

  modal.setAttribute('aria-hidden', 'true')
  overlay.setAttribute('aria-hidden', 'true')
  main.setAttribute('aria-hidden', 'false')
  body.classList.remove('no-scroll')
}

function send(e) {
  const inputs = {
    first: document.querySelector('input[name=first]'),
    last: document.querySelector('input[name=last]'),
    email: document.querySelector('input[name=email]'),
    message: document.querySelector('textarea[name=message]'),
  }

  console.log(
    `Prénom : ${inputs.first.value}`,
    `\nNom : ${inputs.last.value}`,
    `\nEmail : ${inputs.email.value}`,
    `\nMessage : ${inputs.message.value}`
  )

  e.preventDefault()
  close()
}

export default { init, open, close, send }

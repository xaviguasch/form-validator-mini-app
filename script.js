const form = document.getElementById('main-form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
const showError = (input, message) => {
  const formGroup = input.parentElement

  formGroup.className = 'form-group error'

  const small = formGroup.querySelector('small')

  small.innerText = message
}

// Show success outline
const showSuccess = input => {
  const formGroup = input.parentElement

  formGroup.className = 'form-group success'
}

// Check if email is valid
const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault()

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, 'email is required')
  } else if (!isValidEmail(email.value)) {
    showError(email, 'email is not valid')
  } else {
    showSuccess(email)
  }

  if (password.value === '') {
    showError(password, 'password is required')
  } else {
    showSuccess(password)
  }

  if (password2.value === '') {
    showError(password2, 'password2 is required')
  } else {
    showSuccess(password2)
  }
})

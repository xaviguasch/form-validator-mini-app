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
const checkEmail = input => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

// Check passwords match
const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
  }
}

// Get fieldname
const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Check required fields
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.length >= min && input.value.length <= max) {
    showSuccess(input)
  } else {
    showError(input, `${getFieldName(input)} has be between ${min} and ${max} characters`)
  }
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault()

  checkRequired([username, email, password, password2])

  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, password2)
})

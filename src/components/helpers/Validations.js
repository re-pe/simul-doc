import emailValidator from 'email-validator'

export function validateLength (
    value,
    minimumLengthToPass = 1,
    errorText = 'invalid input'
) {
  return value.length < minimumLengthToPass && errorText
}

export function validateEmail (value, errorText = 'Wrong email') {
  return !emailValidator.validate(value) && errorText
}

import emailValidator from 'email-validator';

export const validateRequired = value => (value ? undefined : 'Required');
export const validateEmail = value => (emailValidator.validate(value) ? undefined : 'Wrong email');
export const validateLength = length => value => (value && value.length < length
  ? `Must be ${length} characters or more`
  : undefined);

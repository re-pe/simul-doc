import emailValidator from 'email-validator';

export const validateRequired = value => (value ? undefined : 'Required');
export const validateEmail = value => (emailValidator.validate(value) ? undefined : 'Wrong email');

// export const validateLength = length => value => (value && value.length < length
//   ? `Must be ${length} characters or more`
//   : undefined);
// and then use it like validateLength(8);
// validation dont reacts on input, when u start writing other field then starts validating previous
// will try unerstand why later, for now will use
export const validateLength = value => (value && value.length < 6 ? 'Must be 6 characters or more' : undefined);

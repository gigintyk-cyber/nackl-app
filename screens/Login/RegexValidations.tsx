export const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Uppercase = /[A-Z]/;
const Lowercase = /[a-z]/;
const Number = /\d/;
const SpecialChar = /[\W_]/;

export const PasswordValidation =
  Uppercase && Lowercase && Number && SpecialChar;

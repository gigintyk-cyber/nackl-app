export const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

const Uppercase = /[A-Z]/.test(text);
const Lowercase = /[a-z]/.test(text);
const Number = /\d/.test(text);
const SpecialChar = /[\W_]/.test(text);

export const PasswordValidation =
  Uppercase && Lowercase && Number && SpecialChar;

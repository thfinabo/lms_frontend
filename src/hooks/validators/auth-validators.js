import { object, string } from 'yup';

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const passwordPhrase =
    'Password must be at least 8 characters long and must contain one of each (upper case, lower case and special characters) ';

export const signUpValidator = object().shape({
    password: string()
        .matches(passwordRegex, passwordPhrase)
        .required('Fill in your password'),
    firstName: string().trim().required('First Name Required'),
    lastName: string().trim().required('Last Name Required'),
    email: string().trim().email().required(),
});
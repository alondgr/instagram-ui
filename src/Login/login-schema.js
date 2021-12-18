import * as yup from 'yup';

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const sepcialCharRegex = /(?=.*[!@#$%^&*()])/;

const loginSchema = yup.object().shape({

    username: yup.string()
        .min(3)
        .max(12)
        .required(),
        password: yup.string()
        .matches(lowercaseRegex, 'one lowercase required!')
        .matches(uppercaseRegex, 'one uppercase required!')
        .matches(numericRegex, 'one number required!')
        .matches(sepcialCharRegex, 'one special character required!')
        .min(6, 'Minimum 6 characters required!')
        .required('Required!'),
});

export default loginSchema;

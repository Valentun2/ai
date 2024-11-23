import * as Yup from 'yup';

export const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid. Try again!')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'The password does not fit. Try again!')
    .required('Password is required'),
});

export const validationAuthSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid. Try again!')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 6 characters')
    .required('Password is required'),
  firstName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('Name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('Name is required'),
});

export const validationUpdateSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid. Try again!')
    .required('Email is required'),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  oldPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  firstName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('Name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('Name is required'),
});

import { useState } from 'react';
import InputModal from './InputModal';

import { login } from 'api/login';
import { setBearerToken } from 'components/Header';
import { validationLoginSchema } from 'shemas/shemas';
import toast from 'react-hot-toast';

const SignIn = ({
  setIsOpenSignIn,
  setToken,
  openModal,
  closeModal,
  setUserData,
}) => {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };

  // const handleClick = () => {
  //   setIsOpenSignIn(false);
  // };

  const onSubmit = async evt => {
    evt.preventDefault();
    const email = evt.target.email.value.trim();
    const password = evt.target.password.value.trim();

    if (!email || !password) {
      alert('Please fill in both fields.'); // Просте повідомлення про помилку
      return;
    }

    const data = { email, password };

    try {
      await validationLoginSchema.validate(data, { abortEarly: false });
      setErrors({});
      // console.log('Form submitted:', data);
      const userData = await login(data);
      setUserData({
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        email: userData.user.email,
      });
      // console.log(userData);
      // setUserData({ ...userData.user });
      localStorage.setItem('token', userData.token);
      // localStorage.setItem('user', {
      //   firstName: userData.user.firstName,
      //   lastName: userData.user.lastName,
      // });
      setToken(userData.token);
      setBearerToken(userData.token);
      closeModal();
      evt.target.reset(); // Очищення форми тільки у разі успіху
      toast.success('Account created successfully!');
    } catch (err) {
      if (err.name === 'ValidationError') {
        // Обробка помилок Yup
        const newErrors = {};
        err.inner.forEach(validationError => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
        // console.log(errors.password);
      } else {
        // Обробка помилок бекенду
        // console.error('Backend error:', err.message);

        toast(
          err.response?.data?.message ||
            'Something went wrong. Please try again.'
        );
      }
    }
  };

  return (
    <div
      className={`w-[100%] h-[100vh] fixed top-[81px] bg-black bg-opacity-60 backdrop-blur-md  `}
    >
      <div className="relative w-[358px] md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl top-1/2  translate-x-[-50%] left-1/2 translate-y-[-50%]">
        <button
          onClick={closeModal}
          className="cursor-pointer absolute right-[12px] top-3 bg-transparent"
        >
          <svg
            width={24}
            height={24}
            className="flex p-2 justify-center items-center w-8 h-8  rounded-[6px] pointer-events-none"
          >
            <use
              width={14}
              height={14}
              href="ai/image/icons.svg#icon-close"
            ></use>
          </svg>
        </button>{' '}
        <h3 className="font-semibold text-[24px] text-center">
          Sign In Account
        </h3>
        <p className="text-[16px] text-pricingText text-center mt-2">
          Enter your personal data to login your account.
        </p>
        <button className="cursor-pointer w-full py-3 bg-input rounded-xl border-cardsTransparent mt-4">
          Continue with Google
        </button>
        <p className="mt-4 text-center flex items-center  justify-between before:block before:content-['']  before:w-[250px] before:h-[1px] before:bg-inputTransparent after:block after:content-['']  after:w-[250px] after:h-[1px] after:bg-inputTransparent ">
          or
        </p>
        <form onSubmit={onSubmit} className=" mt-4  ">
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <InputModal
                name={'email'}
                value={'bialovetskyi@getmyhelp.com'}
                labelText={'Email'}
                styleList={'w-full'}
                handleChange={handleChange}
                err={errors.email}
              />
            </div>
            <div className="relative">
              <InputModal
                err={errors.password}
                handleChange={handleChange}
                name={'password'}
                styleList={'w-full'}
                value={'mg20uzowo6c7cexh3qsd'}
                labelText={'Password'}
              />
            </div>
          </div>
          <button className="mt-10 bg-white rounded-xl text-black text-[14px] w-full py-3">
            Get Started
          </button>
          <div className="flex justify-center mt-4">
            <p className="text-[14px] text-cardsText">Don’t have an account?</p>
            <p
              onClick={() => {
                console.log(openModal);
                openModal('authModal');
              }}
              className="cursor-pointer text-[#008CFF] text-[14px] ml-1"
            >
              Sign up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

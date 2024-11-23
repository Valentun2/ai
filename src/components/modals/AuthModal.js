import { auth } from 'api/auth';
import InputModal from './InputModal';
import { login } from 'api/login';
import { useState } from 'react';
import { validationAuthSchema } from 'shemas/shemas';
import { setBearerToken } from 'components/Header';
import toast from 'react-hot-toast';

const AuthModal = ({ openModal, setToken, closeModal, setUserData }) => {
  // const [formValues, setFormValues] = useState({
  //   email: '',
  //   password: '',
  // });

  const [errors, setErrors] = useState({});

  const onAuthSubmit = async evt => {
    evt.preventDefault();

    const data = {
      firstName: evt.target.firstName.value.trim(),
      lastName: evt.target.lastName.value.trim(),
      email: evt.target.email.value.trim(),
      password: evt.target.password.value.trim(),
    };

    console.log(data);

    try {
      // Реєстрація користувача
      await validationAuthSchema.validate(data, {
        abortEarly: false,
      });
      setErrors({});
      const userData = await auth(data);

      // Якщо реєстрація успішна
      if (userData?.user?.email) {
        const userDataLogin = await login({
          email: userData.user.email,
          password: data.password,
        });
        console.log(userDataLogin);
        setUserData({
          firstName: userDataLogin.user.firstName,
          lastName: userDataLogin.user.lastName,
          email: userDataLogin.user.email,
        });

        setToken(userDataLogin.token);
        localStorage.setItem('token', userDataLogin.token);

        setBearerToken(userDataLogin.token);
        evt.target.reset(); // Скидання форми
        closeModal();
        toast.success('Successful login!');
      }
    } catch (err) {
      if (err.name === 'ValidationError') {
        // Обробка помилок Yup
        const newErrors = {};
        err.inner.forEach(validationError => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
        console.log(errors);
      } else {
        // Обробка помилок бекенду
        // console.error('Backend error:', err.message);

        alert(
          err.response?.data?.message ||
            'Something went wrong. Please try again.'
        );
      }
    } finally {
    }
  };

  return (
    <div
      className={` w-[100%] h-[calc(100%-82px)] fixed top-[80px] bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center    `}
    >
      <div className="  relative w-[358px] md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl">
        <button
          onClick={() => {
            console.log('object');
            closeModal();
          }}
          className=" cursor-pointer absolute right-[12px] top-3 bg-transparent"
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
          Sign Up Account
        </h3>
        <p className="text-[16px] text-pricingText text-center mt-2">
          Enter your personal data to create your account.
        </p>
        <button className="w-full py-3 bg-input rounded-xl border-cardsTransparent mt-4 font-medium">
          Continue with Google
        </button>
        <p className="mt-4 text-center flex items-center  justify-between before:block before:content-['']  before:w-[250px] before:h-[1px] before:bg-inputTransparent after:block after:content-['']  after:w-[250px] after:h-[1px] after:bg-inputTransparent ">
          or
        </p>
        <form onSubmit={onAuthSubmit} className=" mt-4  ">
          <div className="flex gap-4 flex-col md:flex-row ">
            <InputModal
              name={'firstName'}
              styles={'w-full md:w-[268px]'}
              value={'Artur'}
              labelText={'First value'}
              err={errors.firstName}
            />
            <InputModal
              name={'lastName'}
              styles={'w-full md:w-[268px]'}
              value={'Bialovetskyi'}
              labelText={'Last value'}
              err={errors.lastName}
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <InputModal
              name={'email'}
              value={'bialovetskyi@getmyhelp.com'}
              labelText={'Email'}
              styles={'w-full'}
              err={errors.email}
            />
            <InputModal
              name={'password'}
              styles={'w-full'}
              value={'mg20uzowo6c7cexh3qsd'}
              labelText={'Password'}
              err={errors.password}
            />
          </div>
          <button className="cursor-pointer mt-10 bg-white rounded-xl text-black text-[14px] w-full py-3">
            Get Started
          </button>
          <div className="flex justify-center mt-4">
            <p className="text-[14px] text-cardsText">
              Already have an account?
            </p>
            <p
              onClick={() => {
                openModal('loginModal');
                // setIsOpen(false);
              }}
              className="text-[#008CFF] text-[14px] ml-1 cursor-pointer"
            >
              {' '}
              Sign in
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

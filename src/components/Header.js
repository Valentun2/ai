import { Link } from 'react-router-dom';
import MobileMenu from './modals/MobileMenu';
import { useEffect, useState } from 'react';
import SignIn from './modals/SignIn';
import AuthModal from './modals/AuthModal';
import { login } from 'api/login';
import ProfileModal from './modals/ProfileModal';
import { auth } from 'api/auth';
import axios from 'axios';

const Header = () => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setBearerToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log(
      'Bearer Token Set:',
      axios.defaults.headers.common.Authorization
    );
  };

  useEffect(() => {
    console.log('object');
  }, [token]);

  // const handleToken = token => {
  //   setToken(token);
  // };

  const handleClick = e => {
    setIsOpen(!isOpen);
  };
  const openModal = e => {
    if (isAuthModalOpen) {
      setIsAuthModalOpen(false);
    }
    setIsOpenSignIn(!isOpenSignIn);
  };

  const registerUser = async data => {
    try {
      return await auth(data);
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const loginUser = async credentials => {
    try {
      return await login(credentials);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const handleOpenAuthModal = e => {
    console.log(isOpenSignIn);
    if (isOpenSignIn) {
      setIsOpenSignIn(false);
    }
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  };

  const onSubmit = async evt => {
    evt.preventDefault();
    console.log(evt);
    const email = evt.target.email.value.trim();
    const password = evt.target.password.value.trim();

    if (!email || !password) {
      alert('Please fill in both fields.'); // Просте повідомлення про помилку
      return;
    }

    const data = { email, password };

    try {
      const userData = await login(data);
      setUserData({ ...userData.user });
      localStorage.setItem('token', userData.token);
      setToken(userData.token); // Використовуємо токен безпосередньо
      setBearerToken(userData.token);
      setIsOpenSignIn(false);
      evt.target.reset(); // Очищення форми тільки у разі успіху
    } catch (err) {
      console.error('Login failed:', err.message); // Більш детальне повідомлення про помилку
      alert('Login failed. Please check your credentials.');
    }
  };

  const onAuthSubmit = async evt => {
    evt.preventDefault();
    const data = {
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      email: evt.target.email.value,
      password: evt.target.password.value,
    };

    try {
      if (!data.email || !data.password || !data.firstName || !data.lastName) {
        console.log('All fields are required.');
        return;
      }

      const userData = await registerUser(data);

      if (userData?.user?.email) {
        const userDataLogin = await loginUser({
          email: userData.user.email,
          password: data.password,
        });

        setUserData(userDataLogin.user);
        setToken(userDataLogin.token);
        setIsAuthModalOpen(false);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      evt.target.reset();
    }
  };

  // useEffect(() => {
  //   console.log(userData.email);
  //   if (!token) {
  //     return;
  //   }
  //   console.log('k');
  //   const fetchData = async () => {
  //     try {
  //       const user = await currentUser();
  //       console.log(user); // обробка користувача або установка стейту
  //       setUserData({ ...user });
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [token]);

  return (
    <header
      className={`  sticky top-0     z-50  ${
        isOpen || openProfile || isAuthModalOpen || isOpenSignIn
          ? 'bg-blackTransparent'
          : ''
      } ${isScrolled ? 'bg-blackTransparent' : ''}`}
    >
      <div className=" pt-[28px] pb-[28px] flex justify-between items-center   pl-6 pr-6 bg-opacity-80 backdrop-blur-lg">
        <div className="flex items-center gap-1">
          <svg
            width={24}
            height={24}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-logo"
            ></use>
          </svg>
          <Link to="/" className="text-[17px] font-bold">
            getmyhelp.ai
          </Link>
        </div>
        <ul className="hidden md:flex text-whiteTransparent text-[14px] gap-4">
          <li>
            <div className="flex items-center gap-1">
              <p>AI Categories</p>
              <svg
                width={16}
                height={12}
                className="flex justify-center items-center  rounded-[6px]"
              >
                <use
                  width={12}
                  height={12}
                  href="./image/icons.svg#icon-Arrow"
                ></use>
              </svg>
            </div>
            <div></div>
          </li>
          <Link to="chat">Chat</Link>
          <Link to="pricing">Pricing</Link>
        </ul>
        {token ? (
          <div
            onMouseEnter={() => setIsOpenProfile(true)}
            onMouseLeave={() => setIsOpenProfile(false)}
            className="hidden md:flex gap-1 flex-col relative"
          >
            <div className="hidden md:flex gap-1 items-center">
              <img className="w-4" alt="avt" src="./image/icon-people.png" />
              <p>Profile</p>
              <svg
                width={16}
                height={12}
                className="flex justify-center items-center rounded-[6px]"
              >
                <use
                  width={12}
                  height={12}
                  href="ai/image/icons.svg#icon-Arrow"
                ></use>
              </svg>
            </div>
            <div
              className={`absolute top-full z-50 transform transition-all duration-300 ease-in-out ${
                isOpenProfile
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <p onClick={handleOpenProfile}>Settings</p>
              <p>Log out</p>
            </div>
          </div>
        ) : (
          <ul className="hidden md:flex gap-4 text-[16px]">
            <li>
              <button onClick={openModal} className="text-[16px]">
                Sing In
              </button>
            </li>
            <li>
              <button onClick={handleOpenAuthModal} className="text-[16px]">
                Sing Up
              </button>
            </li>
          </ul>
        )}
        <button className="md:hidden" onClick={handleClick}>
          <svg
            width={24}
            height={24}
            className="flex  justify-center items-center  bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-burger"
            ></use>
          </svg>
        </button>
      </div>
      <MobileMenu isOpen={isOpen} />
      <SignIn
        handleSubmit={onSubmit}
        // token={handleToken}
        isOpen={isOpenSignIn}
        handleModal={handleOpenAuthModal}
        setIsOpenSignIn={setIsOpenSignIn}
      />
      <AuthModal
        isOpen={isAuthModalOpen}
        handleModal={openModal}
        setIsAuthModalOpen={setIsAuthModalOpen}
        onAuthSubmit={onAuthSubmit}
      />
      <ProfileModal
        setOpenProfile={setOpenProfile}
        isOpen={openProfile}
        data={userData}
      />
    </header>
  );
};

export default Header;

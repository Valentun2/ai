import { Link } from 'react-router-dom';
import MobileMenu from './modals/MobileMenu';
import { useEffect, useState } from 'react';
import SignIn from './modals/SignIn';
import AuthModal from './modals/AuthModal';
import ProfileModal from './modals/ProfileModal';
import axios from 'axios';
import useModal from 'hooks/modalHook';
import { logout } from 'api/logout';
import { eventEmitter2 } from 'helpers/eventEmitter';
import toast from 'react-hot-toast';
import CategoriesModal from './modals/CategoriesModal';
import { currentUser } from 'api/currentUser';
export const setBearerToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log('Bearer Token Set:', axios.defaults.headers.common.Authorization);
};

setBearerToken(localStorage.getItem('token'));
const Header = () => {
  const { openModal, closeModal, isModalOpen } = useModal();

  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

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

  useEffect(() => {
    const fetchCurrentUserData = async () => {
      try {
        const data = await currentUser(); // Припускається, що currentUser() повертає проміс
        setUserData({ ...data });
        console.log(data);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchCurrentUserData();
  }, []);

  const handleClick = e => {
    setIsOpen(!isOpen);
  };
  // const openModal = e => {
  //   if (isAuthModalOpen) {
  //     setIsAuthModalOpen(false);
  //   }
  //   setIsOpenSignIn(!isOpenSignIn);
  // };

  const logoutUser = async () => {
    await logout();
    setToken('');
    localStorage.removeItem('token');
    setOpenProfile(false);
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

  // ================

  useEffect(() => {
    const handleStart = () => {
      openModal('loginModal');
    };

    // Додаємо слухач події
    eventEmitter2.on('start', handleStart);

    // Повертаємо функцію для відписки
    return () => {
      eventEmitter2.off('start', handleStart);
    };
  }, [openModal]);

  useEffect(() => {
    eventEmitter2.on('profile', () => {
      console.log('profile');
      setIsOpenProfile(true);
    });
    // const handleProfile = () => {
    //   setOpenProfile(true);
    // };
    console.log('object');
    // Додаємо слухач події
    // eventEmitter.on('profile', handleProfile);

    // Повертаємо функцію для відписки
    // return () => {
    //   eventEmitter.off('profile', handleProfile);
    // };
  }, []);
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
            className="flex justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="./image/icons.svg#icon-logo"
            ></use>
          </svg>
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="text-[17px] font-bold"
          >
            getmyhelp.ai
          </Link>
        </div>
        <ul className="hidden md:flex text-whiteTransparent text-[14px] gap-4">
          <li>
            <div
              className="flex items-center gap-1"
              onMouseEnter={() => setOpenCategories(true)}
              onMouseLeave={() => setOpenCategories(false)}
            >
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
            {openCategories && (
              <CategoriesModal setOpenCategories={setOpenCategories} />
            )}
            {/* <div></div> */}
          </li>
          <Link
            onClick={() => {
              if (!token) {
                toast('You need to log in!');
              }
            }}
            to={`${token ? '/chat' : ''}`}
          >
            Chat
          </Link>
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
              <p className=" cursor-pointer">Profile</p>
              <svg
                width={16}
                height={12}
                className="flex justify-center items-center rounded-[6px]"
              >
                <use
                  width={12}
                  height={12}
                  href="./image/icons.svg#icon-Arrow"
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
              <p className=" cursor-pointer" onClick={handleOpenProfile}>
                Settings
              </p>
              <p className=" cursor-pointer" onClick={logoutUser}>
                Log out
              </p>
            </div>
          </div>
        ) : (
          <ul className="hidden md:flex gap-4 text-[16px]">
            <li>
              <button
                onClick={() => openModal('loginModal')}
                className="text-[16px]"
              >
                Sing In
              </button>
            </li>
            <li>
              <button
                onClick={() => openModal('authModal')}
                className="text-[16px]"
              >
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
              href="./image/icons.svg#icon-burger"
            ></use>
          </svg>
        </button>
      </div>
      <MobileMenu
        logout={logoutUser}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setToken={setToken}
        // isOpen={isOpenSignIn}
        handleModal={handleOpenAuthModal}
        setIsOpenSignIn={setIsOpenSignIn}
      >
        {' '}
        {token ? (
          <p className="pt-4" onClick={logoutUser}>
            Log out
          </p>
        ) : (
          <ul className="mt-4 flex gap-4 text-[16px]">
            <li>
              <button
                onClick={() => {
                  openModal('loginModal');
                  setIsOpen(false);
                }}
                className="text-[16px]"
              >
                Sing In
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openModal('authModal');
                  setIsOpen(false);
                }}
                className="text-[16px]"
              >
                Sing Up
              </button>
            </li>
          </ul>
        )}
      </MobileMenu>
      {isModalOpen('loginModal') && (
        <SignIn
          // handleSubmit={onSubmit}
          // token={handleToken}
          setToken={setToken}
          openModal={openModal}
          handleModal={handleOpenAuthModal}
          setIsOpenSignIn={setIsOpenSignIn}
          closeModal={closeModal}
          setUserData={setUserData}
        />
      )}
      {isModalOpen('authModal') && (
        <AuthModal
          setUserData={setUserData}
          closeModal={closeModal}
          isOpen={isAuthModalOpen}
          openModal={openModal}
          setToken={setToken}
        />
      )}
      <ProfileModal
        setOpenProfile={setOpenProfile}
        isOpen={openProfile}
        data={userData}
      />
    </header>
  );
};

export default Header;

import { currentUser } from 'api/currentUser';
import Header from 'components/Header';
import ProfileModal from 'components/modals/ProfileModal';
import { eventEmitter, eventEmitter2 } from 'helpers/eventEmitter';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useEffect(() => {
    async function fetchData() {
      const userData = await currentUser();
      console.log(userData);
      setData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        subscription: userData.subscription,
      });
      console.log(userData);
    }

    if (!token) {
      navigate('/'); // Перенаправлення
    } else {
      fetchData();
    }
  }, []);

  const handleClick = () => {
    console.log('gg');
    setOpenMenu(false);
    setOpen(true);
  };

  const handleOpenMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return token ? (
    <div className="w-full h-screen   relative">
      {/* <div
        className="  absolute top-0 xl:top-[-85px] left-0 w-[270px] md:w-[400px] lg:w-[500px] xl:w-[750px]  2xl:w-[950px] h-[500px]   2xl:h-[650px] z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top left, rgba(0, 38, 206, 0.479) 10%, transparent 70%  )',
        }}
      ></div>
      <div
        className=" absolute top-[0px] md:top-[0px] right-[-100px] w-[100px] md:w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1500px] h-[100px]  z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top right,#2cabeb7d 10%, rgba(0, 38, 206, 0.505) 35%, transparent 70%  )',
        }}
      ></div> */}

      <div
        onClick={handleOpenMobileMenu}
        className="md:hidden py-4  flex border-b-[2px] border-b-pricingBorder"
      >
        <svg
          width={24}
          height={24}
          className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]  pointer-events-none"
        >
          <use
            width={24}
            height={24}
            href="./image/icons.svg#icon-burger"
          ></use>
        </svg>
        <div className="flex w-full justify-center items-center">
          <svg
            width={24}
            height={24}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="./image/icons.svg#icon-logo"
            ></use>
          </svg>
          <Link to="/" className="text-[17px]  font-bold">
            getmyhelp.ai
          </Link>
        </div>
      </div>
      <div className="flex w-full h-[calc(100% - 81px)] ">
        <div className="hidden md:block w-[15%] p-4 h-screen bg-blackChat border-r-[2px] border-r-pricingBorder">
          {' '}
          <div className="flex items-center flex-col justify-between h-[100%] ">
            <div>
              <svg
                width={24}
                height={24}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-logo"
                ></use>
              </svg>
              <Link to="/" className="text-[17px] font-bold">
                getmyhelp.ai
              </Link>
            </div>
            <div className="hidden md:flex gap-1 items-center">
              <img className="w-4" alt="avt" src="./image/icon-people.png" />
              <p onClick={handleClick}>Profile</p>
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
          </div>
        </div>
        <div className="w-full md:w-[85%] flex justify-center py-8 relative">
          <div className="w-[40%]">
            <p>
              Hey, Excel Assistant! I need some help organizing my sales data.
              Can you help?
            </p>
            <p>
              Of course! I'd be happy to assist. What specifically would you
              like to do with your sales data? We could sort it by date,
              calculate totals, create charts, or even analyze trends!
            </p>
          </div>
        </div>
        <ProfileModal
          data={data}
          isOpen={open}
          setOpenProfile={setOpen}
          className={'z-[10] top-[0px]'}
        />
      </div>
      <div
        className={`z-50 h-screen  fixed top-[74px] bg-black    bg-opacity-50 backdrop-blur-[6px]  w-full  transition-all duration-500  ${
          !openMenu ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute w-[253px] flex flex-col text-whiteTransparent h-screen border-r-[2px] border-r-pricingBorder  pb-4">
          <div className="flex flex-col justify-between h-[calc(100vh-74px)]">
            <div className="flex gap-1 items-center">
              <svg
                width={24}
                height={24}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-logo"
                ></use>
              </svg>
              <Link to="/" className="text-[17px] font-bold">
                getmyhelp.ai
              </Link>
            </div>
            <div className="flex gap-1 items-center border-y-[2px] border-y-pricingBorder p-4">
              <img className="w-4" alt="avt" src="./image/icon-people.png" />
              <p onClick={handleClick}>Profile</p>
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
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-red-600 text-center mt-5 ">Loading...</p>
  );
};

export default ChatPage;

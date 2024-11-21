import { useState } from 'react';
import InputModal from './InputModal';
import { updateData } from 'api/updateData';

const ProfileModal = ({ data, isOpen, setOpenProfile }) => {
  const [active, setActive] = useState(true);
  // const [userData, setUserData] = useState({});
  const handleClick = e => {
    if (e.target.id == 1) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const updateUser = async e => {
    e.preventDefault();
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.newPassword.value,
    };

    const dataUser = await updateData(data);
    console.log(dataUser);
  };

  const deleteAccount = e => {
    e.preventDefault();
  };
  return (
    <div
      className={` z-[-1]  top-[82px] inset-0 fixed w-full h-[100vh] bg-black bg-opacity-70 backdrop-blur-md ${
        isOpen ? '' : 'hidden'
      } `}
    >
      <div className=" z-10 absolute top-1/2  translate-x-[-50%] left-1/2 translate-y-[-50%] sm:w-[358px] md:w-[650px] sm:h-[684px] md:h-[760px] border border-modalBorder bg-cardsTransparent px-6 pb-6 rounded-xl">
        <ul
          onClick={handleClick}
          className={`relative flex py-3 text-center after:content-[''] after:absolute after:w-1/2 after:h-[1px] after:bg-white after:bottom-0 ${
            active ? 'after:translate-x-0' : 'after:translate-x-full'
          } after:transition-all after:duration-500 before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[rgba(255,255,255,0.35)] before:bottom-0`}
        >
          <li className=" relative w-1/2">
            <p id="1">Profile</p>
          </li>
          <li className="w-1/2">
            <p id="2">Subscription</p>
          </li>
        </ul>
        {active ? (
          <>
            <div className="mt-6 flex flex-col justify-center items-center">
              <div>
                <img className="w-10" src="./image/icon-people.png" />
              </div>
              <p className="mt-4 text-[18px]">{data.name}</p>
              <p className="text-[14px]">{data.email}</p>
            </div>
            <form
              onSubmit={updateUser}
              className=" mt-[34px] flex gap-4 flex-col "
            >
              <div className="flex gap-4 ">
                <InputModal
                  name={'firstName'}
                  style={'sm:w-[155px] md:w-[293px]'}
                  value={'Artur'}
                  labelText={'First value'}
                />
                <InputModal
                  name={'lastName'}
                  style={'sm:w-[155px] md:w-[293px]'}
                  value={'Bialovetskyi'}
                  labelText={'Last value'}
                />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <InputModal
                  name={'email'}
                  value={'bialovetskyi@getmyhelp.com'}
                  labelText={'Email'}
                  style={'w-full'}
                />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <InputModal
                  name={'oldPassword'}
                  style={'w-full'}
                  value={'mg20uzowo6c7cexh3qsd'}
                  labelText={'Password'}
                />
                <InputModal
                  name={'newPassword'}
                  style={'w-full'}
                  value={'mg20uzowo6c7cexh3qsd'}
                  labelText={'Password'}
                />
              </div>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-cardsText">
                  If you want to permanently delete this account and all of its
                  data.
                </p>
                <button
                  onClick={deleteAccount}
                  className=" hover:bg-red-600 focus:bg-red-600 hover:text-white focus:text-white  rounded-[12px] border-cardsTransparent px-4 py-[6px] text-inputText"
                >
                  Delete account
                </button>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setOpenProfile(false)}
                  className=" sm:w-[155px] md:w-[295px] text-cardsText rounded-xl border-[2px] border-cardsTransparent py-3"
                >
                  Close
                </button>
                <button className="sm:w-[155px] md:w-[295px] rounded-xl bg-gradient-to-b from-[#0099FF] to-[#0066FF]  py-3">
                  Save changes
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col justify-between h-[90%]">
            <div>
              <p>Current Plan</p>
              <div>
                <p>price</p>
                <p>date</p>
              </div>
              <button className="rounded-xl w-[100%] py-3 text-center bg-gradient-to-b from-[#0099FF] to-[#0066FF] ">
                Cancel subscription
              </button>
            </div>
            <div>
              <p>
                You are on an annual subscription, from 17.05.2025 your plan
                will renew at the regular price of $140 until cancelled. You can
                cancel your subscription now and continue to use it until
                17.07.2025
              </p>
              <div className="flex justify-between">
                <button className="w-[295px] text-cardsText rounded-xl border-[2px] border-cardsTransparent py-3">
                  Close
                </button>
                <button className="w-[295px] rounded-xl bg-[#0066FF]  py-3">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;

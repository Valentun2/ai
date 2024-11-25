import { useState } from 'react';
import InputModal from './InputModal';
import { updateData } from 'api/updateData';
import { validationUpdateSchema } from 'shemas/shemas';
import toast from 'react-hot-toast';
import { deleteUser } from 'api/delete';
import { useNavigate } from 'react-router-dom';

const ProfileModal = ({ data, isOpen, setOpenProfile, className }) => {
  const [active, setActive] = useState(true);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleClick = e => {
    if (e.target.id === '1') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const updateUser = async e => {
    e.preventDefault();

    try {
      // Формуємо об'єкт з даними
      const dataUser = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        oldPassword: e.target.oldPassword.value,
        newPassword: e.target.newPassword.value,
        subscription: data.subscription,
      };

      // Валідація за схемою Yup
      await validationUpdateSchema.validate(dataUser, { abortEarly: false });

      // Відправка даних на бекенд
      const newDataUser = await updateData(dataUser);

      // Логування оновлених даних
      console.log(newDataUser);

      // Очищення форми
      e.target.reset();

      // Повідомлення про успішне оновлення (можна замінити на ваш метод)
      toast('User updated successfully!');
    } catch (err) {
      if (err.name === 'ValidationError') {
        // Обробка помилок Yup
        const newErrors = {};
        err.inner.forEach(validationError => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors); // Оновлюємо стан із помилками
      } else {
        // Обробка помилок бекенду
        console.error('Backend error:', err.message);

        toast(
          err.response?.data?.message ||
            'Something went wrong. Please try again.'
        );
      }
    }
  };

  const deleteAccount = async e => {
    // Підтвердження дії користувачем
    const isConfirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );

    if (!isConfirmed) return; // Якщо користувач скасував, виходимо

    try {
      // Виклик функції для видалення користувача
      await deleteUser();

      // Очищення локального сховища (якщо є токен)
      localStorage.removeItem('token');

      // Повідомлення користувачеві
      toast('Account deleted successfully.');

      // Перенаправлення на головну або сторінку входу
      navigate('/');
    } catch (err) {
      // Обробка помилок
      console.error('Error deleting account:', err.message);

      // Повідомлення про помилку
      toast(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div
      className={`overflow-auto z-[-1]  top-[62px] inset-0 fixed w-full h-[100vh] bg-black bg-opacity-70 backdrop-blur-md ${
        isOpen ? '' : 'hidden'
      } ${className}`}
    >
      <div className="overflow-auto max-h-[calc(100vh-150px)] z-10 scrolslbar-none absolute top-1/2  translate-x-[-50%] left-1/2 translate-y-[-50%] sm:w-[358px] md:w-[650px] sm:h-[684px] md:h-[760px] border border-modalBorder bg-cardsTransparent px-6 pb-6 rounded-xl scrollbar-none">
        <ul
          onClick={handleClick}
          className={`relative flex py-3 text-center after:content-[''] after:absolute after:w-1/2 after:h-[1px] after:bg-white after:bottom-0 ${
            active ? 'after:translate-x-0' : 'after:translate-x-full'
          } after:transition-all after:duration-500 before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[rgba(255,255,255,0.35)] before:bottom-0 cursor-pointer`}
        >
          <li className=" relative w-1/2">
            <p className=" cursor-pointer" id="1">
              Profile
            </p>
          </li>
          <li className="w-1/2">
            <p className=" cursor-pointer" id="2">
              Subscription
            </p>
          </li>
        </ul>
        {active ? (
          <>
            <div className="mt-6 flex flex-col justify-center items-center">
              <div>
                <img
                  alt="avt"
                  className="w-10"
                  src="ai/image/icon-people.png"
                />
              </div>
              <p className="mt-4 text-[18px]">{`${data.firstName}  ${data.lastName}`}</p>
              <p className="text-[14px]">{data.email}</p>
            </div>
            <form
              onSubmit={updateUser}
              className=" mt-[34px] flex gap-4 flex-col "
            >
              <div className="flex gap-4 ">
                <InputModal
                  name={'firstName'}
                  styles={'sm:w-[155px] md:w-[293px]'}
                  value={'Artur'}
                  labelText={'First value'}
                  err={errors.firstName}
                />
                <InputModal
                  name={'lastName'}
                  styles={'sm:w-[155px] md:w-[293px]'}
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
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <InputModal
                  name={'oldPassword'}
                  styles={'w-full'}
                  value={'mg20uzowo6c7cexh3qsd'}
                  labelText={'oldPassword'}
                  err={errors.oldPassword}
                />
                <InputModal
                  name={'newPassword'}
                  styles={'w-full'}
                  value={'mg20uzowo6c7cexh3qsd'}
                  labelText={'newPassword'}
                  err={errors.newPassword}
                />
              </div>
              <div className="flex justify-between items-center ">
                <p className="text-[12px] text-cardsText">
                  If you want to permanently delete this account and all of its
                  data.
                </p>
                <button
                  type="button"
                  onClick={deleteAccount}
                  className="cursor-pointer hover:bg-red-600 focus:bg-red-600 hover:text-white focus:text-white  rounded-[12px] border-cardsTransparent px-4 py-[6px] text-inputText"
                >
                  Delete account
                </button>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  value={'close'}
                  className="cursor-pointer sm:w-[155px] md:w-[295px] text-cardsText rounded-xl border-[2px] border-cardsTransparent py-3"
                  name="close"
                  onClick={() => setOpenProfile(false)}
                >
                  Close
                </button>
                <button className="cursor-pointer sm:w-[155px] md:w-[295px] rounded-xl bg-gradient-to-b from-[#0099FF] to-[#0066FF]  py-3">
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
              <button className="cursor-pointer rounded-xl w-[100%] py-3 text-center bg-gradient-to-b from-[#0099FF] to-[#0066FF] ">
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
                <button className="cursor-pointer w-[295px] text-cardsText rounded-xl border-[2px] border-cardsTransparent py-3">
                  Close
                </button>
                <button className="cursor-pointer w-[295px] rounded-xl bg-[#0066FF]  py-3">
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

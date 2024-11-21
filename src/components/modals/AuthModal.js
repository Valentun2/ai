import InputModal from './InputModal';

const AuthModal = ({
  isOpen,
  handleModal,
  setIsAuthModalOpen,
  onAuthSubmit,
}) => {
  const handleClick = () => {
    setIsAuthModalOpen(false);
  };

  // const createUser = e => {
  //   e.preventDefault();

  //   const newUser = {
  //     //  name: e.target.name.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   };
  //   setData(newUser);
  // };
  // useEffect(() => {
  //   async function dataUser() {
  //     // setLoading(true);
  //     try {
  //       const user = await auth(data);
  //       console.log(user);
  //       // setMovies(arrMovies.results);
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   }

  //   dataUser();
  // }, [data]);

  return (
    <div
      className={` w-[100%] h-[100vh] fixed top-[81px] bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center   ${
        isOpen ? 'block' : 'hidden'
      } `}
    >
      <div className=" relative w-[358px] md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl">
        <button
          onClick={handleClick}
          className="absolute right-3 top-3 bg-transparent"
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
        </button>
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
        <form onSubmit={e => onAuthSubmit(e)} className=" mt-4  ">
          <div className="flex gap-4 flex-col md:flex-row ">
            <InputModal
              name={'firstName'}
              styles={'w-full md:w-[268px]'}
              value={'Artur'}
              labelText={'First value'}
            />
            <InputModal
              name={'lastName'}
              styles={'w-full md:w-[268px]'}
              value={'Bialovetskyi'}
              labelText={'Last value'}
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <InputModal
              name={'email'}
              value={'bialovetskyi@getmyhelp.com'}
              labelText={'Email'}
              styles={'w-full'}
            />
            <InputModal
              name={'password'}
              styles={'w-full'}
              value={'mg20uzowo6c7cexh3qsd'}
              labelText={'Password'}
            />
          </div>
          <button className="mt-10 bg-white rounded-xl text-black text-[14px] w-full py-3">
            Get Started
          </button>
          <div className="flex justify-center mt-4">
            <p className="text-[14px] text-cardsText">
              Already have an account?
            </p>
            <p
              onClick={() => handleModal()}
              className="text-[#008CFF] text-[14px] ml-1"
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

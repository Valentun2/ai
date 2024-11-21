import InputModal from './InputModal';

const SignIn = ({ isOpen, handleModal, handleSubmit, setIsOpenSignIn }) => {
  const handleClick = () => {
    setIsOpenSignIn(false);
  };

  return (
    <div
      className={`w-[100%] h-[100vh] fixed top-[81px] bg-black bg-opacity-60 backdrop-blur-md   ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="relative w-[358px] md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl top-1/2  translate-x-[-50%] left-1/2 translate-y-[-50%]">
        <button
          onClick={handleClick}
          className="absolute right-[12px] top-3 bg-transparent"
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
          Sign In Account
        </h3>
        <p className="text-[16px] text-pricingText text-center mt-2">
          Enter your personal data to login your account.
        </p>
        <button className="w-full py-3 bg-input rounded-xl border-cardsTransparent mt-4">
          Continue with Google
        </button>
        <p className="mt-4 text-center flex items-center  justify-between before:block before:content-['']  before:w-[250px] before:h-[1px] before:bg-inputTransparent after:block after:content-['']  after:w-[250px] after:h-[1px] after:bg-inputTransparent ">
          or
        </p>
        <form onSubmit={e => handleSubmit(e)} className=" mt-4  ">
          <div className="flex flex-col gap-4 mt-4">
            <InputModal
              name={'email'}
              value={'bialovetskyi@getmyhelp.com'}
              labelText={'Email'}
              styleList={'w-full'}
            />
            <InputModal
              name={'password'}
              styleList={'w-full'}
              value={'mg20uzowo6c7cexh3qsd'}
              labelText={'Password'}
            />
          </div>
          <button className="mt-10 bg-white rounded-xl text-black text-[14px] w-full py-3">
            Get Started
          </button>
          <div className="flex justify-center mt-4">
            <p className="text-[14px] text-cardsText">Don’t have an account?</p>
            <p
              onClick={() => handleModal()}
              className="text-[#008CFF] text-[14px] ml-1"
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

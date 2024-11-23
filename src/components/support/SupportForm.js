import SupportInput from './SupportInput';

const SupportForm = () => {
  return (
    <form className="p-4 w-full md:p-6 bg-cardsTransparent rounded-2xl md:w-[600px] lg:w-[896px] xl:w-[600px]">
      <h3 className="font-semibold text-[24px]">Talk to our sales team</h3>
      <div className="flex gap-4 flex-wrap">
        <SupportInput value={'Artur'} labelText={'First name'} />
        <SupportInput value={'Bialovetskyi'} labelText={'Last name'} />
        <SupportInput value={'GetMyHelp'} labelText={'Company'} />
        <SupportInput value={'Head of Design'} labelText={'Job Title'} />
        <SupportInput value={'United States'} labelText={'Country'} />
        <SupportInput
          value={'bialovetskyi@getmyhelp.com'}
          labelText={'Email'}
        />
      </div>
      <label className="flex flex-col mt-2  text-cardsText text-[12px]">
        How can we help?
        <textarea
          className="h-[184px] mt-1 bg-input pl-3 pt-2 border-[2px] placeholder-inputText border-transparent focus:border-white focus:outline-none "
          placeholder="Tell us how we can help you..."
        />
      </label>
      <button className="bg-white text-black rounded-xl w-[100%] py-3 text-center mt-4">
        Send
      </button>
    </form>
  );
};

export default SupportForm;

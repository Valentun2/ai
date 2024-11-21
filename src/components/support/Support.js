import SupportForm from './SupportForm';

const Support = () => {
  return (
    <section className="py-[212px]">
      <div className="container items-center md:flex  lg:justify-between flex-col xl:flex-row justify-center ">
        <div className="w-full xl:w-[456px] 2xl:w-[654px]">
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-center">
            Get in Touch with Us
          </h2>
          <p className="font-[16px] text-cardsText text-center md:w-[70%] lg:w-full mx-auto">
            Have a question, need support, or interested in partnering? Fill out
            the form below, and our team will reach out promptly. We're here to
            make sure you have all the answers and support you need!
          </p>
        </div>
        <SupportForm />
      </div>
    </section>
  );
};

export default Support;

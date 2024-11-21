const Hero = ({ click }) => {
  return (
    <section className="pt-[325px] pb-[325px] overflow-hidden">
      <div
        className="  absolute top-[-85px] left-0 2xl:w-[950px] h-[650px] z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top left, #003CFF 10%, transparent 70%  )',
        }}
      ></div>
      <div
        className=" absolute top-[-205px] right-0 w-[1500px] h-[880px] z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top right, #2CABEB 15%, #0025CE 35%, transparent 70%  )',
        }}
      ></div>
      <div className="container flex items-center flex-col">
        <h1 className=" font-semibold  text-[32px] md:text-[48px] lg:leading-[64px] text-center  lg:text-[64px]">
          Unlock AI-Powered <br />
          Assistance for Every Task
        </h1>
        <p className="text-[16px] md:w-[500px] lg:w-full text-whiteTransparent mt-2 text-center">
          From bookkeeping to music creation, find a tailored AI model to
          simplify your work
        </p>
        <form className="w-[65%] pt-6 flex gap-2">
          <input className="w-[229px] md:w-[90%] h-[50px] border-[2px] focus:border-white focus:outline-none bg-transparent rounded-2xl  border-inputTransparent" />
          <button>Search</button>
        </form>
        <ul
          className="flex flex-wrap pt-2 text-whiteTransparent text-[16px] gap-5 items-center"
          onClick={e => {
            click(e);
          }}
        >
          <li className="px-3 py-[6px] border rounded-xl border-inputTransparent">
            Productivity
          </li>
          <li className="px-3 py-[6px] border rounded-xl border-inputTransparent">
            Tech
          </li>
          <li className="px-3 py-[6px] border rounded-xl border-inputTransparent">
            Finance
          </li>
          <li className="px-3 py-[6px] border rounded-xl border-inputTransparent">
            Education
          </li>
          <li className="px-3 py-[6px] border rounded-xl border-inputTransparent">
            Analytics
          </li>
          <li className="px-3 py-[6px] border rounded-xl border-inputTransparent">
            Marketing
          </li>
        </ul>
        <div className="relative w-[100vw]">
          <div
            className=" absolute bottom-[-548px] left-[-128px] w-[550px] h-[400px] z-[-1]  "
            style={{
              backgroundImage:
                'radial-gradient( ellipse at  bottom left, #00EAFF 1%, transparent 70%  )',
            }}
          ></div>
          <div
            className=" absolute bottom-[-700px] left-[-140px] w-[1250px] h-[550px] z-[-1]  "
            style={{
              backgroundImage:
                'radial-gradient( ellipse,  #0025CE 1%, transparent 70%  )',
            }}
          ></div>
          <div
            className=" absolute bottom-[-745px] right-[-210px] w-[1500px] h-[580px] z-[-1]"
            style={{
              backgroundImage:
                'radial-gradient( ellipse , #0025CE 1%, transparent 70%  )',
            }}
          ></div>
          <div
            className=" absolute bottom-[-548px] right-[-128px] w-[550px] h-[400px] z-[-1]  "
            style={{
              backgroundImage:
                'radial-gradient( ellipse at  bottom right, #00EAFF 1%, transparent 70%  )',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

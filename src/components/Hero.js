const Hero = ({ click }) => {
  return (
    <section className="py-[228px] md:py-[325px]  overflow-hidden ">
      <div
        className="  absolute top-0 xl:top-[-85px] left-0 w-[270px] md:w-[370px] lg:w-[500px] xl:w-[750px]  2xl:w-[950px] h-[500px]    xl:h-[650px] z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top left, #003CFF 10%, transparent 70%  )',
        }}
      ></div>
      <div
        className=" absolute top-[0px] md:top-[0px] right-[0px] w-[300px] md:w-[550px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] h-[600px] md:h-[720px] z-[-1]"
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
      </div>
      <div className="relative w-[100vw] overflow-hidden  bottom-[-228px]    md:bottom-[-325px] h-[200px]">
        <div
          className=" absolute bottom-0 xl:bottom-[-150px] 2xl:bottom-[-200px] left-0 w-[60px] md:w-[80px] xl:w-[250px]  h-[80px] md:h-[100px] xl:h-[300px]  z-[-1]  "
          style={{
            backgroundImage:
              'radial-gradient( ellipse at  bottom left, #00EAFF 1%, transparent 70%  )',
          }}
        ></div>
        <div
          className=" absolute bottom-[-180px] md:bottom-[-170px] lg:bottom-[-200px] xl:bottom-[-230px] 2xl:bottom-[-270px]  left-[-20px] md:left-[-70px] 2xl:left-[-130px] w-[450px] md:w-[500px] xl:w-[700px] 2xl:w-[950px] h-[300px] lg:h-[400px] 2xl:h-[450px] z-[-1]  "
          style={{
            backgroundImage:
              'radial-gradient( ellipse,  rgba(0, 37, 206, 0.5) 1%, transparent 70%  )',
          }}
        ></div>
        <div
          className=" absolute bottom-[-170px] md:bottom-[-210px] lg:bottom-[-150px]  right-[-70px]  w-[350px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] h-[300px]  z-[-1]"
          style={{
            backgroundImage:
              'radial-gradient( ellipse ,rgba(0, 37, 206, 0.5) 1%, transparent 70%  )',
          }}
        ></div>
        <div
          className=" absolute bottom-[-75px]  right-0  w-[200px] 2xl:w-[250px] h-[150px]  2xl:h-[200px] z-[-1]  "
          style={{
            backgroundImage:
              'radial-gradient( ellipse at  bottom right, rgba(44, 171, 235, 0.7) 1%, transparent 70%  )',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;

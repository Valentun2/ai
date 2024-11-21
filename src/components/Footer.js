const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container md:flex justify-between">
        <div className="flex flex-col justify-center md:justify-start  items-center  md:items-start gap-4">
          <a href="/" className=" text-[17px] font-bold">
            getmyhelp.ai
          </a>
          <p className="">All rights reserved. © 2024 getmyhelp.ai</p>
        </div>
        <div className="flex justify-around max-md:justify-between gap-[16px] lg:gap-[64px] mt-8 md:m-0">
          <div>
            <h5 className="font-bold text-[17px]">Explore</h5>
            <ul className="flex flex-col mt-2 text-[17px] text-cardsText gap-2">
              <li>Home</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[17px]">Categories</h5>
            <ul className="flex flex-col mt-2 text-[17px] text-cardsText gap-2">
              <li>Productivity AI</li>
              <li>Tech AI</li>
              <li>Finance AI</li>
              <li>Education AI</li>
              <li>Analytics AI</li>
              <li>Marketing AI</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[17px]">Legal</h5>
            <ul className="flex flex-col mt-2  text-[17px] text-cardsText gap-2">
              <li>Terms</li>
              <li>Cookies</li>
              <li>Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

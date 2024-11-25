import { Link } from 'react-router-dom';

const Footer = () => {
  //
  //
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

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
            <ul className="flex flex-col mt-2 text-[17px] text-cardsText gap-2 ">
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link onClick={handleClick} to="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to="pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[17px]">Categories</h5>
            <ul className="flex flex-col mt-2 text-[17px] text-cardsText gap-2">
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="#productivity">Productivity AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="#tech">Tech AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="#Finance">Finance AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="#education hover:text-border transition-all duration-500">
                  Education AI
                </Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="#analytics">Analytics AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to="#marketing">Marketing AI</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[17px]">Legal</h5>
            <ul className="flex flex-col mt-2  text-[17px] text-cardsText gap-2 ">
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to={'terms'}>Terms</Link>{' '}
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                Cookies
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to={'policy'}>Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

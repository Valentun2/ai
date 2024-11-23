import { Link } from 'react-router-dom';

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
              <li>
                {' '}
                <Link to="#productivity">Productivity AI</Link>
              </li>
              <li>
                {' '}
                <Link to="#tech">Tech AI</Link>
              </li>
              <li>
                {' '}
                <Link to="#Finance">Finance AI</Link>
              </li>
              <li>
                {' '}
                <Link to="#education">Education AI</Link>
              </li>
              <li>
                {' '}
                <Link to="#analytics">Analytics AI</Link>
              </li>
              <li>
                <Link to="#marketing">Marketing AI</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[17px]">Legal</h5>
            <ul className="flex flex-col mt-2  text-[17px] text-cardsText gap-2">
              <li>
                <Link to={'terms'}>Terms</Link>{' '}
              </li>
              <li>Cookies</li>
              <li>
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

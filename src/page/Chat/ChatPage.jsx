import { Link } from 'react-router-dom';

const ChatPage = () => {
  return (
    <div className="flex w-full h-full">
      {/* <CategoriesModal /> */}
      {/* <Policy /> */}
      {/* <ProfileModal /> */}
      {/* <BuyPremiumModal /> */}
      <div className="w-[15%]">
        {' '}
        <div className="flex items-center gap-1">
          <svg
            width={24}
            height={24}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="./image/icons.svg#icon-logo"
            ></use>
          </svg>
          <Link to="/" className="text-[17px] font-bold">
            getmyhelp.ai
          </Link>
        </div>
      </div>
      <div className="w-[85%] flex justify-center py-8">
        <div className="w-[40%]">
          <p>
            Hey, Excel Assistant! I need some help organizing my sales data. Can
            you help?
          </p>
          <p>
            Of course! I'd be happy to assist. What specifically would you like
            to do with your sales data? We could sort it by date, calculate
            totals, create charts, or even analyze trends!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

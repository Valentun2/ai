const QuarterlyPlan = () => {
  return (
    <li className="w-[363px] bg-bgCards rounded-[32px]  py-10 px-10 ">
      <h4 className="font-semibold text-[24px]">Quarterly Plan</h4>
      <p className="text-[16px] text-cardsBorder mt-1">
        Ongoing projects and users who need consistent AI support{' '}
      </p>
      <p className=" mt-8 text-[16px] text-princingText">
        <span className="text-[48px] font-semibold">$40</span>/ every 3 months
      </p>
      <button className="py-3 text-center w-full mt-[75px] bg-gradient-to-b from-[#0099FF] to-[#0066FF]  rounded-xl">
        Get Started
      </button>
      <h5 className="text-[18px] font-medium mt-20">What you will get</h5>
      <ul className="mt-4">
        <li className="flex gap-2 align-top">
          <svg
            width={16}
            height={16}
            className="flex justify-center items-center w-5 h-5"
          >
            <use
              width={16}
              height={16}
              href="./image/icons.svg#icon-tick"
            ></use>
          </svg>
          <p className="text-[16px] w-[259px]">
            3-month access to all AI tools and features, with discounted pricing{' '}
          </p>
        </li>
        <li className="flex gap-2 align-top">
          <svg
            width={16}
            height={16}
            className="flex justify-center items-center w-5 h-5"
          >
            <use
              width={16}
              height={16}
              href="./image/icons.svg#icon-tick"
            ></use>
          </svg>
          <p className="text-[16px] w-[259px]">
            Great value for users who want to avoid monthly billing{' '}
          </p>
        </li>
        <li className="flex gap-2 align-top">
          <svg
            width={16}
            height={16}
            className="flex justify-center items-center w-5 h-5"
          >
            <use
              width={16}
              height={16}
              href="./image/icons.svg#icon-tick"
            ></use>
          </svg>
          <p className="text-[16px] w-[259px]">
            Best for: Small businesses, ongoing projects, or goal-focused work
          </p>
        </li>
      </ul>
    </li>
  );
};

export default QuarterlyPlan;

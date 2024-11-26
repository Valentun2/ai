const MonthlyPlan = () => {
  return (
    <li className="md:w-[363px] bg-input rounded-[32px]  py-10 px-10 snap-start w-full hover:bg-bgCards transition-all duration-500">
      <h4 className="font-semibold text-[24px]">Monthly Plan</h4>
      <p className="text-[16px] text-cardsBorder mt-1">
        Testing out our AI tools or managing short-term projects
      </p>
      <p className=" mt-8 text-[16px] text-pricingText">
        <span className="text-[32px] font-semibold">0.67 USD</span>/ per day
      </p>
      <div className="flex gap-3">
        <p className="py-[6px] px-3 border border-pricingBorder  inline-block rounded-xl text-[14px]">
          1 month
        </p>
        <p className="py-[6px] px-3 border border-pricingBorder  inline-block rounded-xl text-[14px]">
          save 50%
        </p>
      </div>
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
            Full access to all AI tools and features for one month
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
            Flexible, with the option to cancel anytime
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
            Great for: Freelancers, project-based work, or users with temporary
            productivity needs
          </p>
        </li>
      </ul>
    </li>
  );
};

export default MonthlyPlan;

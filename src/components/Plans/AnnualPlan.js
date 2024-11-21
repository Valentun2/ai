const AnnualPlan = () => {
  return (
    <li className="w-full md:w-[363px] bg-bgCards rounded-[32px]  py-10 px-10  backdrop-blur-lg">
      <h4 className="font-semibold text-[24px]">Annual Plan</h4>
      <p className="text-[16px] text-cardsBorder mt-1">
        Loyal users who demand the best value for money{' '}
      </p>
      <p className=" mt-8 text-[16px] text-princingText">
        <span className="text-[48px] font-semibold">$140</span>/ per year
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
            Year-round access to all AI tools with our lowest rate per month{' '}
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
            Ideal for professionals who rely on AI models to streamline daily
            tasks{' '}
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
            Best for: Large projects, year-long commitments, and users who want
            maximum savings
          </p>
        </li>
      </ul>
    </li>
  );
};

export default AnnualPlan;

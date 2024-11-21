const CategoriesModal = () => {
  return (
    <div className="w-[400px] bg-blackTransparent p-6">
      <h4 className="font-semibold text-[24px]">Categories</h4>
      <ul className="flex flex-wrap justify-between gap-y-4 mt-4">
        <li className="flex gap-[6px] w-[168px] items-center">
          <svg
            width={40}
            height={40}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-Vector-1"
            ></use>
          </svg>
          <p className="text-[16px]">Productivity</p>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center">
          <svg
            width={40}
            height={40}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-Tech"
            ></use>
          </svg>
          <p className="text-[16px]">Tech</p>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center">
          <svg
            width={40}
            height={40}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-Finance"
            ></use>
          </svg>
          <p className="text-[16px]">Finance</p>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center">
          <svg
            width={40}
            height={40}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-Education"
            ></use>
          </svg>
          <p className="text-[16px]">Education</p>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center">
          <svg
            width={40}
            height={40}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-Analytics"
            ></use>
          </svg>
          <p className="text-[16px]">Analytics</p>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center">
          <svg
            width={40}
            height={40}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="ai/image/icons.svg#icon-Marketing"
            ></use>
          </svg>
          <p className="text-[16px]">Marketing</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesModal;

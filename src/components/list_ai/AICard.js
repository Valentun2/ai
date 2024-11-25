const Card = ({ title, img, view, tag, arr, children }) => {
  return (
    arr?.includes(title.toLowerCase()) && (
      <li className="group w-[358px] md:w-[344px] lg:w-[288px] xl:w-[284px] 2xl:w-[404px] max-h-[297px] bg-cardsTransparent box-border border-[1px] border-cardsBorder flex flex-col  justify-between p-4 rounded-2xl hover:bg-cardsHover transition-all duration-500 relative">
        <div className="absolute flex gap-2 right-5 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
          <p className=" text-cardsText text-[16px]  ">Start chat</p>
          <svg
            width={16}
            height={16}
            className="flex justify-center items-center w-4 h-4 bg-input rounded-[6px]"
          >
            <use
              width={12}
              height={12}
              href="./ai/image/icons.svg##icon-right"
            ></use>
          </svg>
        </div>
        <div className=" pointer-events-none">
          {' '}
          <img src={`${img}`} alt="AI" width={'48'} height={'48'} />
          <h4 className=" font-semibold text-[18px] mt-2">{title}</h4>
          <p className="text-[14px] text-cardsText mt-2 ">{children}</p>
        </div>
        <div className="flex justify-between  mt-6 pointer-events-none">
          <p className="bg-cardsTransparent px-3 py-[6px] text-cardsText rounded-xl ">
            {tag}
          </p>
          <p className="bg-cardsTransparent px-3 py-[6px] text-cardsText rounded-xl">
            {view}
          </p>
        </div>
      </li>
    )
  );
};

export default Card;
const Card = ({ title, img, view, tag, children }) => {
  return (
    <li className="w-[358px] md:w-[344px] lg:w-[288px] xl:w-[284px] 2xl:w-[404px] max-h-[297px] bg-cardsTransparent box-border border-[1px] border-cardsBorder flex flex-col  justify-between p-4 rounded-2xl ">
      <div className=" pointer-events-none">
        {' '}
        <img src={`ai/${img}`} alt="AI" width={'48'} height={'48'} />
        <h4 className=" font-semibold text-[18px] mt2">{title}</h4>
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
  );
};

export default Card;

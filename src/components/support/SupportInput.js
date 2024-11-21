const SupportInput = ({ value, labelText, style }) => {
  return (
    <label className="flex flex-col text-cardsText text-[12px]">
      {labelText}
      <input
        placeholder={value}
        className={`bg-input pl-2 rounded-xl w-[155px] md:w-[268px] lg:w-[416px] xl:w-[268px] h-[37px] border-[2px] border-transparent mt-[6px] focus:border-white focus:outline-none font-medium placeholder-inputText text-white ${style}`}
      />
    </label>
  );
};

export default SupportInput;

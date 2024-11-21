const InputModal = ({ value, name, labelText, styleList, onChange }) => {
  return (
    <label className="flex flex-col text-cardsText text-[12px]">
      {labelText}
      <input
        name={name}
        // onChange={e => onChange(e)}
        placeholder={value}
        className={`bg-input pl-2 rounded-xl  h-[37px] border-[2px] border-transparent mt-[6px] font-medium focus:border-white focus:outline-none placeholder-inputText text-white ${styleList}`}
      />
    </label>
  );
};

export default InputModal;

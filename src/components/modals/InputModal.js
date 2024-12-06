const InputModal = ({ value, name, labelText, styles, handleChange, err }) => {
  // console.log(err);
  return (
    <label
      className={`flex flex-col text-cardsText text-[12px] ${
        err ? 'text-red-600' : ''
      }`}
    >
      {err || labelText}
      <input
        name={name}
        // onChange={e => handleChange(e)}
        placeholder={value}
        className={`bg-input pl-2 rounded-xl  h-[37px] border-[2px] border-transparent mt-[6px] font-medium focus:border-white focus:outline-none placeholder-inputText text-white ${styles}`}
      />
    </label>
  );
};

export default InputModal;

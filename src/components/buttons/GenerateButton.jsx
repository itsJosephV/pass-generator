const GenerateButton = ({ generatePass, checkboxes, length }) => {
  return (
      <button
        className="btn btn-sm w-full btn-success font-bold"
        onClick={() => {
          generatePass(checkboxes, length);
        }}
      >
        GENERATE
      </button>
  );
};

export default GenerateButton;

import { MinusIcon, PlusIcon } from "../../icons";

const PasswordLength = ({
  handleMinusButton,
  length,
  handlePlusButton,
  setLength,
}) => {
  const buttonStyles =
    "border border-emerald-300 h-[20px] flex items-center w-[20px] rounded-md justify-center hover:bg-emerald-900 duration-200";

  return (
    <section className="flex flex-col gap-2 mb-7">
      <h2 className="text-center text-sm text-zinc-400">- Password Length -</h2>
      <p className="text-center text-2xl font-semibold">{length}</p>
      <div className="flex justify-between items-center mt-2">
        <button onClick={handleMinusButton} className={`${buttonStyles} mr-2`}>
          <MinusIcon width={".8em"} height={".8em"} fill={"#6ee7b7"} />
        </button>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          className="range range-sm w-[240px] range-success"
          onChange={(e) => setLength(+e.target.value)} //Parse to number to "sum"
        />
        <button onClick={handlePlusButton} className={`${buttonStyles} ml-2`}>
          <PlusIcon width={".8em"} height={".8em"} fill={"#6ee7b7"} />
        </button>
      </div>
    </section>
  );
};

export default PasswordLength;

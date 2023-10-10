const PasswordOptions = ({ checkboxes, handleCheckboxChange }) => {
  return (
      <section className="mb-5">
        <ul className="flex flex-col gap-3">
          {checkboxes.map((checkbox, index) => (
            <li key={checkbox.id}>
              <label
                className="flex justify-between items-center text-[16px] text-zinc-400"
                htmlFor=""
              >
                {checkbox.title}
                <input
                  type="checkbox"
                  checked={checkbox.state}
                  onChange={() => handleCheckboxChange(index)}
                  className="toggle toggle-xs toggle-success"
                />
              </label>
            </li>
          ))}
        </ul>
      </section>
  );
};

export default PasswordOptions;

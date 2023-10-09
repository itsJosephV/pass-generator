import CopyButton from "../buttons/CopyButton";
import PasswordStrength from "./PasswordStrength";

// eslint-disable-next-line react/prop-types
const PasswordField = ({ password, checkboxes }) => {
  // console.log(checkboxes)
  return (
    <section className="mb-8 relative">
      <div className="flex gap-3 relative items-center">
        <input
          type="text"
          readOnly
          placeholder="P4$$W0RD"
          className="p-1 w-full rounded-md text-center"
          value={password ? password : ""}
        />
        <CopyButton password={password} />
      </div>
      <PasswordStrength password={password} checkboxes={checkboxes} />
    </section>
  );
};

export default PasswordField;

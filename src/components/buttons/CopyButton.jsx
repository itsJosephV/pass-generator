import { CopyIcon } from "../../icons";
import notify from "../toast/Toast";

const CopyButton = ({ password }) => {

  const handleCopyButton = () => {
    return navigator.clipboard.writeText(password);
  };

  return (
    <button
        className={`p-1 rounded-md ${
          password
            ? "bg-indigo-500 hover:bg-indigo-600 duration-200"
            : "bg-zinc-600"
        } absolute right-[4px]`}
        role="submit"
        onClick={() => {
          handleCopyButton();
          notify('Password added to clipboard');
        }}
        disabled={!password}
      >
        <CopyIcon width={"1em"} height={"1em"} fill={"white"} />
      </button>
  );
};

export default CopyButton;

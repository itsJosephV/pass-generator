import toast from "react-hot-toast";
import { CopyIcon } from "../../icons";

// eslint-disable-next-line react/prop-types
const CopyButton = ({ password }) => {
  const notify = () => toast.success("Password copied to clipboard!");

  const handleCopyButton = () => {
    return navigator.clipboard.writeText(password);
  };

  return (
    <button
        className={`p-1 rounded-md ${
          password
            ? "bg-blue-500 hover:bg-blue-700 duration-200"
            : "bg-zinc-600"
        } absolute right-[4px]`}
        role="submit"
        onClick={() => {
          handleCopyButton();
          notify();
        }}
        disabled={!password}
      >
        <CopyIcon width={"1em"} height={"1em"} fill={"white"} />
      </button>
  );
};

export default CopyButton;

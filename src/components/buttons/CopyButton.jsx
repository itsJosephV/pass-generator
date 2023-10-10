import toast from "react-hot-toast";
import { CopyIcon } from "../../icons";

const CopyButton = ({ password }) => {
  const notify = () => toast.success("Password copied to clipboard!", {
    style: {
      background: '#09090b',
      color: '#fff',
      border: '1px solid #404040'
    }
  });

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
          notify();
        }}
        disabled={!password}
      >
        <CopyIcon width={"1em"} height={"1em"} fill={"white"} />
      </button>
  );
};

export default CopyButton;

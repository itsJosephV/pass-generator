import toast from "react-hot-toast";

const notify = (message, type = "") => {
  const toastStyle = {
    background: "#09090b",
    color: "#fff",
    border: "1px solid #404040",
  };

  switch (type) {
    case "success":
      toast.success(message, { style: toastStyle });
      break;
    case "error":
      toast.error(message, { style: toastStyle });
      break;
    default:
      break;
  }
};
// toast.success(message, { style: toastStyle })
export default notify;

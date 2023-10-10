import toast from "react-hot-toast";

const notify = (message) => toast.success(message, { style: toastStyle });

const toastStyle = {
  background: "#09090b",
  color: "#fff",
  border: "1px solid #404040",
};

export default notify;

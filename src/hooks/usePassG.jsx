import { useState } from "react";
import toast from "react-hot-toast";

export const usePassG = () => {
  const [password, setPassword] = useState("");

  const generatePass = (cbOptions, length) => {
    let generatedPassword = "";

    const selectedOptions = cbOptions.filter(({ state }) => state);

    if (selectedOptions.length === 0) {
      toast.error('Select at least one option!')
      setPassword("");
      return;
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * selectedOptions.length);

      const char = selectedOptions[index].getChar();
      generatedPassword += char;
    }
    setPassword(generatedPassword);
  };
  return { password, generatePass };
};

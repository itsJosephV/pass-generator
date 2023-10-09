import { useEffect, useState } from "react";

//TODO REFACTOR THIS COMPONENT
const PasswordStrength = ({ password, checkboxes }) => {
  const [strength, setStrength] = useState("");
  const [barColor, setBarColor] = useState("");
  const [width, setWidth] = useState("");

  const strengthDictionary = [
    {
      strength: "Weak",
      value: "20%",
      minLength: 6,
      maxLength: 8,
      color: "red",
    },
    {
      strength: "Normal",
      value: "50%",
      minLength: 9,
      maxLength: 11,
      color: "orange",
    },
    {
      strength: "Medium",
      value: "70%",
      minLength: 12,
      maxLength: 15,
      color: "blue",
    },
    {
      strength: "Strong",
      value: "100%",
      minLength: 16,
      maxLength: 20,
      color: "green",
    },
  ];
  // console.log(checkboxes)

  useEffect(() => {
    const passLength = password.length;
    // console.log(passLength);

    let selectedStrength = "";
    for (const entry of strengthDictionary) {
      if (passLength >= entry.minLength && passLength <= entry.maxLength) {
        selectedStrength = entry.strength;
        break;
      }
    }
    setStrength(selectedStrength);
    setWidth(
      passLength <= strengthDictionary[0].maxLength
        ? "20%"
        : strengthDictionary.find(
            (entry) => entry.strength === selectedStrength
          ).value
    );
    setBarColor(
      passLength <= strengthDictionary[0].maxLength
        ? "red"
        : strengthDictionary.find(
            (entry) => entry.strength === selectedStrength
          ).color
    );
  }, [password]);

  // console.log(width);

  return (
    <div className="absolute mt-[2px] w-full">
      <div className="flex justify-between items-center gap-2">
        {strength ? (
          <div
            className={`border-[2px] border-red-400  rounded-sm`}
            style={{ width: `${width}`, border: `2px solid ${barColor}` }}
          />
        ) : null}
        <p className="text-[12px]" style={{ color: `${barColor}` }}>
          {strength}
        </p>
      </div>
    </div>
  );
};

export default PasswordStrength;

// "Weak": "0-30%",
// "Moderate": "31-60%",
// "Strong": "61-80%",
// "Very Strong": "81-100%"

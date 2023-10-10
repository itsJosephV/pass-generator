import { useEffect, useState } from "react";

//TODO REFACTOR THIS COMPONENT
//TODO CALCULATE STRENGTH INCLUDING CB OPTIONS CHECKED 🐢
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
      color: "#ef4444",
    },
    {
      strength: "Normal",
      value: "50%",
      minLength: 9,
      maxLength: 11,
      color: "#fb923c",
    },
    {
      strength: "Medium",
      value: "70%",
      minLength: 12,
      maxLength: 15,
      color: "#3b82f6",
    },
    {
      strength: "Strong",
      value: "100%",
      minLength: 16,
      maxLength: 20,
      color: "#22c55e",
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
        ? "#ef4444"
        : strengthDictionary.find(
            (entry) => entry.strength === selectedStrength
          ).color
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  // console.log(width);

  return (
    <div className="absolute mt-[2px] w-full">
      <div className="flex justify-between items-center gap-2">
        {strength ? (
          <div
            className={`border-[2px] rounded-sm`}
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

import { useState } from "react";
import { AppWrapper } from "./components/wrappers/AppWrapper";
import Header from "./components/Header";
import PasswordField from "./components/password/PasswordField";
import PasswordLength from "./components/inputs/PasswordLength";
import PasswordOptions from "./components/inputs/PasswordOptions";
import GenerateButton from "./components/buttons/GenerateButton";
import Footer from "./components/Footer";
import { MainWrapper } from "./components/wrappers/MainWrapper";
import { usePassG } from "./hooks/usePassG";
import { checkboxData } from "./data/checkboxData";

function App() {
  const [length, setLength] = useState(6);

  const [checkboxes, setCheckboxes] = useState(checkboxData);

  const { password, generatePass } = usePassG();

  const handleMinusButton = (e) => {
    e.preventDefault();
    length > 6 && setLength((prev) => prev - 1);
  };

  const handlePlusButton = (e) => {
    e.preventDefault();
    length < 20 && setLength((prev) => prev + 1);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckbox = [...checkboxes];
    updatedCheckbox[index].state = !updatedCheckbox[index].state;
    setCheckboxes(updatedCheckbox);
  };

  return (
    <MainWrapper>
      <AppWrapper>
        <Header />
        <PasswordField password={password} checkboxes={checkboxes} />
        <PasswordLength
          handleMinusButton={handleMinusButton}
          handlePlusButton={handlePlusButton}
          length={length}
          setLength={setLength}
        />
        <PasswordOptions
          checkboxes={checkboxes}
          handleCheckboxChange={handleCheckboxChange}
        />
        <GenerateButton
          generatePass={generatePass}
          length={length}
          checkboxes={checkboxes}
        />
        <Footer />
      </AppWrapper>
    </MainWrapper>
  );
}

export default App;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CustomInput } from "reactstrap";

const FormCheckbox = (props) => {
  const { isChecked, lab } = props;
  const [checked, setChecked] = useState(isChecked);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <CustomInput
      for={"lab" + lab.id}
      type="checkbox"
      checked={checked}
      name={lab.id}
      id={"lab" + lab.id}
      label={lab.labShortName}
      onChange={toggleCheck}
    />
  );
};
export default FormCheckbox;

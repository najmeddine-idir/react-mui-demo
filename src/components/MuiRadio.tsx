import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
  const [radioValue, setRadioValue] = useState("");
  const handleChange = (value: string) => {
    setRadioValue(value);
  };
  return (
    <FormControl error>
      <FormLabel>Experience</FormLabel>
      <RadioGroup
        value={radioValue}
        onChange={(e) => handleChange(e.target.value)}
        row
      >
        <FormControlLabel label="0-2" value="0-2" control={<Radio />} />
        <FormControlLabel label="2-5" value="2-5" control={<Radio />} />
        <FormControlLabel label="6-10" value="6-10" control={<Radio />} />
      </RadioGroup>
      <FormHelperText>test</FormHelperText>
    </FormControl>
  );
};

export default MuiRadio;

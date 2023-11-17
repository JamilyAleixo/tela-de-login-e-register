import React from "react";
import { Input } from "./styles";

const InputCM = ({ input, type, placeholder, value, onChange }) => (
  <Input
    input={input}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputCM;
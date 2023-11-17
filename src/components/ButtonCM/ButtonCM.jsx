import React from "react";
import { Button } from "./styles";


const ButtonCM = ({ children, onClick, ...rest }) => {
    return (
      <Button button="true" onClick={onClick} {...rest}>
        {children}
      </Button>
    );
  };
  export default ButtonCM;
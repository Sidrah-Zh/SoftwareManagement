import React from "react";
import Button from "@mui/material/Button";

function CustomButton({ children, className, color, ...props }) {
  const buttonStyle = {
    width: "160px",
    height: "45px",
    borderRadius: "30px",
    backgroundColor: color || "#FF9034",
    color: color === "white" ? "black" : "white",
    marginRight: "10px",
  };

  return (
    <Button
      {...props}
      variant="contained"
      style={buttonStyle}
      className={className}
    >
      {children}
    </Button>
  );
}

export default CustomButton;

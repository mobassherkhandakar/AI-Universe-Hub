import React from "react";

const Button = ({ children }) => {
  return (
    <div className="font-bold text-center my-4">
      <button className="btn btn-primary">{children}</button>
    </div>
  );
};

export default Button;

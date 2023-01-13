import React from "react";

export interface IInput {
  width: string;
  value: string;
  onClick: () => void;
}

const Input: React.FC<IInput> = ({ width = "100px", value, onClick }) => {

    
  return (
    <div>
      <input data-testid="input" value={value} style={{ width }} type="text" />
      <button data-testid="button" onClick={onClick}>
        button
      </button>
    </div>
  );
};

export default Input;

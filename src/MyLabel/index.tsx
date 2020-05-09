import React from "react";

interface IProps {
  color?: string;
}

// teste para commit

<<<<<<< HEAD
const MyLabel: React.FC<IProps> = ({ color = "blue", ...props }) => {
=======
const MyLabel: React.FC<IProps> = ({ color = "red", ...props }) => {
>>>>>>> master
  return (
    <>
      <label color={color}>{props.children}</label>
      <label color={color}>{props.children}</label>
    </>
  );
};

export default MyLabel;

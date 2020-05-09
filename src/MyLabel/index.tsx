import React from "react";

interface IProps {
  color?: string;
}

// teste para commit

const MyLabel: React.FC<IProps> = ({ color = "green", ...props }) => {
  return (
    <>
      <label color={color}>{props.children}</label>
    </>
  );
};

export default MyLabel;

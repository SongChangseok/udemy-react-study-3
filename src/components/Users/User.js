import React from "react";

const User = ({ name, age }) => {
  console.log(name);
  return (
    <li>
      {name} ({age} years old)
    </li>
  );
};

export default React.memo(User);

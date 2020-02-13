import React from "react";

const Header = ({ children }) => {
  return (
    <div className="p-4 bg-indigo-500 sm:flex justify-between items-center">
      {children}
    </div>
  );
};

export default Header;

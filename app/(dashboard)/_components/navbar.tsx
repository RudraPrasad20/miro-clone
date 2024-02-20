import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 bg-amber-200">{/* TODO: Add Search */}Search</div>
      <button>profile button</button>
    </div>
  );
};

export default Navbar;

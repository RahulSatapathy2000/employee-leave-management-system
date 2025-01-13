import React from "react";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="flex items-center text-white justify-between h-20 bg-indigo-500 px-5">
      <p className="text-2xl ">Welcome, {user.name}</p>
      <button
        className="px-4 py-1 bg-indigo-900 hover:bg-orange-700"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

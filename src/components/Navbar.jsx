import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly mt-2 pt-4">
        <Link to="/">Home</Link>
        <Link to="/basket">Basket</Link>
      </div>
      <h1 className=" text-3xl text-center font-semibold mt-2 py-4">
        useContext + user reducer
      </h1>
    </>
  );
};

export default Navbar;

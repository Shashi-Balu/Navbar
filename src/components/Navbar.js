import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink activeClassName="active" exact className="nav-link" to="/">
                Home
            </NavLink>
            <NavLink activeClassName="active" exact className="nav-link" to={"/collections"}>
                Collections
            </NavLink>
            <NavLink activeClassName="active" exact className="nav-link" to={"/contact"}>
                Contact
            </NavLink>
            <NavLink activeClassName="active" exact className="nav-link" to={"/about"}>
                About
            </NavLink>
        </div>
    );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src={logo} className="logo" />

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    exact
                                    className="nav-link-box"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    exact
                                    className="nav-link-box"
                                    to={"/collections"}
                                >
                                    Collections
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    exact
                                    className="nav-link-box"
                                    to={"/contact"}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    activeClassName="active"
                                    exact
                                    className="nav-link-box"
                                    to={"/about"}
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

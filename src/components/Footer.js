import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-para">
                Designed By: <strong className="footer-name">Shashi Balu</strong>
            </p>
            <p className="footer-para">
                <a href="https://www.linkedin.com/in/shashi-balu/" className="icon">
                    <LinkedInIcon className="icon" />
                </a>
                <a href="https://github.com/Shashi-Balu" target="_blank" className="icon">
                    <GitHubIcon className="icon" />
                </a>
            </p>
        </div>
    );
};

export default Footer;

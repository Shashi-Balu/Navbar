import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
                <img
                    className="contact-img"
                    src="https://source.unsplash.com/700x700/?telephone"
                    alt="Telephone"
                />
            </div>
            <div className="right">
                <h3 className="contact-header">Contact Us</h3>
                <p className="contact-para">
                    <strong>Address:</strong> 13 Chemin C.e. No 76, Bubry, France
                </p>
                <p className="contact-para">
                    <strong>Phone:</strong> +33-26022451
                </p>
                <p className="contact-para">
                    <strong>Opening Time:</strong> Monday-Saturday 8:00 am to 7:00pm
                </p>
            </div>
        </div>
    );
};

export default Contact;

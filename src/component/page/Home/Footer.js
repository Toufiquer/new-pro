import React from "react";

const Footer = ({ img }) => {
    const date = new Date().getFullYear();
    return (
        <div style={{ background: `url(${img})` }}>
            <footer className="footer p-10 text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <span className="link link-hover">Branding</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <span className="link link-hover">Branding</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <span className="link link-hover">Branding</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright &copy; - {date} All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

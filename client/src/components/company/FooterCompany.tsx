import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

// Styles for this component
import "../../assets/css/components/company/FooterCompany.css";

// Logo
import Logo from "../../assets/img/Logo.png";

// React icons
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const FooterCompany = () => {
    return (
        <footer className="footer-company font-inter bg-black-medium">
            <div className="items-footer-company bg-transparent">
                <div className="item-footer-company about-footer-company bg-transparent">
                    <img src={Logo} className="bg-transparent" alt="" />
                    <p className="color-gray bg-transparent">
                        StockFlow is an inventory and sales management solution for small and medium-sized businesses.
                    </p>
                </div>
                <div className="item-footer-company quick-links-footer-company bg-transparent">
                    <h2 className="color-white bg-transparent">Quick Links</h2>
                    <ul className="bg-transparent list-links-footer-company">
                        <LinkScroll to="/" className="bg-transparent color-gray">Home</LinkScroll>
                        <LinkScroll to="/" className="bg-transparent color-gray">Features</LinkScroll>
                        <LinkScroll to="/" className="bg-transparent color-gray">Plans</LinkScroll>
                        <LinkScroll to="/" className="bg-transparent color-gray">Contact Us</LinkScroll>
                    </ul>
                </div>
                <div className="item-footer-company quick-links-footer-company bg-transparent">
                    <h2 className="color-white bg-transparent">Legal</h2>
                    <ul className="bg-transparent list-links-footer-company">
                        <Link to="/" className="bg-transparent color-gray">Terms and Conditions</Link>
                        <Link to="/" className="bg-transparent color-gray">Privacy Policy</Link>
                    </ul>
                </div>
                <div className="item-footer-company connect-with-us-footer-company bg-transparent">
                    <h2 className="color-white bg-transparent">Find Us on:</h2>
                    <ul className="bg-transparent">
                        <Link to="https://www.instagram.com/" className="item-connect-with-us bg-transparent">
                            <FaInstagram />
                            <h2 className="color-white bg-transparent">stockflow</h2>
                        </Link>
                        <Link to="https://www.facebook.com/" className="item-connect-with-us bg-transparent">
                            <FaFacebookSquare />
                            <h2 className="color-white bg-transparent">StockFlow</h2>
                        </Link>
                        <Link to="https://x.com/" className="item-connect-with-us bg-transparent">
                            <RiTwitterXFill />
                            <h2 className="color-white bg-transparent">@stockflow</h2>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="rights-footer-company bg-transparent color-gray">
                © 2024 StockFlow. All rights reserved.
            </div>
        </footer>
    )
}

export { FooterCompany };
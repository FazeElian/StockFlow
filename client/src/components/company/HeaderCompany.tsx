import { useEffect, useState } from "react";

// Links
import { Link, Outlet } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

// Styles
import "../../assets/css/components/company/HeaderCompany.css";

// Logo
import Logo from "../../assets/img/Logo.png";

// React icons
import { FaHome } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoIosMenu, IoMdPricetags } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";

const HeaderCompany = () => {
    const [ menu, setMenu ] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    // Hook to disable menu when user scrolls a certain amount
    useEffect(() => {
        const handleScrollMenu = () => {
            const scrollThreshold = 150; // Scroll Amount
            if (window.scrollY > scrollThreshold && menu) {
                setMenu(false);
            }
        };
            
        window.addEventListener('scroll', handleScrollMenu); // Adding Scroll Event
        
        return () => {
            window.removeEventListener('scroll', handleScrollMenu);
        };
    }, [menu]);

    return (
        <>
            <header className="header-company font-inter">
                <nav className="nav-logo--company bg-transparent">
                    <img src={Logo} alt="" />
                </nav>
                <nav className={ `nav-list--company ${menu ? "active" : ""}` }>
                    <section className="sect-list-nav-list--company">
                        <LinkScroll
                            to="home"
                            className="item-nav-list--company bg-transparent"
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500}
                        >
                            <FaHome />
                            Home
                        </LinkScroll>
                        <LinkScroll
                            to="features"
                            className="item-nav-list--company bg-transparent"
                            spy={true}
                            offset={-80}
                            smooth={true} 
                            duration={500}
                        >
                            <FaGears />
                            Features
                        </LinkScroll>
                        <LinkScroll
                            to="pricing"
                            className="item-nav-list--company bg-transparent"
                            spy={true}
                            offset={-100}
                            smooth={true} 
                            duration={500}
                        >
                            <IoMdPricetags />
                            Pricing
                        </LinkScroll>
                        <LinkScroll
                            to="contact-us"
                            className="item-nav-list--company bg-transparent"
                            spy={true}
                            offset={-50}
                            smooth={true} 
                            duration={500}
                        >
                            <MdWifiCalling3 />
                            Contact Us
                        </LinkScroll>
                    </section>

                    <section className="sect-user-nav-list--company">
                        <Link to="/auth/login" className="item-nav-list--company bg-transparent">Log In</Link>
                        <Link to="/auth/register" className="item-nav-list--company bg-transparent">Sign Up</Link>
                    </section>
                </nav>
                <nav className="nav-user--company bg-transparent">
                    <Link to="/auth/login" className="btn-header--company btn-login-header--company color-white">
                        Log In
                    </Link>
                    <Link to="/auth/register" className="btn-header--company btn-signin-header--company color-white">
                        Sign Up
                    </Link>
                    <button className="btn-menu--company color-white bg-transparent" onClick={toggleMenu}>
                        <IoIosMenu />
                    </button>
                </nav>
            </header>

            <Outlet />
        </>
    )
}

export { HeaderCompany };
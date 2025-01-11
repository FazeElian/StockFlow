"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from  "react-scroll";

// Styles for this component
import "@/public/css/components/company/HeaderCompany.css";

// Logo
import Logo from "@/public/img/Logo.png";

// React icons
import { IoIosMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";

const HeaderCompany = () => {
    const [ menu, setMenu ] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <header className="header-company font-inter">
                <nav className="nav-logo--company bg-transparent">
                    <Image
                        src={Logo}
                        alt="StockFlow"
                        className="bg-transparent"
                    />
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
                            to="#"
                            className="item-nav-list--company bg-transparent"
                        >
                            <MdWifiCalling3 />
                            Contact Us
                        </LinkScroll>
                    </section>

                    <section className="sect-user-nav-list--company">
                        <Link href="/auth/login" className="item-nav-list--company bg-transparent">Log In</Link>
                        <Link href="/auth/register" className="item-nav-list--company bg-transparent">Sign Up</Link>
                    </section>
                </nav>
                <nav className="nav-user--company bg-transparent">
                    <Link href="/auth/login" className="btn-header--company btn-login-header--company color-white">
                        Log In
                    </Link>
                    <Link href="/auth/register" className="btn-header--company btn-signin-header--company color-white">
                        Sign Up
                    </Link>
                    <button className="btn-menu--company color-white bg-transparent" onClick={toggleMenu}>
                        <IoIosMenu />
                    </button>
                </nav>
            </header>
        </>
    )
}

export { HeaderCompany };
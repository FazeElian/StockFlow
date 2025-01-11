"use client";

import { Element } from "react-scroll";
import Link from "next/link";

// Styles
import "@/public/css/components/company/ContactUs.css";

// React icons
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const ContactUs = () => {
    return (
        <Element className="contact-us font-inter" name="contact-us">
            <div className="social-media-contact">
                <h1 className="color-white">Contact Information</h1>
                <p className="color-gray">
                    Please feel free to contact us at any time.
                    We will reply you as soon as possible!
                </p>

                <h2 className="color-white">Email: </h2>
                <h4 className="color-gray">stockflow@example.com</h4>

                <h2 className="color-white">Phone Number: </h2>
                <h4 className="color-gray">+1 9999999999</h4>

                <ul className="social-media-items-contact">
                    <Link href="https://www.whatsapp.com/">
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://www.facebook.com/">
                        <FaFacebookSquare />
                    </Link>
                    <Link href="https://www.instagram.com/">
                        <FaInstagram />
                    </Link>
                    <Link href="https://x.com/">
                        <RiTwitterXFill />
                    </Link>
                </ul>
            </div>
            <form action="" className="form-contact">
                <h1 className="color-white">Send us a message</h1>

                <div className="form-contact-group">
                    <label htmlFor="name" className="color-white">Name</label>
                    <input
                        type="text"
                        className="font-inter color-white"
                        name="name"
                        id="name"
                        placeholder="Full name"
                        required
                    />
                </div>
                <div className="form-contact-group">
                    <label htmlFor="email" className="color-white">Email</label>
                    <input
                        type="email"
                        className="font-inter color-white"
                        name="email"
                        id="email"
                        placeholder="example@mail.com"
                        required
                    />
                </div>
                <div className="form-contact-group">
                    <label htmlFor="email" className="color-white">Subject</label>
                    <select
                        className="font-inter color-gray"
                        name="subject"
                        id="subject"
                        required
                    >
                        <option className="bg-black" defaultValue="">Reason for contact</option>
                        <option value="" className="bg-black">General inquiry</option>
                        <option value="" className="bg-black">Product information</option>
                        <option value="" className="bg-black">Billing and payments</option>
                        <option value="" className="bg-black">Partnership opportunities</option>
                    </select>
                </div>
                <div className="form-contact-group">
                    <label htmlFor="email" className="color-white">Email</label>
                    <textarea
                        name="message"
                        id="message"
                        className="color-gray font-inter"
                        placeholder="Leave your message here"
                        required
                    />
                </div>

                <button className="btn-submit-contact font-inter bg-black-light color-white" type="submit">
                    Send message
                </button>
            </form>
        </Element>
    )
}

export { ContactUs }
"use client";

import Link from 'next/link';

// Styles for this component
import "@/public/css/components/company/StartNowCallToAction.css";

const StartNowCallToAction = () => {
    return (
        <div className="start-now--call-to-action bg-gray-dark font-inter">
            <h1 className="bg-transparent color-white">Optimize your business in minutes</h1>
            <p className="bg-transparent color-gray">
                Automate your inventory, sales and customer management with our intuitive tools.
            </p>
            <Link
                href=""
                className="bg-transparent btn-start-now-call-to-action color-white bg-black"
            >
                Start Now
            </Link>
        </div>
    )
}

export { StartNowCallToAction };
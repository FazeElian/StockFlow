"use client";

import Link from "next/link";

// Styles for this component
import "@/public/css/components/NotFound.css";

// Framer motion
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <main className="content-page--company font-inter">
            <motion.div
                className="not-found"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: .3,
                    ease: [0, .71, .2, 1.01]
                }}
            >
                <h1>404</h1>
                <h2>Page not Found</h2>
                <Link href="/" className="btn-not-found">
                    Back to Home
                </Link>
            </motion.div>
        </main>
    )
}
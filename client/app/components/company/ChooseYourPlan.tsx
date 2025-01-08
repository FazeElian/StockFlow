"use client";

// Styles
import ItemsChooseYourPlan from "@/app/utils/ItemsChooseYourPlan";

// Framer motion
import { motion } from 'framer-motion';

// Items
import "@/public/css/components/company/ChooseYourPlan.css"

const ChooseYourPlan = () => {
    return (
        <section className="choose-plan font-inter">
            <h1 className="color-white bg-transparent">Choose your Plan</h1>
            <div className="group-choose-plan">
                {/* Items */}
                {ItemsChooseYourPlan.map((item) => (
                    <motion.div
                        className="item-choose-plan bg-black-medium"
                        key={item.id}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .3,
                        }}
                    >
                        <h2 className="color-white bg-transparent">{item.title}</h2>
                        <ul className="list-item-choose-plan bg-transparent">
                            <li className="color-white bg-transparent">&#10003; Daily sales reports</li>
                            <li className="color-white bg-transparent">&#10003; Export reports in PDF format</li>
                            <li className="color-white bg-transparent">&#10003; Access to basic tutorial videos</li>
                            <li className="color-white bg-transparent">&#10003; Receive automatic alerts when product stock is running low</li>
                            <li className="color-white bg-transparent">&#10003; Enjoy unlimited product management to scale your business</li>
                            <li className="color-white bg-transparent">&#10003; Email notifications</li>
                        </ul>
                        <h3 className="color-white bg-transparent"><b className="bg-transparent">Duration: </b>{item.duration}</h3>
                        <h4 className="color-white bg-transparent"><b className="bg-transparent"> ${item.price}</b> / month</h4>
                        <button className="btn-get-started-choose-plan color-white font-inter bg-black-light">
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export { ChooseYourPlan };
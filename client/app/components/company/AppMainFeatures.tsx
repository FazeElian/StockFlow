"use client"

// Framer motion
import { motion } from 'framer-motion';

// Items
import ItemsMainFeatures from '@/app/utils/ItemsAppMainFeatures';

const AppMainFeatures = () => {
    return (
        <section className="app-features bg-black-medium font-inter">
            <h1 className="color-white bg-transparent">Essential features for your business</h1>
                <div className="items-app-features bg-transparent">
                    {ItemsMainFeatures.map((item) => (
                        <div key={item.id}>
                            <motion.div
                                className="item-app-features bg-black-light"
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    duration: .25,
                                }}
                            >
                                <div className="top-item-app-features bg-transparent">
                                    <item.imgSrc />
                                    <h2 className="color-white bg-transparent">{item.title}</h2>
                                </div>
                                <div className="btm-item-app-features bg-transparent">
                                    <p className="color-gray bg-transparent">{item.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export { AppMainFeatures };
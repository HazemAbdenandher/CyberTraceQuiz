import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
};

const Loader = () => {
  return (
    <div className="home container">
      <motion.div className="loader"
        variants={loaderVariants}
        animate= "animationOne" 
      >
      </motion.div>
      <h4>Loading...</h4>
    </div>
  )
}

export default Loader;
import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({index,length,check,lastCheck}) => {
    
  const buttonVariants = {
    hidden: {opacity:0},
    visible : {opacity : 1,  transition:{delay:1.8} },
    hover: {scale : 1.1, textShadow:"0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)" },
    tap : {scale:0.9 },
    transition : {type:"spring", stiffness:300}  
  } 
    return (
        <div className='footer'>
            <h2>{index+1 } of {length} Questions</h2> 
            
            {index!==length-1 && <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            transition="transition"
            onClick={check}
            >
                Next
            </motion.button>}
            {index===length-1 &&<motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            transition="transition"
            onClick={lastCheck}
            >
                Result
            </motion.button>}
            
        </div>
    );
};

export default Footer;
import React  from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const homeContainer = {
    hidden:{
      x:"100vw"
    },
    visible:{
      x:0,
      transition:{
        delay:0.5,        
        type:"spring",
        stiffness:50
      }
    },
    exit:{
      x:"-100vw",
      transition : {ease : "easeInOut"}
    }
  }
  const opening = {
    visible:{
      opacity:1,
      transition:{ 
        delay:1.5
      }
    }
  }
  const buttonVariants = {
    hidden: {opacity:0},
    visible : {opacity : 1,  transition:{delay:1.8} },
    hover: {scale : 1.1, textShadow:"0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)" },
    tap : {scale:0.9 },
    transition : {type:"spring", stiffness:300}  
  } 
  return (
    <motion.div className="home container"
    variants={homeContainer}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <motion.h2
      variants={opening}
      animate="visible"
      >
        Ready to start ?
      </motion.h2>

        <Link to="/Quiz">
          <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          transition="transition"
          >
            START
          </motion.button>
        </Link>
      </motion.div>
  );
}

export default Home;
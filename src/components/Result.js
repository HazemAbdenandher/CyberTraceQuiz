import React from 'react';
import { motion } from 'framer-motion';
import { Link,useLocation } from 'react-router-dom';
import crown from "../images/crown.png"


const Result = () => {
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

    const location = useLocation()
    const {length, score} = location.state.state
    return (
        <motion.div className="home container"
        variants={homeContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <motion.div
            variants={opening}
            animate="visible"
            >
                <img src={crown}  alt="crown" className='crown'/>
                <h2>You've completed the Quiz</h2>
                <h2>You got {score} out of {length} </h2>
            </motion.div>

            <Link to="/home">
                <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                transition="transition"
                >
                    Restart
                </motion.button>
            </Link>
      </motion.div>
    );
};

export default Result;
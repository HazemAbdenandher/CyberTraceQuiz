import React from 'react';
import { motion } from 'framer-motion';
import logo from "../images/logo.png"
const Header = () => {



  return (
    <motion.header
    className='header'
    initial={{y:"-100vh"}}
    animate={{y:0}}
    transition={{type: "spring", stiffness: 70}}
    >
      <img src={logo} alt="logo" className='logo' />
      <h1 className='title'>Quiz Application</h1>
      <div></div>
    </motion.header>
  )
}

export default Header;
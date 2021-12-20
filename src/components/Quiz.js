import React,{ useState } from 'react';
import Footer from './Footer';
import {motion} from "framer-motion";
import  data from "../data/data.json"
import { useHistory } from 'react-router-dom';

const Quiz = () => {
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
    
    const optionVariants = {
        visible : {opacity : 1,  transition:{delay:1.8} },
        hover: { border: "3px rgb(139,43,226) solid",boxShadow: "0px 0px 8px rgb(139,43,226)"},
        tap : {scale:0.9 },
        transition : {type:"spring", stiffness:300}  
      } 
    const [index,setIndex] = useState(0)
    const [answer,setAnswer] = useState(null)
    const [score,setScore] = useState(0)
    const history = useHistory()
    const check=()=>{
        if (answer===data[index].ANSWER) {    
            setScore(score+1)
        }
        setAnswer(null)
        setIndex(index+1)
    }

    const lastCheck=()=>{
        if (answer===data[index].ANSWER) {
            history.push("/result",{state:{length:data.length,score:score+1}})
        }else{
        history.push("/result",{state:{length:data.length,score:score}})
    }}

    return (
        (data[index] !== undefined && <motion.div 
        variants={homeContainer}
        initial="hidden"
        animate="visible"
        exit="exit">
            <div className="home container quiz"> 
                <h2>{index+1}. {data[index].question}</h2>
                <div>
                    <motion.div 
                    variants={optionVariants}
                    initial="hidden"
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition" 
                    className="option" 
                    onClick={()=>setAnswer(1)}>
                        <p>{data[index].A}  </p>
                        <span className='check' style={{display:answer===1?"inline":"none"}}>✓</span>
                    </motion.div>
                    <motion.div 
                    variants={optionVariants}
                    initial="hidden"
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    className='option'  
                    onClick={()=>setAnswer(2)}>
                        <p>{data[index].B}</p>
                        <span className='check' style={{display:answer===2?"inline":"none"}}>✓</span>
                    </motion.div>
                    <motion.div variants={optionVariants}
                    initial="hidden"
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    className="option" 
                    onClick={()=>setAnswer(3)}>
                        <p>{data[index].C}</p>
                        <span className='check' style={{display:answer===3?"inline":"none"}}>✓</span>
                    </motion.div>
                </div>
            </div>
            <Footer index={index} length={data.length} setIndex={setIndex} check={check} lastCheck={lastCheck} />
        </motion.div>)
    );
};

export default Quiz;
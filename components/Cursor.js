import { useState, useEffect } from "react";
import { motion } from 'framer-motion'

const Cursor = () => {
  const [mousePosition , setMousePosition] = useState({
    x:0,
    y:0
  })
  

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default:{
      x: mousePosition.x,
      y:mousePosition.y
    }
  }

  return (
    <motion.div 
    className='bg-slate-400 opacity-40 border-8 border-slate-300 h-[60px] w-[60px] rounded-[50%] fixed top-[-25px] left-[-25px] z-[-1]'
    variants={variants}
    animate='default'>
    </motion.div>
  );
}

export default Cursor;
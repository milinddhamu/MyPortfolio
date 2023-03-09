import Image from "next/image";
import reacticon from "../public/icons8-react.svg";
import jsicon from "../public/icons8-javascript.svg";
import pythonicon from "../public/icons8-python.svg";
import htmlicon from "../public/icons8-html-5.svg";
import cssicon from "../public/icons8-css3.svg";
import nexticon from "../public/icons8-next.js.svg";
import tailwindicon from "../public/icons8-tailwindcss.svg";
import arrowicon from "../public/icons8-right-arrow-64.png";
import giticon from "../public/icons8-git.svg";
import vscodeicon from "../public/icons8-visual-studio-code-2019.svg";
import { motion, AnimatePresence, useScroll, useCycle, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import githublogo from "../public/icons8-github(1).svg";
import mailicon from "../public/icons8-mail-90(1).png";
import linkedinlogo from "../public/icons8-linkedin.svg";
import firebaseicon from "../public/icons8-firebase.svg";
import photoshopicon from "../public/icons8-adobe-photoshop.svg";
import sassicon from "../public/icons8-sass.svg";
import bootstrapicon from "../public/icons8-bootstrap.svg";
import framericon from "../public/framer-motion-seeklogo.com.svg";
import illustratoricon from '../public/icons8-adobe-illustrator.svg'
import React, { useRef } from 'react'
import Name from "./Name";


const Profile = () => {
  
  
  const router = useRouter();
  var name = "Milind".split("");
  var surname = 'Dhamu'.split("")
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref});
  

  return (
    <>
      <div className="flex flex-row justify-center z-10 h-screen object-contain">
        <div className="flex flex-row justify-between from-slate50 to-slate400 w-screen grid-cols-2 grid-flow-row bg-opacity-30 backdrop-blur-[1px] rounded-xl shadow-xl m-20 xlg:grid-cols-1 border-[1px] border-slate-200">
          <div className="flex flex-col grid-cols-2 grid-flow-row justify-between w-full m-12">
            <div
              className="flex flex-col animate-text max-h-max max-w-max bg-gradient-to-r from-indigo-700 via-violet-700 to-blue-800 bg-clip-text text-transparent md:flex md:justify-center sm:justify-center
            "
            >
              <div className='flex flex-col justify-start pl-4'>
                <ul className="font-serif  text-xl pb-3 sm:text-2xl">
                  Hey&#33; there I&#39;m
                </ul>
                <div className='flex flex-col font-serif font-extrabold text-6xl sm:text-7xl xl:text-9xl'>
                  <ul className="flex text-slate-800 ">
                    {name.map((letter, index) => {
                      return(
                        <Name key={index}>
                          {letter}
                        </Name>
                      ) 
                      })}
                      <div>&nbsp;</div>    
                  </ul>
                  
                  
                </div>
              </div>
            </div>
            <div className='sm:flex'>
              <h1 className="font-mono text-sm sm:text-xl mb-20">
                  A wannabe Frontend Developer , intrested in Trendy Fun Tech!
              </h1>
            </div>
            <div className="group hover:backdrop-blur-md border-[1px] border-slate800 flex justify-center h-40 sm:h-48 bg-black   drop-shadow-md backdrop-blur-[2px] bg-opacity-20 rounded-xl shadow-sm ">
              <div className="flex flex-col justify-between items-center m-4">
                <h1 className="font-bold text-md sm:text-xl font-mono text-white drop-shadow-md mt-4 text-slate-200 ">
                  Connect with me
                </h1>
                <div className="flex flex-row justify-center items-center gap-4 mt-[-4px] relative">
                  <u1
                    className="drop-shadow-md cursor-pointer hover:scale-110 w-10 h-10 transition-all md:h-12 md:w-12"
                    onClick={() =>
                      router.push("https://github.com/milinddhamu")
                    }
                  >
                    <Image
                      src={githublogo}
                      alt=""
                      layout='fill'
                      quality={100}
                      
                    />
                  </u1>
                  <u1
                    className="drop-shadow-md cursor-pointer hover:scale-110 transition-all w-10 h-10 md:h-12 md:w-12"
                    onClick={() =>
                      router.push("https://www.linkedin.com/in/milinddhamu/")
                    }
                  >
                    <Image
                      src={linkedinlogo}
                      alt=""
                      layout='fill'
                      quality={100}
                    />
                  </u1>

                  <u1
                    className="drop-shadow-md cursor-pointer ml-1 hover:scale-110 transition-all w-9 h-9 md:h-12 md:w-12"
                    onClick={() =>
                      router.push("mailto:milind.dhamu.123@gmail.com")
                    }
                  >
                    <Image
                      src={mailicon}
                      alt=""
                      layout='fill'
                      quality={100}
                      
                    />
                  </u1>
                </div>
                <h2 
                className="text-white font-serif drop-shadow-xl text-slate-200">&#169;{new Date().getFullYear()}</h2>
              </div>
              <div></div>
            </div>
          </div>

          <div className="flex-col justify-start mt-20 w-full hidden xlg:flex overflow-hidden pl-20 mr-2">
            <div className="flex-end">
              <div className="flex flex-row justify-end mx-20 text-4xl font-mono motion-safe:animate-fadeIn ">
                <Typewriter
                  options={{
                    strings: [`Tech Stack`, "Skills"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <div className="flex flex-row justify-between z-40"></div>
              <div className="flex flex-row justify-end">
                <div className="grid grid-cols-3 m-10 grid-flow-row gap-2">
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.2 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center drop-shadow-md border-[1px] border-white700 items-center rounded-md h-32 w-32 cursor-pointer bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] 
                    hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://www.javascript.com/")}
                  >
                    <Image
                      src={jsicon}
                      alt=""
                      width={70}
                      height={70}
                      quality={"100%"}
                      className='drop-shadow-md'
                      
                    />
                    
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.2 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center items-center drop-shadow-md rounded-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] cursor-pointer  border-white700 border-[1px] pt-1
                  hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://www.python.org/")}
                  >
                    <Image
                      src={htmlicon}
                      alt=""
                      width={70}
                      height={70}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.2 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center items-center drop-shadow-md rounded-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] cursor-pointer pt-1 border-[1px] border-white700
                  hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://code.visualstudio.com/")}
                  >
                    <Image
                      src={cssicon}
                      alt=""
                      width={70}
                      height={70}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.2 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center items-center drop-shadow-md rounded-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] cursor-pointer  border-[1px] border-white700
                  hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://developer.mozilla.org/en-US/docs/Web/HTML")}
                  >
                    <Image
                      src={nexticon}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.5 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center items-center drop-shadow-md rounded-md
                   h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] cursor-pointer 
                  border-[1px] border-white700 hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://reactjs.org/")}
                  >
                    <Image
                      src={reacticon}
                      alt=""
                      width={70}
                      height={70}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.5 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center
                  border-[1px] border-white700 items-center rounded-md drop-shadow-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] hover:backdrop-blur-md cursor-pointer
                  hover:border-white hover:backdrop-blur-md
                  "
                    onClick={() => router.push("https://tailwindcss.com/")}
                  >
                    <Image
                      src={tailwindicon}
                      alt=""
                      width={65}
                      height={65}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.2 }
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center items-center drop-shadow-md rounded-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] cursor-pointer pt-1  border-[1px] border-white700
                  hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://developer.mozilla.org/en-US/docs/Web/CSS")}
                  >
                    <Image
                      src={pythonicon}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.2 }
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center items-center drop-shadow-md rounded-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400  backdrop-blur-[2px] cursor-pointer  border-[1px] border-white700
                  hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://nextjs.org/")}
                  >
                    <Image
                      src={giticon}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u2
                    layoutId={"info"}
                    animate={{
                      x: -50,
                      transition:{ delay: 0.5 }
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center items-center drop-shadow-md rounded-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] cursor-pointer  border-[1px] border-white700
                  hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://git-scm.com/")}
                  >
                    <Image
                      src={vscodeicon}
                      alt=""
                      width={70}
                      height={70}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u2>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.2 }
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}
                    
                    className="shadow-sm flex justify-center box-shadow-md drop-shadow-md items-center rounded-md h-32 w-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-[2px] cursor-pointer border-[1px] border-white700
                  hover:border-white hover:backdrop-blur-md"
                    onClick={() => router.push("https://firebase.google.com/")}
                  >
                    <Image
                      src={firebaseicon}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='drop-shadow-md'
                    />
                  </motion.u1>
                  <motion.u1
                    animate={{
                      x: -50,
                      transition:{ delay: 0.5 }
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.1 },
                    }}                                        
                      className="group flex col-span-2 drop-shadow-md rounded-md h-32 bg-gradient-to-bl from-slate50 to-slate400 backdrop-blur-sm border-[1px] border-white700
                        hover:border-white"
                      >
                    <motion.div   
                    className='flex flex-row justify-between items-center m-2'
                    >
                      <motion.div 
                      ref={ref}
                      className='snap-mandatory snap-y flex flex-col h-28 w-28 scroll-smooth overflow-y-scroll scrollbar-hide relative items-center bg-black bg-opacity-20 drop-shadow-md hover:backdrop-blur-md rounded-md space-y-8'>
                      <Image
                      src={sassicon}
                      onClick={()=> router.push('https://sass-lang.com/')}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='pt-6 snap-start cursor-pointer drop-shadow-md'
                      />
                      <Image
                      src={framericon}
                      onClick={()=> router.push('https://www.framer.com/')}
                      alt=""
                      width={50}
                      height={50}
                      quality={"100%"}
                      className='mx-2 snap-center cursor-pointer drop-shadow-md'
                      /> 
                      <Image
                      src={bootstrapicon}
                      onClick={()=> router.push('https://getbootstrap.com/')}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='snap-center cursor-pointer drop-shadow-md'
                      />
                      <Image
                      src={photoshopicon}
                      onClick={()=> router.push('https://www.adobe.com/in/products/photoshop.html')}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='snap-center cursor-pointer drop-shadow-md'
                      />
                      <Image
                      src={illustratoricon}
                      onClick={()=> router.push('https://www.adobe.com/in/products/illustrator.html')}
                      alt=""
                      width={60}
                      height={60}
                      quality={"100%"}
                      className='snap-center pb-6 cursor-pointer drop-shadow-md'
                      />   
                      </motion.div>
                      <div className='flex'>
                      <div className="wrapper">
                        <motion.div 
                          className="container">
                          <motion.div
                            className="item"
                            style={{
                            scaleY: scrollYProgress }}
                            />
                          </motion.div>
                        </div>    
                        </div>
                      <div className='flex flex-col justify-end items-center font-mono text-xl text-slate-800 m-2 pl-4'>
                      <h1>Familiar</h1>
                      <h1>with</h1>   
                      </div>
                    </motion.div>
                  </motion.u1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

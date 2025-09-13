import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import heroIma from "../assets/heroComputer.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915eff]">AutoDevx</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-[#f00] workspin `}>
            I develop user interfaces, web applications, <br className="sm:block hidden" />
            and everything in between.
          </p>
        </div>
      </div>
     
     <div className="absolute inset-0 top-37 w-full h-full flex items-center justify-center">
       <img src={heroIma}alt="cover" className="object-contain" />
       </div>
      
      <div className='absolute xs:bottom-0 bottom-15 w-full flex justify-center items-center cursor-pointer'>
      <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4  border-r-green-700 border-l-yellow-600 border-b-blue-700  border-t-red-700 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#aaa6c3] mb-1'
            />
          </div>
        </a>
        
      </div>

    </section>
  );
};

export default Hero;

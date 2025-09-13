import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology, i) => (
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} alt={technology.name} className="worksbackground" style={{ background: "rgba(255, 255, 255, 0.1)",  // semi-transparent
    backdropFilter: "blur(10px)",             // blur background
    WebkitBackdropFilter: "blur(10px)",       // Safari support
    borderRadius: "50%",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "20px",
    color: "white"}} 
    
    />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
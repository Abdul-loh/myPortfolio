import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import { StarsCanvas } from "./components/canvas";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast"; // 👈 import

import Top from "./components/Top";

function App() {
  return (
    <BrowserRouter>

      <div className="relative z-0 bg-[#050816]">
        <div
          className="bg-cover bg-no-repeat bg-center min-h-screen"
          style={{ backgroundImage: "url('/src/assets/herobg.png')" }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className="relative z-0 flex">
      
        <Works />
     
        </div> 
        <div className="relative flex">
          <Feedbacks />
          <Top/>
          </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* 👇 Toast notifications container */}
        <Toaster
      
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#151030",
              color: "#fff",
              border: "1px solid #915eff",
              borderRadius: "0.75rem",
              padding: "12px 16px",
              zIndex:"5",
            },
            success: {
              iconTheme: {
                primary: "#915eff",
                secondary: "#151030",
              },
            },
            error: {
              style: {
                border: "1px solid #ff4d4f",
                background: "#1a0f1f",
              },
              iconTheme: {
                primary: "#ff4d4f",
                secondary: "#151030",
              },
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

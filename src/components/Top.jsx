import React, { useEffect, useState } from "react";
import tops from "../assets/top.png";
 import app from "../assets/whatsapp.jpg";
import { Link } from "react-router-dom";

export const Top = () => {
  const [sticky, setSticky] = useState(false);
   const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 5000);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {sticky ? (
        <div className="fixed bottom-5 right-5 z-50">
          <Link to="/" onClick={() => {
            window.scrollTo(0, 0);}}>
            <div className="cursor-pointer">
              <img
                src={tops}
                alt="message"
                className="w-8 h-8 object-contain"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Link>
        </div>
      ) : (
        <div className="">

         <a
        href="https://wa.me/2347015538376" // 👈 replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="rounded-full backdrop-blur-lg bg-blue-700 p-2 cursor-pointer fixed bottom-5 right-5 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{ border: "2px solid #915eff" }}
        >
          <img
            src={app}
            alt="message"
            className="w-8 h-8 object-contain"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </a>

        </div>
      )}
    </>
  );
};

export default Top;

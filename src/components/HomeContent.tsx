"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeContent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Animation runs only once
      });
    }
  }, []);

  return (
    <section
      className="hero h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpeg')",
      }}
    >
      <div className="pl-0 md:pl-16 text-white text-center">
        <h1
          className="text-6xl font-bold drop-shadow-md"
          data-aos="fade-up"
        >
          Welcome to Watch World
        </h1>
        <p className="text-2xl mt-4">
          Your one-stop shop for the best watches
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HomeContent;

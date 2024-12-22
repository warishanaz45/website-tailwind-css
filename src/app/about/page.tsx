import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-gray-700 px-10" style={{ backgroundImage: "url('/about.jpeg')" }}>
      <div className="bg-white bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <p>Welcome to Watch World, where we celebrate the beauty and style of women’s watches. We believe a watch is more than just a way to tell time—it’s a way to express yourself and add elegance to your look.</p>  
<p>Our collection includes a variety of designs, from simple and classic to bold and trendy, so you can find the perfect watch for any occasion. Each piece is carefully chosen for its quality and style, made to make you feel confident and special.</p>  
<p>We’re here to help you find a watch that suits your personality and becomes a part of your everyday life.</p>  

      </div>
    </section>
  );
};

export default About;
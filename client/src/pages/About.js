import React from 'react';
import myImage from '../images/isa.jpg';

function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-white text-4xl font-extrabold mb-4">Hello 👋🏼</h1>
      <img
        src={myImage}
        alt="Avatar"
        className="rounded-full w-32 h-32 object-cover mb-4"
      />
      <p className="text-white text-lg text-center max-w-md">
        As a dedicated web developer, I am committed to crafting exceptional and
        user-centric websites that transcend expectations. Leveraging my
        comprehensive expertise in both front-end and back-end technologies, I am
        driven to engineer flawless online experiences that resonate with users.
        With a relentless pursuit of excellence, I aim to deliver seamless and
        innovative solutions that leave a lasting impact.
      </p>
    </main>
  );
}

export default About;

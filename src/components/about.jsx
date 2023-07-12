import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1b2223] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#0ef6cc]">
              About
            </p>
          </div>
          <div />
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Ikhwan, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
               I am an IT Graduate with a strong passion for creating software that benefits both himself and others.
               As a beginner in the field, I am eager to learn and grow my skills while making a positive impact through my work. 
               With a focus on developing visually appealing and user-friendly interfaces, my aims is to enhance the digital experiences of users. 
               I am actively seeks opportunities to collaborate and engage with fellow developers, understanding the importance of continuous learning and improvement. 
               With a dedicated mindset and a genuine enthusiasm for front-end development, I'm excited to embark on this journey and contribute meaningfully to the development community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

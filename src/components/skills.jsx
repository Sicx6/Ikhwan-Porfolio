import React from 'react';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JavaScript from '../images/javascript.png';
import Flutter from '../images/Flutter.png';
import ReactImg from '../images/react.png';
import FireBase from '../images/firebase.png';
// import GitHub from '../images/github.png';
import Tailwind from '../images/tailwind.png';
import SkillsItems from './skill_item';

const skillItems = [
  {title: 'HTML', image: HTML},
  {title: 'CSS', image: CSS},
  {title: 'Javascript', image: JavaScript},
  {title: 'React', image: ReactImg},
  {title: 'Flutter', image: Flutter},
  {title: 'Tailwind CSS', image: Tailwind},
  {title: 'Firebase', image: FireBase},
];

const Skills = () => {
  return (
    <div name="Skills" className="w-full h-screen bg-[#1b2223]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#0ef6cc]">
            Skills
          </p>
          <p className="py-4">These are the tech I've explored with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillItems.map ((item, index) => (
            <SkillsItems
              key={index}
              skillTitle={item.title}
              skillImage={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

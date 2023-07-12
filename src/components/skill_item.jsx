import React from 'react';

const SkillsItems = ({skillTitle, skillImage}) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={skillImage} alt="HTML icon" />
      <p className="my-4">{skillTitle}</p>
    </div>
  );
};

export default SkillsItems;

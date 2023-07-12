import React from 'react';

const WorkItem = ({title, backgroundImage, workLink, desc}) => {
  return (
    <div
      style={{backgroundImage: `url(${backgroundImage})`}}
      className="shadow-lg shadow-[#3a4f50] group container rounded-md justify-center items-center mx-auto content-div"
    >
      {/* hover effect */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-white tracking-wider p-3 ">
          {title}
        </span>
        <p className="text-l text-white tracking-wider overflow:hidden text line-clamp-4 px-2">
        {desc}
        </p>

        <div className="pt-8 text-center">
          <a href={workLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;

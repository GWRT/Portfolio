import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative flex flex-col items-center group">
        <div className="rotate-on-hover">
            {children}
        </div>
        <div className="absolute bottom-[80%] hidden hover:flex flex-col items-center mb-6 group-hover:flex">
            <span className="relative z-10 py-2 px-5 text-lg leading-none text-white whitespace-no-wrap bg-main-color shadow-lg rounded-md uppercase text-center">{text}</span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-main-color"></div>
        </div>
    </div>
  );
};

export default Tooltip;

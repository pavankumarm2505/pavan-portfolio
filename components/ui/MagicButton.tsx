import React from "react";

const MagicButton = ({
    title,icon, position, handleClick, otherClasses
}:{
    title:string; icon: React.ReactNode, position: string; handleClick?:() => void; otherClasses?:string;
}) => {
  return (
    <button className="p-[3px] relative w-full md:w-60 md:mt-10 " onClick = {handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black-100 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-between">
        {position === 'left' && <span className="mr-1">{icon}</span>}
        {title}
        {position === 'right' && <span className="mr-1">{icon}</span>}
      </div>
    </button>
  );
};

export default MagicButton;

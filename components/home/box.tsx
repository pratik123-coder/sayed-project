import React from "react";

interface BoxProps {
  bgColor: string; // Background color for the box
  title: string; // Title text
  description: string; // Description text
  textColor?: string; // Optional text color
}

const BoxComponent: React.FC<BoxProps> = ({ bgColor, title, description, textColor }) => {
  return (
    <div className={`rounded-xl h-60 flex flex-col items-center justify-center text-center  shadow-xl  transition-transform duration-200 hover:scale-105 p-4 ${bgColor}`}>
      <h2 className={`text-2xl mb-2 font-semibold ${textColor ? textColor : 'text-white'}`}>
        {title}
      </h2>
      <p className={ `${textColor ? textColor : 'm-4 text-white'}`}>
        {description}
      </p>
    </div>
  );
};

export default BoxComponent;
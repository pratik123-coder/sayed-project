
import React from "react";
import BoxComponent from "./box";

const Own = () => {
  const offerings = [
    { title: "Integration", description: "Seamlessly connect diverse systems and processes, enabling unified, efficient operations and enhanced collaboration across platforms.", bgColor: "bg-white" },
    { title: "Infrastructure", description: "Robust infrastructure ensures stability, scalability, and reliability, supporting seamless operations and long-term business growth", bgColor: "bg-white" },
    { title: "Innovation", description: "Innovation drives continuous improvement, fostering creative solutions and competitive advantage through cutting-edge technology and ideas.", bgColor: "bg-white" },
    { title: "Insights", description: "Insight transforms data into actionable intelligence, enabling informed decisions and strategic planning for business success.", bgColor: "bg-white" },
    { title: "Insights", description: "Insight transforms data into actionable intelligence, enabling informed decisions and strategic planning for business success.", bgColor: "bg-white" },
    { title: "Insights", description: "Insight transforms data into actionable intelligence, enabling informed decisions and strategic planning for business success.", bgColor: "bg-white" },
  ];

  return (
    <div
      className="p-12 bg-cover bg-center bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/i7jviofvnvflhdx3n5af)]"
    >
      <div className="text-center text-white font-semibold text-3xl mb-8">
        Make RangeQI Your Own
        <div className="text-center text-white font-medium text-xl">Leverage our ecosystem to build and manage faster with diverse product offerings tailored to your use cases.</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((offering, index) => (
          <BoxComponent
            key={index}
            title={offering.title}
            description={offering.description}
            bgColor={offering.bgColor}
            textColor="text-black"
          />
        ))}
      </div>
    </div>
  );
};

export default Own;

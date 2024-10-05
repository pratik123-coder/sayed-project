import React from "react";
import BoxComponent from "../home/box";



const Culture = () => {
  const features = [
    { title: "Customer Obsession", description: "Track real-time business updates, gain clarity, and identify improvement areas with our software", bgColor: "bg-gray-950" },
    { title: "Invent & Simplify", description: "Operable on multiple devices with seamless integration for effortless use across all your daily tools.", bgColor: "bg-gray-950" },
    { title: "Earn Trust", description: "Centralise user data management and streamline analysis with our software, eliminating the need for tedious data reviews", bgColor: "bg-gray-950" },
    { title: "Ownership", description: "Data security is our priority because we understand the importance of your business's privacy. We've simplified it for you.", bgColor: "bg-gray-950" },
    { title: "Think Big", description: "Save on costs by automating and digitizing your business. Say goodbye to manual methods.", bgColor: "bg-gray-950" },
    { title: "Bias for Action", description: "Efficiently track and manage inventory and assets, optimising demand and supply with our software.", bgColor: "bg-gray-950" }
  ];

  return (
    <div className="px-10 py-16">
      <div className="text-center text-5xl font-semibold pb-10">Our Six-point Culture</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

        {features.map((feature, index) => (
          <BoxComponent
            key={index}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Culture;

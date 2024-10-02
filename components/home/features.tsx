import React from "react";
import BoxComponent from "./box";


const FeaturesSection = () => {
  const features = [
    { title: "Real-Time Insights", description: "Track real-time business updates, gain clarity, and identify improvement areas with our software", bgColor: "bg-gray-950" },
    { title: "Multi-Device Access", description: "Operable on multiple devices with seamless integration for effortless use across all your daily tools.", bgColor: "bg-gray-950" },
    { title: "Unified User Management", description: "Centralise user data management and streamline analysis with our software, eliminating the need for tedious data reviews.", bgColor: "bg-gray-950" },
    { title: "Secure Privacy", description: "Data security is our priority because we understand the importance of your business's privacy. We've simplified it for you.", bgColor: "bg-gray-950" },
    { title: "Automated Savings", description: "Save on costs by automating and digitizing your business. Say goodbye to manual methods.", bgColor: "bg-gray-950" },
    { title: "Operational Oversight", description: "Efficiently track and manage inventory and assets, optimising demand and supply with our software.", bgColor: "bg-gray-950" }
  ];

  return (
    <div className="p-16">
      <div className="text-center text-5xl font-semibold pb-10">Features</div>
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

export default FeaturesSection;

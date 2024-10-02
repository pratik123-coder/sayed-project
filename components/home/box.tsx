
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface BoxProps {
  bgColor: string;
  title: string;
  description: string;
  textColor?: string;
}

const BoxComponent: React.FC<BoxProps> = ({ bgColor, title, description,textColor }) => {
  return (
    <Card className={`rounded-xl h-60 flex items-center justify-center text-center ${bgColor}`}>
      <CardHeader>
        <CardTitle className={`text-xl mb-6 font-semibold ${textColor ? textColor : 'text-white'}`}>{title}</CardTitle>
        <CardDescription className={`${textColor ? textColor : 'text-white'}`}>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BoxComponent;

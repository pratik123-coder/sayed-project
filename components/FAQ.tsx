"use client"

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "How does RangeQI work?", answer: "RangeQI is like your business’s HQ. It brings all your communication, operations and business to get in one easy to use place. It helps you work better together and get stuff done faster." },
  { question: "Is my data secure?", answer: "Rest assured, we take your data security, seriously. Our robust measures ensure that your information is kept safe and secure at all times." },
  { question: "Does RangeQI work well for large teams?", answer: "- Certainly! RangeQI is designed to scale effortlessly, making it ideal for large teams and businesses. It’s flexible feature and intuitive interface and ensure smooth collaboration and efficient business management, no matter the size of the organization." },
  { question: "How do I create a new account?", answer: "creating a new account with RangeQI for the waitlist. Follow the prompts and you will end up running in 48 hours." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:max-w-4xl mx-auto py-10 px-4 ">
      <h2 className="text-5xl font-bold lg:mb-4 mb-14">Frequently asked questions</h2>
      <p className="mb-14 lg:mb-8">
        Have questions? We’ve got answers. For everything else email us on <a href="mailto:hi@email.com" className="text-blue-500">queries@rangeqi.com</a>.
      </p>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h3 className="text-xl font-medium">{item.question}</h3>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

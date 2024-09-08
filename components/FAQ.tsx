<<<<<<< HEAD
"use client"

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "How does RangeQI ensure data security?", answer: "RangeQI prioritises data security with advanced encryption, secure access controls, and regular security audits to protect your business information and ensure compliance with industry standards." },
  { question: "What kind of support can we expect from RangeQI?", answer: "RangeQI offers 24/7 support through email, and phone, ensuring that you receive prompt assistance and solutions to any issues you may encounter." },
  { question: "How long is the validity of RangeQI’s solutions?", answer: "RangeQI’s solutions are designed with limitless validity, meaning they are scalable and adaptable to meet the evolving needs of your business over time." },
  { question: "How does RangeQI address specific needs?", answer: "RangeQI’s software is already developed with built-in insights tailored for you, ensuring comprehensive protection and addressing your specific requirements effectively" }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:max-w-4xl mx-auto py-10 px-4 pb-10">
      <h2 className="text-4xl lg:text-5xl font-bold lg:mb-4 mb-14">Frequently asked questions</h2>
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
=======
"use client"

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "How does RangeQI ensure data security?", answer: "RangeQI prioritises data security with advanced encryption, secure access controls, and regular security audits to protect your business information and ensure compliance with industry standards." },
  { question: "What kind of support can we expect from RangeQI?", answer: "RangeQI offers 24/7 support through email, and phone, ensuring that you receive prompt assistance and solutions to any issues you may encounter." },
  { question: "How long is the validity of RangeQI’s solutions?", answer: "RangeQI’s solutions are designed with limitless validity, meaning they are scalable and adaptable to meet the evolving needs of your business over time." },
  { question: "How does RangeQI address specific needs?", answer: "RangeQI’s software is already developed with built-in insights tailored for you, ensuring comprehensive protection and addressing your specific requirements effectively" }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:max-w-4xl mx-auto py-10 px-4 pb-10">
      <h2 className="text-4xl lg:text-5xl font-bold lg:mb-4 mb-14">Frequently asked questions</h2>
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
>>>>>>> 437d9b602aef33381912a232d49cdf9aea4fd8ad

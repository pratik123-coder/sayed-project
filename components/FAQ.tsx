"use client"

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "How does Wedge work?", answer: "Wedge works by..." },
  { question: "Is my data secure?", answer: "Yes, your data is secure..." },
  { question: "Does Wedge work well for large teams?", answer: "Wedge is designed to scale with your team..." },
  { question: "How do I create a new account?", answer: "To create a new account, you need to..." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-5xl font-bold mb-4">Frequently asked questions</h2>
      <p className="mb-8">
        Have questions? We’ve got answers. For everything else email us on <a href="mailto:hi@email.com" className="text-blue-500">hi@email.com</a>.
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

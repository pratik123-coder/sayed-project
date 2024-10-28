"use client";
import React, { useState } from "react";

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: " How long is the validity of the solutions?",
    answer:
      "Our solutions are designed with limitless validity, meaning they are scalable and adaptable to meet the evolving needs of your business over time.",
  },
  {
    id: 2,
    question: "How do we address specific needs?",
    answer:
      "Our softwares are already developed with built-in insights tailored for you, ensuring comprehensive protection and addressing your specific requirements effectively.",
  },
  {
    id: 3,
    question: "How do we ensure data security?",
    answer:
      "Our Organisation prioritises data security with advanced encryption, secure access controls, and regular security audits to protect your business information and ensure compliance with industry standards.",
  },
  {
    id: 4,
    question: " What kind of support can you expect from us? ",
    answer:
      "We offer 24/7 support through email, and phone, ensuring that you receive prompt assistance and solutions to any issues you may encounter.",
  },
];
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[]; // Define the prop type
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-black rounded-md text-white p-4 cursor-pointer"
        >
          <div
            className="relative flex items-center justify-between py-2"
            onClick={() => handleToggle(index)}
          >
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#EF7420] to-transparent"></div>

            <div className="flex items-center gap-x-2">
              <div className="flex items-center justify-center h-10 w-10 bg-gray-900 rounded-lg ">
                {item.id}
              </div>
              <p>{item.question}</p>
            </div>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>

          {activeIndex === index && (
            <p className="mt-4 text-gray-400">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-10 rounded-t-2xl">
      <div className="container mx-auto px-4">
        {/* FAQ Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col items-start justify-center gap-y-2">
            <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
            <p className="text-md text-gray-400">
              Have questions? We’ve got answers. For everything else email us on{" "}
              <a
                href="mailto:contact@greyplatforms.com"
                className="underline hover:text-gray-200"
              >
                contact@greyplatforms.com
              </a>
              .
            </p>
          </div>
          <a
            href="/contacts"
            className="bg-cover p-2 bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/jvhnsqsbivyn1suaafwx)]"
          >
            Ask a Question
          </a>
        </div>

        {/* FAQ List with Two FAQs on Left and Two on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: First Two FAQ Items */}
          <Accordion items={faqItems.slice(0, 2)} />

          {/* Right Column: Last Two FAQ Items */}
          <Accordion items={faqItems.slice(2, 4)} />
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul>
              <a href="/products">
                <li>OneTKT</li>
              </a>
              <li>Coming Soon</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul>
              <li>Privacy Policies</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul>
              <a href="/contacts">
                <li>Contact Us</li>
              </a>
              <a href="/raisequery">
                <li>Raise your query</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Team</h4>
            <ul>
              <li>Phone: +91-8093572614</li>
              <li>Phone: +91-9937943775</li>
              <a
                href="mailto:contact@greyplatforms.com"
              >
                Email: contact@greyplatforms.com
              </a>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full flex items-center justify-between text-left mt-10 text-sm">
          <p className="">
            Grey Platforms Private Limited | CIN: U62099OD2024PTC047119 | PAN:
            AALCG5647D | TAN: BBNG03474C
            <br /> Reg Address: 03-B (2BR), BLOCK-2, KRISHNA GARDEN
            ANNEX,PHASE2, Khandagiri, Bhubaneswar, Khorda- 751030, Orissa
          </p>
          <div className="flex flex-row items-center space-x-8">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

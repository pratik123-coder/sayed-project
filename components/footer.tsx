import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="container mx-auto px-4">
        {/* FAQ Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col items-start justify-center gap-y-2">
            <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
            <p className="text-md text-gray-400">
              Have questions? We’ve got answers. For everything else email us on queries@rangeqi.com.
            </p>
          </div>
          <Button className="bg-[url(https://res.cloudinary.com/dmp5bgayc/image/upload/f_auto,q_auto/jvhnsqsbivyn1suaafwx)] ">Ask a Question</Button>
        </div>

        {/* FAQ List with Two FAQs on Left and Two on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: First Two FAQ Items */}
          <div>
            <Accordion type="single" collapsible>
              {faqItems.slice(0, 2).map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>
                    <div className="flex items-center justify-center gap-x-2">
                      <div className="flex items-center justify-center h-10 w-10 bg-gray-900 rounded-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <p>{item.question}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column: Last Two FAQ Items */}
          <div>
            <Accordion type="single" collapsible>
              {faqItems.slice(2, 4).map((item, index) => (
                <AccordionItem key={index + 2} value={`item-${index + 3}`}>
                  <AccordionTrigger>
                    <div className="flex items-center justify-center gap-x-2">
                      <div className="flex items-center justify-center h-10 w-10 bg-gray-900 rounded-lg">
                        {String(index + 3).padStart(2, '0')}
                      </div>
                      <p>{item.question}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul>
              <li>OneTKT</li>
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
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Team</h4>
            <ul>
              <li>Phone: +91-9876543210</li>
              <li>Phone: +91-9123456789</li>
              <li>Email: queries@rangeqi.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 text-sm">
          <p>© 2024 RangeQI Pvt. Ltd. All rights reserved. | Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

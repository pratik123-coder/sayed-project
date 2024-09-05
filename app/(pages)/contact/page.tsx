import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import Image from "next/image";
import Background from "./Assets/contactBackground.png"
import Link from "next/link";
const ContactPage = () => {
  return (
    <div className="py-40 flex flex-col items-center text-center space-y-16">
      <div className="space-y-8">
        <h1 className="text-[2.5rem] leading-tight font-medium">
          We would love
          <br />
          to hear from you
        </h1>
        <p>
          Have questions or just want to say hi? Send us a message below
          <br /> or you can email us on{" "}
          <Link
            href="https://queries@rangeqi.com"
            className="underline hover:text-gray-500 ease-in-out duration-300"
          >
            queries@rangeqi.com
          </Link>
          .
        </p>
      </div>
      <div className={`bg-[url("https://res.cloudinary.com/de7hlbfce/image/upload/v1725378418/RangeQI/xzamhml0e8tyxrebyi7v.png")] bg-cover bg-no-repeat lg:w-3/5 lg:p-32 p-8 lg:mx-0 mx-8 rounded-2xl space-y-4`}>
        <div className="flex flex-row space-x-4">
          <Input placeholder="Your name" />
          <Input placeholder="Your email" />
        </div>
        <Textarea placeholder="Your message" className="h-28" />
        <button className="bg-[#463fa6] text-white py-2 px-4 rounded-lg w-full text-[0.8rem] font-bold">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactPage;

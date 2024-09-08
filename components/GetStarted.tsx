import Link from "next/link";
import React from "react";

type ContentProps = {
  title: string;
  link: string;
};

const FooterSection = ({
  header,
  content,
}: {
  header: string;
  content: ContentProps[];
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="font-semibold text-[1.2rem]">{header}</h1>
      <div className="flex flex-col space-y-2">
        {content.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const ReadyToGetStarted: React.FC = () => {
  return (
    <footer className="bg-purple-100 p-12 lg:grid lg:grid-cols-5 flex flex-col lg:gap-4 gap-16">
      <div className="flex flex-col space-y-4 text-left">
        <p>
          Copyright © 2024 RangeQI by
          <br />
          <strong>Grey Technologies India Private Limited</strong>
          <br />
          CIN: U72900OR2022PTC039033
          <br />
          GST: 21AAJCT2090F1ZM
          <br />
          Address: Block II, Krishna Garden, Jagamara, Bhubaneswar
        </p>
      </div>

      <FooterSection
        header="Products"
        content={[
          { title: "OneTKT", link: "/" },
          { title: "Coming Soon", link: "/" },
        ]}
      />

      <FooterSection
        header="Company"
        content={[
          { title: "About us", link: "/about" },
          { title: "Contact us", link: "/contact" },
          { title: "Our Values", link: "/values" },
          { title: "Blogs", link: "/blogs" },
          { title: "Careers", link: "/careers" },
        ]}
      />

      <FooterSection
        header="Resources"
        content={[
          { title: "Privacy Policy", link: "/privacy-policy" },
          { title: "Terms & Conditions", link: "/terms-and-conditions" },
          { title: "Refund Policy", link: "/refund-policy" },
          { title: "Cookies", link: "/cookies" },
        ]}
      />

      <div className="flex flex-col text-left">
        <h1 className="font-semibold text-[1.2rem]">Contact Team</h1>
        <p className="">
          Phone: <br />
          +91-8093572614
          <br />
          +91-99379 43775
        </p>
        <h1 className="font-semibold">
          Email:{" "}
          <Link
            href="queries@rangeqi.com"
            className="underline underline-offset-2 text-sky-600"
          >
            {" "}
            queries@rangeqi.com
          </Link>
        </h1>
      </div>
    </footer>
  );
};

export default ReadyToGetStarted;

import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import ReadyToGetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Recognized from "@/components/Recognized";
import Own from "@/components/Own";
import Roles from "@/components/Roles";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full ">
      <Hero />
      <Features />
      <Recognized />
      <Own />
      {/* <Members />
      <OurProduct />
      <AdminTask />
      <GrowBusiness />
      <TeamManagement /> */}
      <Roles />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}


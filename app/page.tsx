import AdminTask from "@/components/AdminTask";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ReadyToGetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import { InfiniteMovingCardsHome } from "@/components/InfiniteCards";
import TeamManagement from "@/components/Team";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full ">
      <Hero />
      <InfiniteMovingCardsHome />
      <Features />
      <AdminTask />
      <TeamManagement />
      <FAQ />
      <ReadyToGetStarted />
      <Footer />
    </div>
  );
}

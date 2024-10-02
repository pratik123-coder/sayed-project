import { InfiniteMovingCardsDemo } from "@/components/home/cards";
import FeaturesSection from "@/components/home/features";
import Hero from "@/components/home/hero";
import Own from "@/components/home/own";
import Recognized from "@/components/home/recognised";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <div className="squares-background">
      <Hero />
      <InfiniteMovingCardsDemo />
      <Recognized />
      <FeaturesSection />
      <Own />
      <Work />
    </div>
  );
}

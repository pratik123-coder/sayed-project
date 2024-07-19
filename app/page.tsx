import Hero from "@/components/Hero";
import { InfiniteMovingCardsHome } from "@/components/InfiniteCards";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full ">
      <Hero />
      <InfiniteMovingCardsHome />
    </div>
  );
}

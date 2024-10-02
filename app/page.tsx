import { InfiniteMovingCardsDemo } from "@/components/home/cards";
import Hero from "@/components/home/hero";
import Recognized from "@/components/home/recognised";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfiniteMovingCardsDemo />
      <Recognized />
    </div>
  );
}

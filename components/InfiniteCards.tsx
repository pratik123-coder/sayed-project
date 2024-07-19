"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsHome() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <p className="text-xl text-medium pb-5">Trusted by 8,000 leading companies</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

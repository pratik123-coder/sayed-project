import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const reviews = [
  {
    name: "Language Flexibility",
    username: "@jack",
  },
  {
    name: "24/7 support",
    username: "@jill",
  },
  {
    name: "Real-Time analytics",
    username: "@john",
  },
  {
    name: "Unified Dashboard",
    username: "@jane",
  },
  {
    name: "Top notch security",
    username: "@jenny",
  },
  {
    name: "Zero set fees",
    username: "@james",
  },
  {
    name: "Insight focused",
    username: "1",
  },
  {
    name: "Customer first",
    username: "2",
  },
];

const firstRow = reviews.slice(0, reviews.length);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
}: {
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl p-4 px-8 mx-8 transition duration-500 ease-in-out",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-4">
      <img className="rounded-full" width="32" height="32" alt="" src="https://res.cloudinary.com/de7hlbfce/image/upload/f_auto,q_auto/v1/icons/icolt56h4gey4j6ito59" />
        <div className="flex flex-col">
          <h1 className="text-[1.5rem] font-medium dark:text-white text-nowrap">
            {name}
          </h1>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border py-8 bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} name={review.name} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

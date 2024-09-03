import HoverImage from "./HoverImage";

const Roles = () => {
  return ( 
    <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-x-20 gap-y-16 pb-24 p-20">
      <HoverImage
        src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/lworas63vrgzp1cilxsa"
        text="Role of Ai/ML in Small And Medium Business"
        alt="Hover Text"
      />
      <HoverImage
        src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/qzoetosi8iaaswbprbca"
        text="Software Suites beneficial for Small and Medium Business"
        alt="Hover Text"
      />
      <HoverImage
        src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/tkfwptc7drnjq2j5lfzw"
        text="Role of Mastering Omni-Channel Customer Experience"
        alt="Hover Text"
      />

    </div>
   );
}
 
export default Roles;
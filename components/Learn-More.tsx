const LearnMoreButton = () => {
  return ( 
    <button
  className="overflow-hidden relative w-32 p-2 h-12 bg-white text-violet-500 border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Learn
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-violet-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-violet-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10 text-white" 
    >More!</span
  >
</button>

   );
}
 
export default LearnMoreButton;
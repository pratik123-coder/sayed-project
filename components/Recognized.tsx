import Image from "next/image";

const Recognized = () => {
  return ( 
    <div className="px-10 p-16">
      <div className="text-center text-5xl font-semibold pb-10">
        We are Recognised
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-36 gap-y-16 ">
        <Image src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/ywxgnv1ys9zdvlwxd1yq" alt="forbes" width={350} height={350}  />
        <Image src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/yymgcup1iwsd2qr5ylig" alt="techcrunch" width={200} height={200} />
        <Image src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/qxdftevislfuefyanghx" alt="nytimes" width={200} height={200} />
        <Image src="https://res.cloudinary.com/dajq9hekb/image/upload/f_auto,q_auto/jmo86ecomhhefllnrpva" alt="forbes" width={200} height={200} />
      </div>
    </div>
   );
}
 
export default Recognized;



import Image from "next/image";
import GettingStartedButton from "./Getting-Started";
import LearnMoreButton from "./Learn-More";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import image from "../public/4.jpg";
import image2 from "../public/7.png";


const Hero = () => {
  return (

        <div className="h-full flex flex-col items-center justify center p-10 bg-gradient-to-b from-slate-50 to-violet-200 pt-56">
          <h1 className="font-medium text-center text-[4.5rem] tracking-tight leading-[4.7rem] pb-10">
            Streamline your <br /> growing business
          </h1>
          <p className="text-center text-xl text-slate-700 font-medium">
            Say goodbye to admin headaches and say hello to efficiency.<br />Manage your business in minutes, track business metrics<br />and manage customer performance. We’ve got you covered.
          </p>
          <div className="flex items-center justify-center gap-x-6 pt-8">
          <a
        href="#"
        className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700"
      >
        Join Waitlist →
      </a>
          </div>
          <div className="hidden p-20 space-x-20 lg:flex items-center justify-center w-full ">
            {/* <div className="flex flex-col space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
              </Card>
              <Card className="rounded-xl bg-transparent">
                <CardHeader>
                <Image src={image2} height={300} width={300} alt="image" className="" />
                </CardHeader> 
              </Card>
            </div>
            <div className="pt-16 ">
              <Card className="rounded-xl bg-transparent">
                <CardHeader>
                <Image src={image} height={500} width={500} alt="image" className="" />
                </CardHeader> 
              </Card>
            </div>
            <div className="pt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div> */}
            <Image src={image2} height={700} width={1400} alt="image" className=" max-w-full" />
          </div>
        </div>


  );
}

export default Hero;
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
import image from "../public/image.jpg";


const Hero = () => {
  return (

        <div className="h-full flex flex-col items-center justify center  bg-gradient-to-b from-slate-50 to-violet-200 mt-32">
          <h1 className="font-medium text-center text-[4.5rem] tracking-tight leading-[4.7rem] pb-10">
            Streamline your <br /> growing startup
          </h1>
          <p className="text-center text-xl text-slate-700 font-medium">
            Say goodbye to admin headaches and say hello to efficiency.<br />Onboard your employees in minutes, track company projects,<br />and manage team performance. We’ve got you covered.
          </p>
          <div className="flex items-center justify-center gap-x-6 pt-8">
            <GettingStartedButton />
            <LearnMoreButton />
          </div>
          <div className="p-20 space-x-20 flex items-center justify-center">
            <div className="flex flex-col space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>

              </Card>
            </div>
            <div className="pt-16">
              <Card>
                <CardHeader>
                <Image src={image} height={300} width={300} alt="image" className="h-12 w-18" />
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
            </div>
          </div>
        </div>


  );
}

export default Hero;
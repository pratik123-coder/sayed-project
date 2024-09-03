import Collaboration from "@/components/about/Collaboration";
import Mission from "@/components/about/Mission";
import SliceInNumbers from "@/components/about/Slice";
import Teams from "@/components/about/Teams";
import Values from "@/components/about/Values";
import ComingSoon from "@/components/ComingSoon";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const About = () => {
  return ( 
    <div className="max-h-full max-w-full  gap-y-10">
      {/* <Mission />
      <Values />
      <Collaboration />
      <SliceInNumbers />
      <Teams />
      <FAQ />
      <Footer /> */}
      <ComingSoon />
    </div>
   );
}
 
export default About;
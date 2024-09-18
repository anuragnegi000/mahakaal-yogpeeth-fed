import Navbar from "../../MainComponents/Navbar";
import { OnePagerSection, TeachersTestimonials, TypewriterHeading } from "./MainAbout";
import LogoHeading from "../../Pages/LogoHeading";
import Content from "./TextArea";
import FAQSection from "../../Pages/Parts/FAQ";
import Footer from "../../MainComponents/Footer";
import WhatsappButton from "../Contact/WhatsappButton";
import Teachers from "../TeachersData";
const OurTeacher = () => {
  return (
    <>
      
      <div className="gap-4 flex flex-col">
        <div className="m-12">
          <Navbar />
        </div>
        <LogoHeading heading={"Our Experienced Yoga Teachers"} />
        
    

        <Content />
        {/* <OnePagerSection /> */}
        {/* <TeachersTestimonials /> */}
        <Teachers/>
        <WhatsappButton/>
        <FAQSection />
        <Footer />
      </div>

    </>

  )
}

export default OurTeacher;



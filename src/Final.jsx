import ShuffleHero from "./Design/SuffleHero";
import { TDmobile } from "./Design/TDmobile";
import ContentArea from "./Pages/Parts/ContentArea";
import TextArea from "./Pages/Parts/TextArea";
import RunningCards from "./Pages/Parts/RunningCards";
import Features from "./Pages/Parts/Features";
import LogoHeading from "./Pages/LogoHeading";
import Pricing from "./MainComponents/Pricing";
import FAQ from "./Pages/Parts/FAQ";
import InfScroll from "./Pages/Parts/InfScroll";
import { FoldBlog, TestimonialScroller } from "./Components/YogaTTC/TTCTwo";
import WhatsappButton from "./Components/Contact/WhatsappButton";
import Navbar from "./MainComponents/Navbar";
import Footer from "./MainComponents/Footer";
import { Content } from "./Pages/Parts/ImgContent";
// import { FocusCardsDemo } from "./Components/TeachersData";

const Final = () => {
  return (
    <div>
      <defs>
        <pattern
          id="e813992c-7d03-4cc4-a2bd-151760b470a0"
          width={700}
          height={700}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <Navbar />
      <ShuffleHero />
      {/* <GithubGlobe /> */}
      
      <TextArea />
      <TDmobile />
      <ContentArea />
      <Content />
      <RunningCards />
      <Features />
      <LogoHeading heading={"PRICING FOR YOGA TTC"} />
      <Pricing />
      <FAQ />
      {/* <HoverImageLinks /> */}
      <InfScroll />
      {/* <FocusCardsDemo/> */}
      <FoldBlog />
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Final;

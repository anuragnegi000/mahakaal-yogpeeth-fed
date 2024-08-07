// create the dummy paragraph for passing the component using array

import Navbar from "../../MainComponents/Navbar";
import { OnePagerSection, TeachersTestimonials } from "./MainAbout";
import LogoHeading from "../../Pages/LogoHeading";
import Content from "./TextArea";
import FAQSection from "../../Pages/Parts/FAQ";
import Footer from "../../MainComponents/Footer";

import "./ScrollImage.css";
const Food = () => {
  return (
    <>
      <div className="gap-4 flex flex-col">
        <div className="m-12">
          <Navbar />
        </div>
        <LogoHeading heading={"Food and Accomodation"} />

        <FuzzyHeadings heading={"Accommodation"} typography={""} />
        <FuzzyHeadings heading={"Food"} typography={""} />
        <FuzzyHeadings heading={"Home Stay "} typography={" "} />

        {/*  Hero secction with iamge */}

        {/*  Tetcher Heading */}

        <Content />
        {/* <OnePagerSection /> */}
        {/* <TeachersTestimonials /> */}
        
        <FAQSection />
        <TestimonialScroller/>
        <FoldBlog/>
        <WhatsappButton/>
        <Footer />
      </div>
    </>
  );
};
export default Food;

// heading   image conttent

export const FuzzyHeadings = ({ heading, typography }) => {
  return (
    <>
      <HeadCon
        heading={heading}
        typography={typography}
        TypingParagraph={typography}
      />
    </>
  );
};

const HeadCon = ({ heading, TypingParagraph }) => {
  return (
    <section className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div>
        <h1 className="text-4xl text-center font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
          {heading}{" "}
        </h1>
        <span className="flex ">
          <ImageCarousel />
        </span>
        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
          Improving their skills to next levels with the purpose of spreading
          the awareness and understanding of yoga to the world-wide. Our mission
          is to get rid of nervousness, depression, anxiety from the society as
          well. Furthermore, we try to focus on family problems and remedial
          personal by practicing a modest, accurate, and traditional form of
          multi-style yoga poses. Our yoga teacher and instructor certification
          training in Rishikesh, India will give you a chance to experience the
          serene location also known as the gateway of Himalayas. Located in
          Rishikesh, the yoga capital of the world, and nestled in the foothills
          of the Himalayas where the Ganga River flows, makes this a truly
          unique place to practice yoga. We at Mira Yogashala, are committed to
          educational yoga teaching standards around the world with our 200 Hour
          Yoga TTC, 300 Hour Yoga TTC and 500-hour yoga TTC programs in
          Rishikesh. Our Yoga TTC in Rishikesh isn’t just for aspiring yogis,
          but for anyone who wants to deepen their personal practice or skill
          and gain improvement in a better way of understanding of yoga
          philosophy and its origins. We deal with an ideal spiritual and
          healthy environment for Yoga teacher training. Whatever your reasons
          for embarking on this journey, we are here to guide you. You will
          explore the depth of yoga beyond the physical practice and learn about
          the origin of yoga, philosophy, anatomy, and so much more. Yoga
          Teacher Training is the beginning of a life-transforming journey
          Through yoga or a new chapter in your life. It is not the final
          objective or goal in your life, but a beautiful step towards life on
          the path of Yoga. When you leave Mira Yogashala, you will have
          expanded the range of your skills, deepened your knowledge, and gained
          more confidence in your teaching abilities.
        </p>
      </div>
    </section>
  );
};

export { HeadCon };

export const ImageCarousel = () => {
  return (
    <div className="wrapper">
      <div className="item item1">
        <img src={Gallery1} alt="" />
      </div>
      <div className="item item2">
        <img src={Gallery2} alt="" />
      </div>
      <div className="item item3">
        <img src={Gallery3} alt="" />
      </div>
      <div className="item item4">
        <img src={Gallery4} alt="" />
      </div>
      <div className="item item5">
        <img src={Gallery5} alt="" />
      </div>
      <div className="item item6">
        <img src={Gallery6} alt="" />
      </div>
      <div className="item item7">
        <img src={Gallery7} alt="" />
      </div>
      <div className="item item8">
        <img src={Gallery8} alt="" />
      </div>
    </div>
  );
};

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FoldBlog, TestimonialScroller } from "../YogaTTC/TTCTwo";
import WhatsappButton from "../Contact/WhatsappButton";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8 } from "../../utils";

// Fix for default marker icon issue

const locations = [
  {
    lat: 51.505,
    lng: -0.09,
    image: "https://source.unsplash.com/random/200x200?sig=1",
    description: "Image 1 Description",
  },
  {
    lat: 51.515,
    lng: -0.1,
    image: "https://source.unsplash.com/random/200x200?sig=2",
    description: "Image 2 Description",
  },
  {
    lat: 51.525,
    lng: -0.11,
    image: "https://source.unsplash.com/random/200x200?sig=3",
    description: "Image 3 Description",
  },
  {
    lat: 51.535,
    lng: -0.12,
    image: "https://source.unsplash.com/random/200x200?sig=4",
    description: "Image 4 Description",
  },
  {
    lat: 51.545,
    lng: -0.13,
    image: "https://source.unsplash.com/random/200x200?sig=5",
    description: "Image 5 Description",
  },
  {
    lat: 51.555,
    lng: -0.14,
    image: "https://source.unsplash.com/random/200x200?sig=6",
    description: "Image 6 Description",
  },
  {
    lat: 51.565,
    lng: -0.15,
    image: "https://source.unsplash.com/random/200x200?sig=7",
    description: "Image 7 Description",
  },
  {
    lat: 51.575,
    lng: -0.16,
    image: "https://source.unsplash.com/random/200x200?sig=8",
    description: "Image 8 Description",
  },
];

export const MapLocation = () => {
  return (
    <div className="h-screen w-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>
              <img
                src={location.image}
                alt={location.description}
                className="w-32 h-32 object-cover"
              />
              <p>{location.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

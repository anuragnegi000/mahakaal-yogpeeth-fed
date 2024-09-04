import Navbar from "../../MainComponents/Navbar";
import PriceGrid from "../../Pages/Parts/PriceGrid";
import Footer from "../../MainComponents/Footer";
import LogoHeading from "../../Pages/LogoHeading";
import { Hero } from "../../Pages/Parts/Hero";
import Content from "../AboutUs/TextArea";
import { Typewriter } from "react-simple-typewriter";
import { CiClock2 } from "react-icons/ci";
import { GrYoga } from "react-icons/gr";
import { useEffect, useRef } from "react";
import ToggleButton from "../../Components/Button/ToggleButton";

const TTCOne = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mt-28">
        <LogoHeading heading="Upcoming classes" />
      </div>

      <Content />
      <TypewriterHeading />
      <YoutubeGrids />
      <div className="mt-10">
      <LogoHeading heading={"Accomodation"}/>
      </div>
      <ImageCarousel/>
      <OnePagerSection />
      <DailySchedule />
      
      <FAQSection />
      <PriceGrid heading={"Dormitory price (Bunkbed)"} inr={"7999rs"} usd={"200$"} sub1={"Indian"} sub2={"Foreigners"}/>
      <PriceGrid heading={"Normal room for Indians"} inr={"12000rs"} usd={"18999rs"} sub1={"Shared"} sub2={"Private"}/>
      <PriceGrid heading={"Normal room for Foreigners"} inr={"399$"} usd={"499$"} sub1={"Shared"} sub2={"Private"}/>
      <div className="md:p-10 flex justify-center items-center">
  <Included />
</div>

<div className="md:px-80 px-4 flex justify-center items-center">
  <NotIncluded />
</div>

      <TestimonialScroller />
      <FoldBlog />
      <WhatsappButton/>

      <Footer />
    </div>
  );
};

export default TTCOne;

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    name: "Paul Starr",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    name: "Alice Johnson",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    name: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
];


const TestimonialScroller = () => {
  const containerStyle = {
    overflow: "hidden",
    width: "100%",
    position: "relative",
  };

  const scrollerStyle = {
    display: "flex",
    width: "calc(100% * 2)",
  };

  const cardStyle = {
    flex: "1 0 33.33%",
    boxSizing: "border-box",
    padding: "20px",
    background: "#f0f0f0",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200x",
    height: "300px",
  };

  const cardStyleMobile = {
    ...cardStyle,
    flex: "1 0 100%",
  };

  const isMobile = window.innerWidth <= 768;
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>
        <div style={containerStyle} className="mt-8">
          <motion.div
            style={scrollerStyle}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.id}
                style={isMobile ? cardStyleMobile : cardStyle}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{testimonial.text}</p>
              </blockquote>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const ButtonWrapper = () => {
  return (
    <div className="flex min-h-[100px] items-center justify-center bg-gray-100 px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-52 max-w-xs overflow-hidden rounded-lg bg-indigo-600 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        View more
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};




const ImageCarousel = () => {
  return (
    <div className="text-center bg-gray-100">
      
      <div className="wrapper flex overflow-x-scroll scrollbar-hide">
        <div className="item item1 mx-2">
          <img src={Gallery1} alt="" className="rounded-lg" />
        </div>
        <div className="item item2 mx-2">
          <img src={Gallery2} alt="" className="rounded-lg" />
        </div>
        <div className="item item3 mx-2">
          <img src={Gallery3} alt="" className="rounded-lg" />
        </div>
        <div className="item item4 mx-2">
          <img src={Gallery4} alt="" className="rounded-lg" />
        </div>
        <div className="item item5 mx-2">
          <img src={Gallery5} alt="" className="rounded-lg" />
        </div>
        <div className="item item6 mx-2">
          <img src={Gallery6} alt="" className="rounded-lg" />
        </div>
        <div className="item item7 mx-2">
          <img src={Gallery7} alt="" className="rounded-lg" />
        </div>
        <div className="item item8 mx-2">
          <img src={Gallery8} alt="" className="rounded-lg" />
        </div>
      </div>
      <p className="mt-6 text-gray-700 px-4 md:px-20">
        Our yoga school is situated in the most beautiful and colorful root valleys of Himalayan mountain ranges. It is the most eco-friendly and atmospheric place to learn the art of yogic science. The school offers the best accommodation to the students. We provide neat and clean rooms with attached bathrooms to our students. Each room is airy, well-ventilated, and packed with all the necessary facilities. The school also makes sure that none of the students face any problems and each student has a comfortable stay.
      </p>
      <ButtonWrapper/>
    </div>
  );
};

const DailySchedule = () => {
  const schedule = [
    { time: "6:30 - 7:00am", activity: "Pranayama" },
    { time: "7:00 - 8:30am", activity: "Ashtanga Yoga (Mysore & Led class)" },
    { time: "8:30 - 9:30am", activity: "Breakfast" },
    { time: "9:30 - 10:00am", activity: "Break Time" },
    { time: "10:00 - 11:30am", activity: "Yoga Anatomy" },
    { time: "11:30 - 12:00pm", activity: "Break Between Sessions" },
    { time: "12:00 - 1:00pm", activity: "Alignment & Adjustment" },
    { time: "1:00 - 2:00pm", activity: "Lunch Time" },
    { time: "2:00 - 3:00pm", activity: "Self Study / Rest" },
    { time: "3:00 - 4:00pm", activity: "Break Between Sessions" },
    { time: "4:15 - 5:45pm", activity: "Hatha Yoga" },
    { time: "6:00 - 6:45pm", activity: "Mantra / Meditation" },
    { time: "7:15 - 8:00pm", activity: "Dinner Time" },
  ];

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
        Daily Schedule Of 200 Hour Yoga TTC In Bali
      </h2>
      <h3 className="mb-6 text-xl font-semibold text-center text-gray-600">
        200 Hour Yoga Teacher Training In Bali Course Schedule
      </h3>
      <p className="mb-8 text-justify text-gray-500">
        Our Curriculum is articulately formulated in order to incorporate both
        the theoretical and practical sessions. Along with providing free time
        to the students to reflect, analyze, and retrospect on what they have
        learned so far, they will also get time to explore them. Mahakaal Yogpeeth
        retains academic excellence and professionalism in the school and
        expects the students to be receptive to the change.
      </p>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <div className="min-w-full bg-white border border-gray-200">
          <div className="flex py-3 px-4 text-sm font-semibold text-left text-gray-700 bg-gray-100 border-b border-gray-200">
            <div className="w-1/2">Time</div>
            <div className="w-1/2">Activity</div>
          </div>
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex py-3 px-4 border-b border-gray-200 transition duration-300 ease-in-out hover:bg-gray-50"
            >
              <div className="flex items-center w-1/2 text-sm text-gray-600">
                <CiClock2 className="mr-2 text-gray-500" /> {item.time}
              </div>
              <div className="flex items-center w-1/2 text-sm text-gray-800">
                <GrYoga className="mr-2 text-gray-500" /> {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import ReactPlayer from "react-player";

const YoutubeGrids = () => {
  const videoUrl1 = "https://youtu.be/NL7UUugV6UQ?si=CIuhd0V6uBGeMgzx";
  const videoUrl2 = "https://youtu.be/xSS__UQ9-eY?si=25Lu_l5h-CFDJoIh";

  return (
    <>
      <div className="flex flex-wrap justify-between p-4 bg-gray-100">
        <div className="p-2 w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
          <div
            className="overflow-hidden relative bg-gray-200 rounded-lg"
            style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio for widescreen
          >
            <ReactPlayer
              className="absolute top-0 left-0"
              url={videoUrl1}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
          <div
            className="overflow-hidden relative bg-gray-200 rounded-lg"
            style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio for widescreen
          >
            <ReactPlayer
              className="absolute top-0 left-0"
              url={videoUrl2}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      </div>
    </>
  );
};


const FAQSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="px-8 mx-auto max-w-7xl md:px-12 lg:px-32">
        <div className="text-center">
          <p className="text-4xl font-semibold tracking-tighter text-green-700">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base font-medium text-gray-600">
            Answers to commonly asked questions about our yoga classes and
            services.
          </p>
        </div>

        <dl className="grid gap-12 mt-12 lg:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              What kind of support can I expect?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              We offer comprehensive support including live chat, email, and
              phone. Our support team is available 24/7 to assist with any
              issues or questions you might have.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              How secure is my payment information?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Your payment information is extremely secure. We use
              industry-standard encryption and comply with PCI standards to
              ensure your details are protected.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Can I cancel my subscription at any time?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Yes, you can cancel your subscription at any time. There are no
              cancellation fees, though no refunds are provided for partial
              months.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              How often are platform updates released?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              We regularly update the platform to introduce new features and
              improvements. Major updates are released quarterly, while minor
              updates and bug fixes are rolled out as needed.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Is there a community or forum where I can discuss with other
              users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Yes, we have a community forum where users can share tips, ask
              questions, and connect with others. It's a great place to learn
              from fellow users and contribute your own insights.
            </dd>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-shadow duration-300 transform hover:shadow-lg hover:-translate-y-1">
            <dt className="text-lg font-medium text-green-700">
              Do you offer training or resources for new users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-600">
              Absolutely! We provide a comprehensive knowledge base, video
              tutorials, and live webinars to help you get started and make the
              most out of our platform.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FoldBlog, OnePagerSection } from "./TTCTwo";
import WhatsappButton from "../Contact/WhatsappButton";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8 } from "../../utils";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export function WithSpeechBubbles() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Button onClick={prevTestimonial}>Previous</Button>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>
                  {testimonials[current].heading}
                </TestimonialHeading>
                <TestimonialText>{testimonials[current].text}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={testimonials[current].avatar}
                name={testimonials[current].name}
                title={testimonials[current].title}
              />
            </Testimonial>
          </motion.div>
          <Button onClick={nextTestimonial}>Next</Button>
        </Stack>
      </Container>
    </Box>
  );
}

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

const TypewriterHeading = () => {
  return (
    <section className="py-24 px-4 mx-auto max-w-7xl md:px-12 lg:px-32">
      <div>
        <h1 className="text-3xl font-semibold tracking-tighter text-center text-gray-900 sm:text-4xl lg:text-5xl text-balance">
          Yoga School in Rishikesh - Mahakaal{" "}
          <span className="px-2 text-black bg-indigo-300 rounded-lg border shadow shadow-gray-100">
            <Typewriter
              words={["Yogpeeth"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={10}
            />
          </span>
        </h1>
        <p className="mt-4 text-sm font-medium text-gray-500 sm:text-base lg:text-lg text-balance">
          Mahakaal Yogpeeth is so much more than just a yoga school in Rishikesh.
          It is a place that gives you a real feel of Home away from home and
          where you will find your long-lost family. We are committed to share
          and spread the awareness of our Yoga lineage, proceeding to motivate
          and develop yoga practitioners everywhere in the world. Having a dream
          of the present and keep moving to the shapeless goal is the prime
          maxim of this Yoga teacher training school in Rishikesh. We at Mahakaal Yogpeeth like do not hoard our knowledge gained from our gurus, but
          believe in spreading it to everyone, which will surely benefit the
          lives of people. Our yoga certification Courses are designed and
          formed with this in mind as it will provide the students a deep
          knowledge of yoga and its philosophies. The YTT certification program
          is customised to provide Hatha Yoga and Ashtanga Vinyasa yoga that
          would help the students in learning yoga, improvement of their skills
          and become a certified yoga instructor. We are internationally
          certified Yogashala, registered with Yoga Alliance USA and holds
          global recognition. The optimum standards which means anyone can
          practice and impart the knowledge of yoga TTC courses across
          world-wide boundaries. Our Main Aim is to provide first-class yoga
          training to the practitioners and train well yoga teachers by
          improving their skills to next levels with the purpose of spreading
          the awareness and understanding of yoga to the world-wide. Our mission
          is to get rid of nervousness, depression, anxiety from the society as
          well. Furthermore, we try to focus on family problems and remedial
          personal by practicing a modest, accurate, and traditional form of
          multi-style yoga poses. Our yoga teacher and instructor certification
          training in Rishikesh, India will give you a chance to experience the
          serene location also known as the gateway of Himalayas. Located in
          Rishikesh, the yoga capital of the world, and nestled in the foothills
          of the Himalayas where the Ganga River flows, makes this a truly
          unique place to practice yoga. We at Mahakaal Yogpeeth, are committed to
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
          the path of Yoga. When you leave Mahakaal Yogpeeth, you will have
          expanded the range of your skills, deepened your knowledge, and gained
          more confidence in your teaching abilities.
        </p>
        <h1 className="mt-12 text-3xl font-semibold tracking-tighter text-center text-gray-900 sm:text-4xl lg:text-5xl text-balance">
          Rishikesh | Your Dream Destination for{" "}
          <span className="px-2 text-black bg-indigo-300 rounded-lg border shadow shadow-gray-100">
            <Typewriter
              words={["Yoga!", "Ambience!", "Peace!"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={0}
            />
          </span>
        </h1>
        <p className="mt-4 text-sm font-medium text-gray-500 sm:text-base lg:text-lg text-balance">
          Rishikesh is the gateway of Himalaya which is the most popular
          spiritual place for seekers in Uttrakhand. Rishikesh is also known for
          “Yoga capital of world.” An International yoga festival is held by
          Uttarakhand tourism every year in March first week. Every year
          thousands of practitioner from 50 countries come to celebrate this
          festival to practice Yoga Meditation. This festival gives an
          opportunity to attend a yoga classees in Rishikesh with world-famous
          yoga teachers. There are several yoga institute in Rishikesh as well.
          Mahakaal Yogpeeth always aims in keeping the originality of the Yoga as
          it is. The main purpose of starting Mahakaal Yogpeeth is to provide
          proper yoga training in Rishikesh and help people to re-experience
          their physique and transform it in a balanced way that you will yet
          again connect with your soul. Great Sages and Yogis have been
          practiced in Rishikesh and this is what makes this place special and
          full of energies. As Rishikesh is the foothills of Himalaya, Holy
          Ganges is flowing all the way from its origin place called “Gangotri”,
          which is only 250km far away from Rishikesh. According to Vedic and
          Hindu culture, it is said that if you have 3 dips in the holy Ganges
          removes all impurities and sins. This is what makes this place
          special. Rishikesh is surrounded by Ashrams and Temples where always
          some yoga activities and rituals going on. Several ancient temples and
          caves belong to this ancient place. Every year most popular pilgrimage
          begins from Rishikesh to the Himalayas oldest and ancient temples. So,
          Rishikesh acts as an entry point which leads to the sacred places deep
          in the Himalayas. Once people come to Rishikesh it would touch to
          their hearts and changes their mind and soul for better. Rishikesh has
          succeeded to get the position of a spiritual destination of the
          highest standing, because of its numerous yoga and meditation schools,
          ashrams and places of worship. You will know how many yogis, sages and
          students who are coming far from their homes to look for harmony.
          Rishikesh is known as the land of yoga and meditation in the world and
          people come far away to learn yoga and meditation. It is a good
          destination to have an experience with India’s ancient and traditional
          form of yoga. The eco-friendly and peaceful environment that
          fascinates the spiritual and religious seekers over the world. Come
          and Get experience the spirituality of the Holy Ganga River, Temples,
          Yogshalas, Ashrams, Chaurasi Kutiyas, famous Ram and Laxman Jhulas,
          etc. The voyage does not complete here by way of you can enjoy the
          experienced sports in which includes trekking, river rafting, bungee
          jumping, jungle safari, and camping. Visit this heavenly place to get
          a pause in your hectic life and savor the holy attraction of
          Rishikesh.
        </p>
      </div>
    </section>
  );
};



const Included = () => {
  return (
    <div className="p-10 flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <div className="relative mb-6">
        
        <div className="bg-indigo-600 h-12 flex items-center justify-center" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-black text-lg text-2xl font-semibold">What’s Included</h2>
        </div>
      </div>
      <ul className="list-disc pl-5 text-sm space-y-3">
        <li>
          <span className="text-lg font-medium text-gray-700">Fire Carmony (Hawan) as Inauguration Program</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">23 days of intense Yoga Classes</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">7 Hours to 8 Hours Classes Every day</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Course duration- 1st- Arrival - to 26th- The departure of each month</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">200-Hours RYT Yoga Alliance Certification</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">26 Days Accommodation with Spacious Space, Private Balcony and Mountain View</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">3 Times daily nutritious vegetarian or Vegan meals</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Amenities upon arrival - toilet paper, soap etc.</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Herbal Tea & Fresh Fruit Juice</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Filtered Drinking Water</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Weekend excursions</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Himalayas sightseeing trip</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Course material such as Manuals, Books, notebooks & stationery.</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Beach Yoga Sessions</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">World Famous Ganga Aarti</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Indian Classical Music Sessions / Bollywood Dance Class Sessions</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">24/7 Free High Speed 5G Internet Connection</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">27/7 Hot Water Facility</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Bhakti Yoga Classes</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Sound Healing and Kirtan Sessions</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Complimentary Body Movement Workshop</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Special Yoga Nidra Classes</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Special Kundalini and Chakra Meditation Classes</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Special Yoga Workshop During the Training From Guest Lectures</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Weekly Room Cleaning</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">E-books of the most important yoga books</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Serious Study Environment</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Yoga Mats and material for all activities</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">FREE Airport Pick Up from Dehradun Airport</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Cultural Program in the Closing Ceremony / Graduation Ceremony</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Lots of Love and Hugs</span> 
          <span className="text-gray-700"> </span>
        </li>
      </ul>
    </div>
  );
};


const NotIncluded = () => {
  return (
    <div className="p-10 flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <div className="relative mb-6">
        
        <div className="bg-indigo-600 h-12 flex items-center justify-center" style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-black text-lg text-2xl font-semibold">What’s Not Included</h2>
        </div>
      </div>
      <ul className="list-disc pl-5 text-sm space-y-3">
      <li>
        <span className="text-lg font-medium text-gray-700">Air conditioner / Heater (available per request)</span> 
        <span className="hidden md:inline text-white">mahakaaalyogpeeth@gmail.com rishikesh dehradun</span>
      </li>

        <li>
          <span className="text-lg font-medium text-gray-700">Fees for visa</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Flight Fare</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Pick up from New Delhi (available per request)</span> 
          <span className="text-gray-700"> </span>
        </li>
        <li>
          <span className="text-lg font-medium text-gray-700">Massages</span> 
          <span className="text-gray-700"> </span>
        </li>
        
      </ul>
    </div>
  );
};

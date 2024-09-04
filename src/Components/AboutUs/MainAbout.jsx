import { Typewriter } from "react-simple-typewriter";
import Footer from "../../MainComponents/Footer";
import Navbar from "../../MainComponents/Navbar";
import Content from "./TextArea";
import LogoHeading from "../../Pages/LogoHeading";
import BenefitsSection from "../../Pages/BenefitsSection";
import { useAnimation, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { About1 } from "../../utils";
export const MainAbout = () => {
  return (
    <>
      <div className="gap-4 flex flex-col">
        <div className="m-12">
          <Navbar />
        </div>
        <HeroImage
          wallpaper={
            About1
          }
          Heading={"About Mahakaal Yogpeeth"}
        />
        
        <TypewriterHeading />
        <Content />
        {/* <OnePagerSection /> */}
        {/* <TeachersTestimonials /> */}
        <BenefitsSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export const TypewriterHeading = ({ heading, TypingParagraph }) => {
  return (
    <section className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div>
        <h1 className="text-3xl text-center font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
          Our Yoga School in {" "}
          <span className=" bg-indigo-300 shadow shadow-gray-100 border rounded-lg text-black">
            <Typewriter
              words={["Rishikesh"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={10}
            />
          </span>
        </h1>
        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
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
        <h1 className="text-3xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-center text-balance mt-12">
          Rishikesh | Your Dream Destination for{" "}
          <span className="bg-indigo-300 shadow shadow-gray-100 border rounded-lg text-black">
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
        <p className="mt-4 text-base font-medium text-gray-500 text-balance">
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

export const HeroImage = ({ wallpaper, Heading }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              {/* Mobile menu button */}
              <div className="flex lg:hidden"></div>
            </div>
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto ${isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
                }`}
            >
              <div className="-mx-4 lg:flex lg:items-center">
                <a
                  href="#"
                  className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Web developers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Web Designers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  UI/UX Designers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative w-full h-[50vh]">
        <img
          src={wallpaper}
          alt="Hero"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              {Heading}
            </h1>
            {/* <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Enroll now!!
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export const testimonials = [
  {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  },

  {
    name: "Michael Andreuzza",
    title: "Creator of Windstatic.com",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Being in the financial industry, we were always looking for ways to enhance our transactions' security and efficiency.",
  },
  {
    name: "Gege Piazza",
    title: "Creator of Pizza Piazza",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "Implementing Semplice's blockchain technology has been a game-changer for our supply chain management.",
  },
  {
    name: "Jenson Button",
    title: "Founder of Benji and Tom",
    image: "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "We were initially hesitant about integrating blockchain technology into our existing systems.",
  },
  // Add more testimonials as needed
];

export const TeachersTestimonials = () => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      controls
        .start({
          x: "-100%",
          transition: { duration: 8, ease: "easeInOut" },
        })
        .then(() => {
          controls.set({ x: "0%" });
        });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section>
      <div className="px-4 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="flex flex-col w-full">
          <div
            className="flex flex-col w-full"
            aria-labelledby="carousel-label"
            role="region"
            tabIndex="0"
          >
            <h2 className="sr-only" id="carousel-label">
              Carousel
            </h2>
            <span className="sr-only" id="carousel-content-label">
              Carousel
            </span>
            <div className="overflow-hidden">
              <motion.div
                className="flex w-full"
                ref={sliderRef}
                animate={controls}
                initial={{ x: "0%" }}
              >
                {testimonials.concat(testimonials).map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2"
                  >
                    <figure className="relative flex flex-col justify-between h-full max-w-xs p-6 mx-auto bg-white border shadow-lg rounded-2xl">
                      <figcaption className="relative flex flex-col justify-between">
                        <img
                          alt={testimonial.name}
                          src={testimonial.image}
                          className="object-cover mx-auto rounded-full size-14 grayscale"
                        />
                        <div className="mt-4">
                          <div className="font-medium text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            {testimonial.title}
                          </div>
                        </div>
                      </figcaption>
                      <blockquote className="mt-4">
                        <p className="text-base font-medium text-gray-500">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </figure>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQSection = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div>
          <p className="text-4xl font-semibold tracking-tighter text-gray-900">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base font-medium text-gray-500">
            Answers to commonly asked questions about our platform.
          </p>
        </div>

        <dl className="grid gap-12 mt-12 lg:grid-cols-2">
          <div>
            <dt className="text-lg font-medium text-black">
              What kind of support can I expect?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
              We offer comprehensive support including live chat, email, and
              phone. Our support team is available 24/7 to assist with any
              issues or questions you might have.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
              How secure is my payment information?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
              Your payment information is extremely secure. We use
              industry-standard encryption and comply with PCI standards to
              ensure your details are protected.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
              Can I cancel my subscription at any time?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
              Yes, you can cancel your subscription at any time. There are no
              cancellation fees, though no refunds are provided for partial
              months.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
              How often are platform updates released?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
              We regularly update the platform to introduce new features and
              improvements. Major updates are released quarterly, while minor
              updates and bug fixes are rolled out as needed.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
              Is there a community or forum where I can discuss with other
              users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
              Yes, we have a community forum where users can share tips, ask
              questions, and connect with others. It's a great place to learn
              from fellow users and contribute your own insights.
            </dd>
          </div>
          <div>
            <dt className="text-lg font-medium text-black">
              Do you offer training or resources for new users?
            </dt>
            <dd className="mt-2 text-base font-medium text-gray-500">
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

export const OnePagerSection = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div>
          <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
            Building one pagers together
            <span className="text-gray-600">wherever and anywhere</span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-500 text-balance">
            Control and added security. With decentralization, users have more
            control over their data and transactions, and the platform is less
            susceptible to malicious attacks.
          </p>
          <div className="grid mt-12 gap-y-12 gap-x-2 md:grid-cols-2">
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <p className="font-medium text-gray-900">
                  No warranty disclaimer
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  The license comes with no warranties. The licensor provides
                  the work "as is," and users must use it at their own risk.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Modification Freedom
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  You can adapt, remix, transform, and build upon the licensed
                  work.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Commercial use allowed
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  You are allowed to use the licensed work for both
                  non-commercial and commercial purposes.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="#"
                  className="w-full h-full mx-auto rounded-2xl"
                />
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Share alike (SA) absence
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  The CC BY 3.0 License does not include a "Share Alike" (SA)
                  provision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutTeachersCards = () => {
  return (
    <div className=" flex flex-col md:flex-row px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 border-collapse border-slate-500 rounded-lg  shadow-2xl     ">
      {/*TODO: first Box */}
      <div className="first-box    mx-2 w-auto   ">
        <div className="image-box  m-4 p-4 justify-center items-center text-center   mt-14 ">
          <img
            className="  h-72  shadow-lg  shadow-slate-300 rounded-lg mt-14"
            src="https://images.pexels.com/photos/6298342/pexels-photo-6298342.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Yogi.img"
            width={540}
          />
        </div>
        <div className="Name-box   text-center  items-center   ">
          <div className="   rounded-lg mt-4 ">
            <h2 className="text-2xl  inline uppercase font-bold    bg-indigo-300 m-2 p-2  rounded-xl ">
              Hatha Yoga
            </h2>
          </div>
        </div>
      </div>
      <div className="second-box w-full flex-col      m-2 p-2  ">
        <div className="Yoga-name   text-3xl  text-center  ">
          <div className=" text-indigo-500    rounded-lg p-2 ">
            <h1 className="font-bold text-5xl  m-2 p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  ">
              Yogi Abhishek{" "}
            </h1>
          </div>
        </div>
        <div className="short-summary mt-2 text-slate-600  text-auto    ">
          {` 

Yogi Abhishek Negi's yogic journey began in the spiritual heart of India, Rishikesh, where he embarked on a path of deep study and practice. With a Post-Graduate Diploma in Yoga Science from the esteemed Uttarakhand Sanskrit University, Yogi Abhishek has honed his skills under the guidance of renowned Yoga masters.

In his classes, Yogi Abhishek seamlessly integrates practical demonstrations, theoretical knowledge, and open discussions to provide a well-rounded understanding of the ancient art of Yoga. Whether you're a beginner or an experienced practitioner, his teachings will help you deepen your practice and unlock the transformative power of Yoga.

With a humble and nurturing approach, Yogi Abhishek's expertise in Ashtanga Vinyasa, Hatha Yoga, and alignment is the result of his Many Years of dedication to the ancient art of yoga. Through his guidance, you'll not only cultivate physical flexibility and strength but also discover the profound inner peace and self-awareness that Yoga can bring.

Yogi Abhishek's classes are an amalgam of practical demonstrations, theoretical knowledge, and engaging discussions. This holistic approach ensures that you not only master the physical postures but also deepen your understanding of the philosophical and spiritual aspects of yoga.

`}
        </div>
      </div>
    </div>
  );
};
export default AboutTeachersCards;

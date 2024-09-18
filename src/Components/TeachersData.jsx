import { motion } from "framer-motion";
import React from "react";
import { bipinsir } from "../utils";
import { vikalsir } from "../utils";
import { kapilsir } from "../utils";
import { ajaysir } from "../utils";
import { sanjaysir } from "../utils";
import { shivamsir } from "../utils";

const yogaTeachers = [
  {
    name: "Kapil Sajwan",
    title: "Founder | Hatha Yoga Specialist",
    description: `Kapil Sajwan, founder of our yoga institute, is a dedicated practitioner and expert 
      in Hatha Yoga. With over a decade of experience, he specializes in traditional Hatha Yoga techniques, 
      focusing on physical postures, breath control, and meditation. His calm demeanor and depth of knowledge 
      make him a revered teacher among students seeking a holistic approach to yoga practice.`,
  },
  {
    name: "Shivam Rana",
    title: "Hatha Yoga Instructor",
    description: `Shivam Rana is a skilled Hatha Yoga instructor with a passion for helping students 
      achieve balance and inner strength through yoga. With his comprehensive understanding of traditional 
      Hatha Yoga principles, Shivam guides his students through postures and breathing techniques that 
      enhance flexibility and mindfulness. His classes are known for their attention to alignment and spiritual depth.`,
  },
  {
    name: "Ajay Ji",
    title: "Adjustment and Kundalini Yoga Instructor",
    description: `Ajay Ji is a master of Kundalini Yoga and specializes in teaching students how to awaken 
      their inner energy through guided adjustments and meditative practices. His deep understanding of body 
      alignment and energy flow allows students to safely explore Kundalini awakening, while his hands-on 
      adjustment techniques bring greater awareness and control in asanas.`,
  },
  {
    name: "Sanjay Ji",
    title: "Ashtanga Instructor",
    description: `Sanjay Ji is an experienced Ashtanga Yoga teacher, well-versed in both the Primary and 
      Intermediate Series. With years of dedicated practice and instruction, Sanjay guides students through 
      powerful Ashtanga sequences with a focus on breath, strength, and flexibility. His classes challenge 
      students physically while fostering mental clarity and discipline.`,
  },
  {
    name: "Vikal Sajwan",
    title: "Meditation and Pranayama Instructor",
    description: `Vikal Sajwan is a seasoned Meditation and Pranayama instructor, known for his calming presence 
      and mastery over breathwork. Vikal integrates various meditation techniques with the art of controlled breathing 
      to help students cultivate mindfulness, reduce stress, and achieve a deeper sense of inner peace. His teachings 
      empower students to harness the transformative power of pranayama in their daily lives.`,
  },
  {
    name: "Bipin Ji",
    title: "Mantra Chanting Teacher",
    description: `Bipin Ji is an expert in the ancient art of mantra chanting and sound healing. 
      With over a decade of experience, he has dedicated his life to mastering sacred chants that 
      elevate spiritual consciousness and bring peace to the mind and body. His teachings focus on 
      the vibrational power of mantras and their ability to deepen meditation practices. Students 
      find his sessions transformative, as he combines traditional techniques with a modern approach 
      to spiritual growth and healing.`,
  },
];

const imageArray = [
  kapilsir,
  shivamsir,
  ajaysir,
  sanjaysir,
  vikalsir,
  bipinsir,
];

const Teachers = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="  text-4xl font-bold text-center mb-12 text-indigo-500">
        OUR TEACHERS
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {yogaTeachers.map((teacher, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="w-full mb-4 flex justify-center">
              <img
                src={imageArray[index % imageArray.length]}
                alt={teacher.name}
                className="rounded-lg object-cover w-full h-[20rem] max-w-xs"
              />
            </motion.div>

            <motion.div className="w-full text-center">
              <h2 className="text-2xl font-bold text-purple-800 mb-2">
                {teacher.name}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{teacher.title}</p>
              <p className="text-gray-700 leading-relaxed">
                {teacher.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;

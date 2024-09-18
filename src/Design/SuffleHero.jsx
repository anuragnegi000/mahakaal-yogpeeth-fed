import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mahakaal1 } from "../utils";
import { Mahakaal2 } from "../utils";
import { Mahakaal3 } from "../utils";
import { Mahakaal4 } from "../utils";
import { Mahakaal5 } from "../utils";
import { Mahakaal6 } from "../utils";
import { Mahakaal7 } from "../utils";
import { Mahakaal8 } from "../utils";
import { Mahakaal9 } from "../utils";
import { Mahakaal10 } from "../utils";
import { Mahakaal11 } from "../utils";
import { Mahakaal12 } from "../utils";
import { Mahakaal13 } from "../utils";
import { Mahakaal14 } from "../utils";
import { Mahakaal15 } from "../utils";
import { Mahakaal16 } from "../utils";

const ShuffleHero = () => {

  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-600 font-medium">
          Welcome to Mahakaal Yogpeeth
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          The Best Yoga School in Rishikesh
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Namaste and a heartfelt welcome from Mahakaal Yogpeeth! We are thrilled to have you join us as you delve into the world of yoga and begin a transformative journey toward self-discovery and comprehensive well-being. Located in the tranquil and spiritual town of Rishikesh, we provide premier yoga teacher training in India.
        </p>
        <a 
          href="/enroll" 
          className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-65"
        >
          Enroll now!!
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: Mahakaal1 },
  { id: 2, src: Mahakaal2 },
  { id: 3, src: Mahakaal3 },
  { id: 4, src: Mahakaal4 },
  { id: 5, src: Mahakaal5 },
  { id: 6, src: Mahakaal6 },
  { id: 7, src: Mahakaal7 },
  { id: 8, src: Mahakaal8 },
  { id: 9, src: Mahakaal9 },
  { id: 10, src: Mahakaal10 },
  { id: 11, src: Mahakaal11 },
  { id: 12, src: Mahakaal12 },
  { id: 13, src: Mahakaal13 },
  { id: 14, src: Mahakaal14 },
  { id: 15, src: Mahakaal15 },
  { id: 16, src: Mahakaal16 },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;

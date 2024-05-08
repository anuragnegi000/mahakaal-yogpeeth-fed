import React from "react";
import Navbar from "./MainComponents/Navbar";
import Slider from "./Design/Slider";
import Header from "./MainComponents/Header";
import MovingCards from "./MainComponents/MovingCards";
import GlimpseHead from "./MainComponents/GlimpseHead";
import ShuffleHero from "./Design/SuffleHero";
import { TextParallaxContentExample } from "./Design/TextParallaxContent";
import { HoverImageLinks } from "./Design/HoverImageLink";

const Final = () => {
  return (
    <div>
      <Navbar />

      <ShuffleHero />
      <TextParallaxContentExample />
      <HoverImageLinks />

      {/* 
      <Slider />
      <Header />
      <GlimpseHead />
      <MovingCards />

      */}
    </div>
  );
};

export default Final;

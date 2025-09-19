import React from "react";
import Hero from "../components/Hero.jsx";
import FeaturedDestination from "../components/FeaturedDestination.jsx";
import ExclusiveOffers from "../components/ExclusiveOffers.jsx";
import Testimonial from "../components/Testimonial.jsx";
import NewLetter from "../components/NewLetter.jsx";
import RecommendedHotels from "../components/RecommendedHotels.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedHotels />
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewLetter/>
    </div>
  );
};

export default Home;

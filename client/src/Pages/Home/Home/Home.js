import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../../.././Pages//Home//InfoCards//InfoCards";
import Services from "../Services/Services";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <MakeAppointment />
      <Testimonial />
    </div>
  );
};

export default Home;

import React from "react";
import chair from "../../../../src//assets//images///chair.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src={chair} alt="img" className="w-1/2 rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;

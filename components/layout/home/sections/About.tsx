import React from "react";

const About = () => {
  return (
    <div className="bg-[#F6F6F6] my-5 sm:hidden md:block">
      <div className="lg:px-5 py-10 flex  ">
        <img className="h-60 sm:hidden lg:block" src="/Vitamin.png" alt="" />
        <img src="/made.png" alt="" />
        <div>
          <span className="block text-xl text-[#787878] font-medium">
            A Few Words About Us
          </span>
          <span className="block text-2xl font-semibold text-primary">
            WHO WE ARE
          </span>
          <span className="mt-5 block pr-20">
            VITAstir® is a leading provider of injectable vitamins. Our vitamin
            injections are made in a fully compliant FDA Approved facility. This
            ensures the highest level of quality and sterility for our patients.
            Our vitamin injections offer solutions to maintain a happy and
            healthy lifestyle.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

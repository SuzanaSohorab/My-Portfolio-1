import React from "react";
import { TypeAnimation } from "react-type-animation";
import myPic from "../assets/mypic.jpg"; // replace with your image path


const gitlink = ('https://github.com/SuzanaSohorab?tab=repositories')
const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 transition-all duration-500">
      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I’m{" "}
          <span className="text-blue-400">Suzana Sohorab Shayli</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-blue-300">
          I’m {" "}
          <TypeAnimation
            sequence={[
              "a Full Stack Web Developer", 2000,
              "a Freelancer", 2000,
              "currently pursuing my Bachelor's in CSE", 2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-gray-300 max-w-lg">
          I’m passionate about building modern, responsive, and user-friendly
          web applications using the latest technologies.
        </p>

        <button
  onClick={() => window.open("https://github.com/SuzanaSohorab", "_blank")}
  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
>
  Go to Github →
</button>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={myPic}
          alt="Suzana Sohorab Shayli"
          className="rounded-2xl w-80 md:w-[400px] shadow-[0_0_30px_rgba(96,165,250,0.3)] hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default Banner;

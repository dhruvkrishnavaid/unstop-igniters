import { motion } from "motion/react";
const Hero = () => {
  return (
    <div className="w-full bg-[url(/bg.jpeg)] bg-cover bg-center">
      <div className="backdrop-blur-md py-48 bg-amber-900/20 flex flex-col gap-8 justify-center items-center text-white p-6 w-full h-full">
        <motion.h1 initial={{y: 10, opacity: 0}} animate={{y:0, opacity:100, transition: {duration: 0.75}}} className="w-full text-center font-black text-6xl">
          Unstop Igniters: Your Engineering Resource
        </motion.h1>
        <span className="w-full text-center text-xl">
          Fuel your engineering journey with Unstop Igniters, your one-stop hub
          for resources, inspiration, and community.
        </span>
      </div>
    </div>
  );
};

export default Hero;

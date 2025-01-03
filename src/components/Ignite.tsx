import { motion } from "motion/react";
const Ignite = () => {
  return (
    <div className="p-6 flex flex-col gap-4 bg-sky-600 text-white">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}
        className="font-bold text-4xl"
      >
        Igniting Projects: A Legacy of Success
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
       whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}
      >
        Unstop Igniters is a team of passionate engineers who are dedicated to
        helping you ignite your projects. Our team is made up of professionals
        from a variety of engineering backgrounds, including mechanical,
        electrical, and software engineering.
      </motion.p>
    </div>
  );
};

export default Ignite;

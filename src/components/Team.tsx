import { motion } from "motion/react";
const Team = () => {
  return (
    <div className="p-6">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}
        className="w-full pt-6 text-4xl font-bold text-center pb-4"
      >
        Meet Our Team: Igniting Innovation
      </motion.h1>
      <div className="py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}
          className="backdrop-blur-2xl p-6 rounded-lg flex flex-col gap-6"
        >
          <img
            src="https://picsum.photos/200/300"
            className="w-full max-w-sm h-64 rounded-xl shadow-lg"
          />
          <h2 className="font-bold text-2xl">Team Member 1</h2>
          <p>
            Get to know our talented and dedicated team members who drive Unstop
            Igniters' mission.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}
          className="backdrop-blur-2xl p-6 rounded-lg flex flex-col gap-6"
        >
          <img
            src="https://picsum.photos/200/300"
            className="w-full max-w-sm h-64 rounded-xl shadow-lg"
          />
          <h2 className="font-bold text-2xl">Team Member 2</h2>
          <p>
            Team Member 2 is passionate about 3D modeling and web development,
            driving our website and online initiatives.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}
          className="backdrop-blur-2xl p-6 rounded-lg flex flex-col gap-6"
        >
          <img
            src="https://picsum.photos/200/300"
            className="w-full max-w-sm h-64 rounded-xl shadow-lg"
          />
          <h2 className="font-bold text-2xl">Team Member 3</h2>
          <p>
            Team Member 3 is an electronics enthusiast who leads our tech
            projects, providing valuable knowledge and insights.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;

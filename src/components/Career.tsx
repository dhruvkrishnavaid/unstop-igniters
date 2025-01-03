import { motion } from "motion/react";
const Career = () => {
  return (
    <div className="p-6 gap-4 flex flex-col bg-[#e79ced]">
      <div className="bg-white/60 p-6 flex flex-col gap-4 rounded-lg">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}
          className="text-4xl font-bold"
        >
          Igniting Your Career: Industry Insights
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}>
            <div className="font-semibold text-lg">Industry Trends</div> Stay
            ahead of the curve with insights on emerging trends and in-demand
            skills in engineering fields.
          </motion.div>
          <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}>
            <div className="font-semibold text-lg">
              Internship & Job Opportunities
            </div>
            Discover internship and job opportunities tailored to engineering
            students, kickstarting your career journey.
          </motion.div>
          <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}>
            <div className="font-semibold text-lg">Mentorship & Guidance</div>
            Connect with experienced professionals and club members for
            mentorship and guidance on career paths.
          </motion.div>
        </div>
      </div>
      <div className="bg-white/60 p-6 flex flex-col gap-4 rounded-lg">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="text-4xl font-bold">
          Beyond the Classroom: Community & Events
        </motion.h1>
        <div>
          <ul className="px-4">
            <motion.li
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}>
              ➼ Attend our workshops and seminars led by industry experts,
              gaining practical skills and knowledge.
            </motion.li>
            <motion.li
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}>
              ➼ Engage in hackathons and technical challenges, pushing your
              boundaries and collaborating with peers.
            </motion.li>
            <motion.li
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }}>
              ➼ Join our community events, fostering connections and building a
              supportive network of engineering enthusiasts.
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;

import { motion } from "motion/react";
const Join = () => {
  return (
    <div className="p-6">
      <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="text-4xl font-bold pb-6">
        Join the Unstop Igniters Community
      </motion.h1>
      <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="flex flex-col pb-4">
        <div className="font-semibold text-2xl">➣ Membership Application</div>
        <div>
          Apply to become an Unstop Igniters member and contribute to our
          thriving community.
        </div>
      </motion.div>
      <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="flex flex-col pb-4">
        <div className="font-semibold text-2xl">➣ Engage & Contribute</div>
        <div>
          Participate in club activities, projects, and events, sharing your
          knowledge and skills.
        </div>
      </motion.div>
      <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="flex flex-col pb-4">
        <div className="font-semibold text-2xl">➣ Make a Difference</div>
        <div>
          Leave a lasting impact on your peers and the engineering world,
          igniting innovation and success.
        </div>
      </motion.div>
    </div>
  );
}

export default Join;
import { motion } from "motion/react";
const Contact = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="text-4xl font-bold">Contact Us</motion.h1>
      <div className="grid md:grid-cols-3">
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="flex flex-col gap-4">
          <div className="text-4xl font-bold text-blue-600 w-full text-center">
            1
          </div>
          <div className="w-full text-center text-2xl font-bold">Website</div>
          <div className="w-full text-center">
            Visit our website for the latest updates, resources, and event
            information.
          </div>
        </motion.div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="flex flex-col gap-4">
          <div className="text-4xl font-bold text-sky-600 w-full text-center">
            2
          </div>
          <div className="w-full text-center text-2xl font-bold">Email</div>
          <div className="w-full text-center">
            Contact us at [email address] for any queries, feedback, or
            suggestions.
          </div>
        </motion.div>
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.75 } }} className="flex flex-col gap-4">
          <div className="text-4xl font-bold text-pink-600 w-full text-center">
            3
          </div>
          <div className="w-full text-center text-2xl font-bold">
            Social Media
          </div>
          <div className="w-full text-center">
            Follow us on [Social Media Handles] to stay connected with our
            community.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
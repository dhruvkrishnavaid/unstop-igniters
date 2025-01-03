const Career = () => {
  return (
    <div className="p-6 gap-4 flex flex-col bg-[#e79ced]">
      <div className="bg-white/60 p-6 flex flex-col gap-4 rounded-lg">
        <h1 className="text-4xl font-bold">
          Igniting Your Career: Industry Insights
        </h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <div className="font-semibold text-lg">Industry Trends</div> Stay
            ahead of the curve with insights on emerging trends and in-demand
            skills in engineering fields.
          </div>
          <div>
            <div className="font-semibold text-lg">
              Internship & Job Opportunities
            </div>{" "}
            Discover internship and job opportunities tailored to engineering
            students, kickstarting your career journey.
          </div>
          <div>
            <div className="font-semibold text-lg">Mentorship & Guidance</div>{" "}
            Connect with experienced professionals and club members for
            mentorship and guidance on career paths.
          </div>
        </div>
      </div>
      <div className="bg-white/60 p-6 flex flex-col gap-4 rounded-lg">
        <h1 className="text-4xl font-bold">
          Beyond the Classroom: Community & Events
        </h1>
        <div>
          <ul className="px-4">
            <li>
              ➼ Attend our workshops and seminars led by industry experts,
              gaining practical skills and knowledge.
            </li>
            <li>
              ➼ Engage in hackathons and technical challenges, pushing your
              boundaries and collaborating with peers.
            </li>
            <li>
              ➼ Join our community events, fostering connections and building a
              supportive network of engineering enthusiasts.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;

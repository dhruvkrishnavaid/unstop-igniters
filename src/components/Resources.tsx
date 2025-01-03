const Resources = () => {
  return (
    <div className="p-6">
      <h1 className="pb-6 font-bold text-4xl">
        Boost Your Learning: Resources for Success
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 border-2 border-blue-600 rounded-2xl bg-white/40 flex flex-col gap-4">
          <div className="text-2xl font-semibold">Notes & Assignments</div>
          <div>
            Access a comprehensive library of notes, assignments, and study
            resources curated by club members.
          </div>
        </div>
        <div className="p-6 border-2 border-sky-500 rounded-2xl bg-white/40 flex flex-col gap-4">
          <div className="text-2xl font-semibold">
            Sessional & Semester Papers
          </div>
          <div>
            Prepare for exams with previous years' sessional and semester
            papers, ensuring you're well-equipped.
          </div>
        </div>
        <div className="col-span-2 p-6 border-2 border-pink-600 rounded-2xl bg-white/40 flex flex-col gap-4">
          <div className="text-2xl font-semibold">AKTU Syllabus</div>
          <div>
            Find the latest AKTU syllabus for all engineering branches, keeping
            you on track with academic requirements.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
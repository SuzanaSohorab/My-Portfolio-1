import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science & Engineering",
      institution: "Independent University, Bangladesh",
      year: "2021 - Present",
      description:
        "Currently pursuing my B.Sc. in Computer Science and Engineering. Learning data structures, algorithms, and full-stack web development to strengthen my problem-solving and programming skills.",
    },
    {
      title: "Higher Secondary Certificate (Science)",
      institution: "Viqarunnisa Noon School & College, Dhaka", 
      year: "2018 - 2020",
      description:
        "Completed HSC in Science with a strong foundation in mathematics, physics, and computer fundamentals, which sparked my passion for technology and software development.",
    },
    {
      title: "Secondary School Certificate (Science)",
      institution: "Viqarunnisa Noon School & College, Dhaka", 
      year: "2016 - 2018",
      description:
        "Built early curiosity for technology through science projects and basic programming. Developed analytical and teamwork skills through extracurricular activities.",
    },
  ];

  return (
    <section className="bg-blue-50 dark:bg-blue-900 text-gray-900 dark:text-white px-8 md:px-20 py-16 transition duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800 dark:text-blue-200">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-blue-100 dark:bg-blue-800 p-6 rounded-2xl border-b-4 border-blue-500 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-1 text-blue-900 dark:text-blue-100">{edu.title}</h3>
              <p className="text-blue-500 font-medium mb-2">{edu.institution}</p>
              <p className="font-bold text-blue-800 dark:text-blue-200 mb-3">
                {edu.year}
              </p>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

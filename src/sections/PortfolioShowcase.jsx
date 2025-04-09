import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const getProjects = () => [
 
  {
    title: "Digital Wallet",
    description: "A secure and user-friendly digital wallet for easy transactions and balance management.",
    link: "https://1sq.realty/",
    images: [
      "/project2/1-mobile.png",
      "/project2/2-mobile.png",
      "/project2/3-mobile.png",
      "/project2/4-mobile.png",
      "/project2/5-mobile.png",
      "/project2/6-mobile.png",
      "/project2/7-mobile.png",
      "/project2/8-mobile.png",
      "/project2/9-mobile.png",
      "/project2/10-mobile.png",
      "/project2/11-mobile.png",
    ],
    challenges: "Ensuring seamless integration with banking APIs and handling security vulnerabilities.",
    isConfidential: false, // Not confidential
  },
  
  {
    title: "Dashboard UI",
    description: "A highly interactive admin dashboard with real-time data visualization.",
    link: "https://documan.am/",
    images: [
      "/project3/project1.png",
      "/project3/project2.png",
      "/project3/project3.png",
      "/project3/project4.png",
      "/project3/project5.png"
    ],
    challenges: "Optimizing performance for large data sets and real-time updates.",
    isConfidential: false,
  },
  {
    title: "1SQ Realty",
    description: "Real estate buying and renting platform, also a useful tool for Realtors.",
    link: "https://1sq.realty/",
    images: [
      "/project4/project1.png",
      "/project4/project2.png",
      "/project4/project3.png",
      "/project4/project4.png",
      "/project4/project5.png"
    ],
    role: "Front-end Web Developer",
    jobResponsibilities: "Front end style and functionality",
    duration: "6 months",
    technologies: ["React JS", "CSS", "JavaScript", "Git"],
    challenges: "Building a responsive UI while maintaining fast loading speeds.",
    isConfidential: false,
  },
  {
    title: "Casino Website",
    description: "Goodwin.am is an online casino and betting platform",
    link: "https://goodwin.am/en/",
    images: [
      "/project/project1.png",
      "/project/project2.png",
      "/project/project3.png",
      "/project/project4.png",
      "/project/project5.png",
      "/project/project6.png",
      "/project/project7.png",
      "/project/project8.png",
      "/project/project9.png",
      "/project/project10.png",
      "/project/project11.png",
      "/project/project12.png",
    ],
    role: "Full-stack Web Developer",
    jobResponsibilities: "Front end and node proxy parts (all project had 6 parts)",
    duration: "18 months (ongoing)",
    technologies: ["React JS", "Node JS", "SCSS", "Git"],
    challenges: "Managing real-time betting updates efficiently and ensuring security compliance.",
    isConfidential: true, // Mark as confidential
  },
];

const PortfolioShowcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(getProjects());
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="c-space my-20" id="work">
      <div className="p-6 bg-black min-h-screen text-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-400" data-aos="fade-down">
          My Best Practices Showcase
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`mt-8 p-6 border ${project.isConfidential ? "border-red-500" : "border-blue-500"} rounded-xl bg-gray-950`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h2 className="text-2xl font-semibold text-blue-300">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
            {project.isConfidential && (
              <div className="mt-4 text-red-500 font-bold">Confidential Project - Screenshots cannot be shared.</div>
            )}
            {!project.isConfidential && (
              <a href={project.link} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            <div className="grid grid-cols-5 gap-2 mt-4" data-aos="zoom-in">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={project.title}
                  className={`w-full h-84 object-cover rounded-md border ${project.isConfidential ? "opacity-50" : "border-blue-500"}`}
                />
              ))}
            </div>
            {project.role && (
              <div className="mt-4 text-gray-400" data-aos="fade-right">
                <p><strong className="text-blue-300">Role:</strong> {project.role}</p>
                <p><strong className="text-blue-300">Job Responsibilities:</strong> {project.jobResponsibilities}</p>
                <p><strong className="text-blue-300">Duration:</strong> {project.duration}</p>
                <p><strong className="text-blue-300">Technologies Used:</strong> {project.technologies.join(", ")}</p>
              </div>
            )}
            {project.challenges && (
              <div className="mt-4 text-gray-400" data-aos="fade-left">
                <p><strong className="text-blue-300">Challenges Faced:</strong> {project.challenges}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioShowcase;

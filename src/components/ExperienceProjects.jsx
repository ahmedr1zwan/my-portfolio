import React, { useState } from "react";
import { FiExternalLink } from 'react-icons/fi';

function ExperienceProjects() {
    const [activeTab, setActiveTab] = useState('experience');

    // Sample data (replace with your real data)
    const experiences = [
      { company: "Queen's University Web Development Club", role: "Full Stack Developer (Team Lead)", years: "Jan. 25 - Present", description:"Team Lead for 5 people and worked as full stack to make a site for a client and blalalalallah" },
      { company: "Company B", role: "Intern", years: "2019 - 2020" },
    ];
  
    // Each project includes name, description, technologies, and a link
    const projects = [
      {
        name: "Project Alpha",
        description: "Description for Project Alpha",
        technologies: ["React", "Tailwind CSS", "Node.js"],
        link: "https://github.com/username/project-alpha",
      },
      {
        name: "Project Beta",
        description: "Description for Project Beta",
        technologies: ["Next.js", "TypeScript", "Vercel"],
        link: null,
      },
    ];

  return (
    <div>
        <div className="flex">
            <div>
                <button onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 rounded-3xl border-2 border-[#0071e3] 
                ${
                    activeTab === "experience"
                    ?  'bg-[#0071e3] text-white hover:bg-[#0071e3] hover:text-white'
                    : 'bg-transparent text-[#0071e3] hover:bg-[#0071e3] hover:text-white'

                }`}

                >
                Experience</button>
            </div>
            <div>
                <button onClick={() => setActiveTab("projects")}
                className={`px-4 py-2 rounded-3xl border-2 border-[#0071e3] 
                ${
                    activeTab === "projects"
                    ?  "bg-[#0071e3] text-white hover:bg-[#0071e3] hover:text-white"
                    : "bg-transparent text-[#0071e3] hover:bg-[#0071e3] hover:text-white"

                }`}

                >
                Projects</button>
            </div>
        

        </div>
        
        {/* Tab Content */}
        {activeTab === "experience" && (
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 rounded bg-white">
              <h3 className="font-bold text-xl">{exp.company}</h3>
              <p>{exp.role}</p>
              <p>{exp.description}</p>
              <p className="text-sm text-gray-500">{exp.years}</p>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}

      {activeTab === "projects" && (
        <div className="space-y-4">
          {projects.map((proj, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm bg-white">
              <h3 className="font-bold text-xl mb-2">{proj.name}</h3>
              <p className="text-gray-700">{proj.description}</p>

              {/* Technologies used at the bottom */}
              <div className="mt-3">
                <h4 className="text-sm font-semibold">Technologies:</h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {proj.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icon linking to the project */}
              {proj.link && 
              <div className="mt-4">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-700"
                >
                  <FiExternalLink className="mr-1" />
                  View Project
                </a>
              </div>}
            </div>
          ))}
        </div>
      )}

    






    </div>
    

  );
}

export default ExperienceProjects;

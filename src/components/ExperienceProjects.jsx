import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

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
        name: "SlideFlow - AI Presentation Controller",
        description: `SlideFlow is an innovative AI-powered presentation tool designed to enhance the presenting experience with voice-controlled slide navigation, real-time transcription, and interactive audience engagement.

- 🔹 **Voice-Controlled Navigation** - Seamlessly switch slides using voice commands, eliminating the need for a physical clicker.
- 🔹 **Real-Time Transcription** - Automatically generate subtitles for better accessibility and audience comprehension.
- 🔹 **Smart Interaction** - Integrated voice search and image recognition using the Web Speech API, Google Cloud Vision API, and Sentence-BERT, allowing presenters to retrieve content dynamically.

Built with **React** and **Tailwind CSS** for a smooth and responsive frontend, SlideFlow is powered by a **Flask** backend that processes AI-driven functionalities, ensuring an intuitive and engaging presentation experience.
`,
        technologies: ["React", "Tailwind CSS", "Flask", "Computer Vision", "Google Cloud Vision API", "Sentence-BERT", "Web Speech API"],
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
        <div className="flex gap-1">
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
        <div className="space-y-2 mt-2">
          {projects.map((proj, index) => (
            <div key={index} className="p-4 bg-gray-400">
              <h3 className="font-bold text-2xl mb-2">{proj.name}</h3>
            <ReactMarkdown className="text-gray-700 text-xl">
                {proj.description}
            </ReactMarkdown>

              {/* Technologies used at the bottom */}
              <div className="mt-3">
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
              <div className="flex mt-4 gap-2">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-700"
                >
                  <FiExternalLink className="mr-1 size-7" />
                </a>
                <a> <FaGithub className="size-7"/></a>
              </div>}
            </div>
          ))}
        </div>
      )}

    






    </div>
    

  );
}

export default ExperienceProjects;

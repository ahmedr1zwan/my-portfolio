import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

function ExperienceProjects() {
    const [activeTab, setActiveTab] = useState('experience');

    // Sample data (replace with your real data)
    const experiences = [
      { company: "Queen's University Web Development Club", role: "Full Stack Developer (Team Lead)", years: "Jan. 2025 - Present", 
      description:`Leading a team of developers to build a scalable, user-focused web application while managing project timelines and technical development.  
      
- 🔹 **Team Leadership** - Managing a team of 5 developers, delegating tasks, and ensuring smooth collaboration.  
- 🔹 **Technical Development** - Implementing a full-stack solution using **React.js, Tailwind CSS, Node.js, and MongoDB**.  
- 🔹 **Client Collaboration** - Working directly with clients to define project goals and deliver user-centric features.`,
logo: "/icons/qweb.svg" },
      { company: "Queen's University (Residence Life & Services)", role: "Residence Don", years: "Sept. 2023 - Present", 
      description: `Supporting and mentoring university students by fostering a welcoming, inclusive, and engaged residence community.  

- 🔹 **Community Leadership** - Managed a diverse group of students, promoting collaboration and communication.  
- 🔹 **Event Coordination** - Organized activities that encouraged teamwork, problem-solving, and student engagement.  
- 🔹 **Conflict Resolution**  -  Facilitated a supportive living environment by addressing concerns and ensuring inclusivity.`,
logo: "/icons/queens.svg" },
      { company: "Queen's Data Analytics Association", role: "Data Analyst", years: "Sept. 2024 - Dec. 2024", 
      description: `Extracting insights from data to drive decision-making and enhance analytical projects at Queen’s Data Analytics Association.  

- 🔹 **Data Analysis & Interpretation** - Analyzing datasets to uncover trends and provide actionable insights.  
- 🔹 **Programming & Automation** - Utilizing **Python and SQL** to develop efficient, data-driven solutions.  
- 🔹 **Continuous Learning** - Expanding expertise in **machine learning** and advanced analytics through tutorials and workshops.  `,
logo: "/icons/qdaa.svg" },
    ];
  
    // Each project includes name, description, technologies, and a link
    const projects = [
      {
        name: "SlideFlow - AI Presentation Controller",
        description: `SlideFlow is an innovative AI-powered presentation tool designed to enhance the presenting experience with voice-controlled slide navigation, real-time transcription, and interactive audience engagement.

- 🔹 **Voice-Controlled Navigation** - Seamlessly switch slides using **voice commands**, eliminating the need for a physical clicker.
- 🔹 **Real-Time Transcription** - Automatically generate subtitles for better **accessibility** and audience comprehension.
- 🔹 **Smart Interaction** - Integrated voice search and image recognition using the **Web Speech API**, **Google Cloud Vision API**, and **Sentence-BERT**, allowing presenters to retrieve content dynamically.
`,
        technologies: ["React", "Tailwind CSS", "Flask", "Computer Vision", "Google Cloud Vision API", "Sentence-BERT", "Web Speech API"],
        link: "https://devpost.com/software/slideflow",
      },
      {
        name: "Pharmacy POS Management",
        description: `Pharmacy POS Management is a full-featured web application designed to streamline pharmacy inventory and stock management, ensuring efficient and secure operations.

- 🔹 **Inventory Management** - Developed a user-friendly interface in **React & TypeScript** to allow pharmacists to easily add, update, and manage medicine stock.
- 🔹 **Real-Time Database Integration** - Implemented **Firebase** for secure, real-time data storage, ensuring seamless synchronization across multiple users.
- 🔹 **Robust Testing & Code Quality** - Achieved **100% test coverage** for core functionalities using **Jest**, ensuring reliability and preventing regressions.
        `,
        technologies: ["React", "TypeScript", , "Jest", "Firebase"],
        link: "https://github.com/ahmedr1zwan/pharmacy-management",
      }, 
    ];

  return (
    <div id="info">
        <div className="flex p-6 gap-1">
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
        
        {/* Tab Content: EXPERIENCE */}

        {activeTab === "experience" && (
        <div className="flex-row w-2/3 ml-20">
          {experiences.map((exp, index) => (
            <div className="flex border p-6 rounded-xl shadow-xl mb-4">
              <div key={index} className="w-2/3">
                <h3 className="font-bold text-3xl">{exp.company}</h3>
                <p className="text-2xl font-semibold">{exp.role}</p>
                <p className="text-xl text-gray-500">{exp.years}</p>
                <p><ReactMarkdown className="text-gray-700 text-xl">
                  {exp.description}
                </ReactMarkdown></p>
                
              </div>
              <div className="flex justify-center ml-20 w-60">
                <img src={exp.logo} alt="logo"></img> 
              </div>

              
            </div>
          ))}
        </div>
        

     
      )}

      {/* Projects */}

      {activeTab === "projects" && (
        <div className="">
          {projects.map((proj, index) => (
            <div className="mb-4">
            
              <div key={index} className="w-2/3 ml-20 p-6 border rounded-xl shadow-xl">
                <h3 className="font-bold text-2xl">{proj.name}</h3>
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
                <div className="flex gap-2 ">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <FiExternalLink className="mr-1 size-7 mt-2" />
                  </a>
                  {/* <a> <FaGithub className="size-7"/></a> */}
                </div>}
              </div>
          </div>
          ))}
        </div>
      )}

    






    </div>
    

  );
}

export default ExperienceProjects;

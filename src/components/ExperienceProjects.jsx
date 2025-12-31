import React from "react";
import ReactMarkdown from 'react-markdown';
import { FiExternalLink } from 'react-icons/fi';

function ExperienceProjects() {

    const experiences = [
      { 
        company: "Intact Financial Corporation", 
        role: "IT Architect I (Co-op)", 
        years: "May 2025 – Present", 
        location: "Toronto, ON",
        description: `Working as an IT Architect to maintain and enhance enterprise architecture artifacts while developing AI-powered solutions to improve system visibility and accessibility.

- 🔹 **Enterprise Architecture Management** - Maintained and enhanced 500+ enterprise architecture artifacts across 10+ business domains within a centralized repository, improving system visibility, consistency, and traceability for stakeholders.

- 🔹 **AI Innovation** - Led an AI proof-of-concept using **Gemini and Vertex AI Studio** to build a conversational knowledge base over the enterprise architecture repository, enabling natural-language discovery of systems, dependencies, and documentation.

- 🔹 **Process Automation** - Developed **Python-based automations** and **Power Automate workflows** to clean, validate, and de-duplicate architectural data, reducing manual maintenance effort by roughly 40%.`,
        logo: "/icons/intact_logo.svg" 
      },
      { 
        company: "QWeb (Queen's Web Development Club)", 
        role: "Full-Stack Developer", 
        years: "Jan. 2025 – Apr. 2025", 
        location: "Kingston, ON",
        description: `Developing scalable full-stack web applications using modern technologies while optimizing performance and building robust backend services.

- 🔹 **Full-Stack Development** - Developed a scalable full-stack web application using **Next.js, Tailwind CSS**, and a **Go-based backend** to handle core business logic and API services.

- 🔹 **Backend Architecture** - Designed and implemented **RESTful APIs in Go**, integrating with **MongoDB** for data persistence, indexing, and efficient querying.

- 🔹 **Performance Optimization** - Improved backend response times around **20%** by optimizing API handlers, database queries, and data models.`,
        logo: "/icons/qweb.svg" 
      },
      { 
        company: "Queen's University (Residence Life & Services)", 
        role: "Residence Don", 
        years: "Sept. 2023 – Apr. 2025", 
        location: "Kingston, ON",
        description: `Supporting and mentoring university students by fostering a welcoming, inclusive, and engaged residence community.  

- 🔹 **Community Leadership** - Managed a diverse group of students, promoting collaboration and communication.  
- 🔹 **Event Coordination** - Organized activities that encouraged teamwork, problem-solving, and student engagement.  
- 🔹 **Conflict Resolution** - Facilitated a supportive living environment by addressing concerns and ensuring inclusivity.`,
        logo: "/icons/queens.svg" 
      },
    ];
  
    const projects = [
      {
        name: "SlideFlow - AI Presentation Controller",
        subtitle: "QHacks 2025 Winner",
        description: `An AI-powered presentation controller supporting voice-driven slide navigation, live transcription, and semantic search using NLP and computer vision. Built for QHacks 2025 where it won first place.

- 🔹 **Voice-Driven Navigation** - Built an AI-powered presentation controller supporting voice-driven slide navigation, live transcription, and semantic search using **NLP and computer vision**.

- 🔹 **AI Integration** - Integrated **Google Gemini**, **Web Speech API**, and a local **Sentence-BERT model** to process real-time voice commands and retrieve relevant slide content during live presentations.

- 🔹 **Real-Time Processing** - Enabled natural language interaction with presentation content, allowing presenters to navigate and search slides using conversational commands.`,
        technologies: ["React", "Flask", "Gemini AI", "Sentence-BERT", "Web Speech API", "Computer Vision", "NLP"],
        link: "https://devpost.com/software/slideflow",
      },
      {
        name: "OnlyKonnect - Web-Based Logic & Pattern Game",
        description: `A web-based game inspired by the British show Only Connect, featuring custom game logic, state management, and puzzle validation for engaging gameplay.

- 🔹 **Game Development** - Developed a web-based game inspired by the British show Only Connect, implementing custom game logic, state management, and puzzle validation.

- 🔹 **Modern Web Stack** - Built the application using **React Router** and **TypeScript**, with responsive UI components styled using **Tailwind CSS**, and deployed for live gameplay.

- 🔹 **User Experience** - Created an intuitive interface that challenges players with pattern recognition and logical reasoning puzzles.`,
        technologies: ["React", "TypeScript", "Tailwind CSS", "React Router"],
        link: "https://github.com/ahmedr1zwan/onlykonnect_local",
      },
      {
        name: "Transaction Management Backend Service",
        description: `A robust backend service for managing accounts and processing financial transactions with strong consistency guarantees and data integrity.

- 🔹 **Backend Architecture** - Designed and implemented a backend service using **Spring Boot** to manage accounts and process financial transactions with strong consistency guarantees.

- 🔹 **API Development** - Built **RESTful APIs** for account creation, balance updates, and transaction history using **Spring Data JPA** and **PostgreSQL**.

- 🔹 **Data Integrity** - Applied transactional boundaries and validation rules to ensure atomic updates, prevent invalid state transitions, and maintain data integrity.`,
        technologies: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL"],
        link: "https://github.com/ahmedr1zwan/transaction-management-service",
      },
      {
        name: "Camera Surveillance Application",
        description: `A real-time camera surveillance desktop application with motion detection capabilities, built using C++ and Qt for efficient video processing and monitoring.

- 🔹 **Desktop Application Development** - Developed a real-time camera surveillance desktop application using **C++ and Qt**, with a responsive user interface built in **QML** for camera controls and live feed visualization.

- 🔹 **Computer Vision Integration** - Integrated **OpenCV** for motion detection and frame processing, optimizing video handling to reduce unnecessary frame analysis and improve monitoring efficiency.

- 🔹 **Performance Optimization** - Implemented efficient video processing pipelines to ensure smooth real-time monitoring with minimal resource consumption.`,
        technologies: ["C++", "Qt", "QML", "OpenCV"],
        link: "https://github.com/ahmedr1zwan/QtCameraApp",
      },
    ];
    return (
      <>
        {/* Experience Section */}
        <section id="experience" className="pt-8 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-apple-gray-900 mb-4">
              Experience
            </h2>
            <p className="text-lg lg:text-xl text-apple-gray-600 font-light max-w-2xl mx-auto">
              My professional journey and the roles I've held.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-apple-gray-200 hover:border-apple-blue hover:shadow-apple-lg transition-all duration-300 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row p-8 gap-8">
                    {/* Left: Company info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-900 mb-2">
                          {exp.company}
                        </h3>
                        <p className="text-lg md:text-xl font-medium text-apple-gray-700 mb-2">
                          {exp.role}
                        </p>
                        <p className="text-sm md:text-base text-apple-gray-500 font-medium">
                          {exp.years} {exp.location && `• ${exp.location}`}
                        </p>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown className="text-apple-gray-700 text-base md:text-lg leading-relaxed">
                          {exp.description}
                        </ReactMarkdown>
                      </div>
                    </div>

                    {/* Right: Logo */}
                    <div className="flex-shrink-0 flex justify-center md:justify-end items-start">
                      <div className="w-24 h-24 md:w-32 md:h-32 p-4 bg-apple-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-apple-blue/5 transition-colors">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-8 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-apple-gray-900 mb-4">
              Projects
            </h2>
            <p className="text-lg lg:text-xl text-apple-gray-600 font-light max-w-2xl mx-auto">
              A collection of projects I've built and worked on.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <div className="space-y-6">
              {projects.map((proj, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-apple-gray-200 hover:border-apple-blue hover:shadow-apple-lg transition-all duration-300 p-8 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-900 mb-2">
                        {proj.name}
                      </h3>
                      {proj.subtitle && (
                        <p className="text-sm md:text-base text-apple-blue font-medium mb-4">
                          {proj.subtitle}
                        </p>
                      )}
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown className="text-apple-gray-700 text-base md:text-lg leading-relaxed">
                          {proj.description}
                        </ReactMarkdown>
                      </div>
                    </div>

                    {/* Technologies used */}
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.filter(Boolean).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-apple-gray-50 text-apple-gray-700 rounded-full text-xs font-medium border border-apple-gray-200 hover:border-apple-blue hover:bg-apple-blue/5 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project link */}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-apple-blue text-white rounded-full text-sm font-medium hover:bg-apple-blue/90 transition-all duration-200 shadow-apple hover:shadow-apple-lg"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                    {!proj.link && (
                      <p className="text-sm text-apple-gray-500 italic">
                        Private repository
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>

    );
                }

export default ExperienceProjects;

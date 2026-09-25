import MarkerLink from './MarkerLink';
import CollapsibleSection from './CollapsibleSection';
import ReactMarkdown from 'react-markdown';
import { FiExternalLink } from 'react-icons/fi';

function ExperienceProjects() {

    const experiences = [
      {
        company: "Intact",
        website: "https://www.intactfc.com/",
        role: "Software Developer Intern – Enterprise Architecture",
        years: "May 2025 – Aug. 2026",
        location: "Toronto, ON",
        description: `Owned the design and delivery of an internal platform built with **React, TypeScript, Python, and PostgreSQL**, helping architects and engineers search and visualize metadata across **1,000+ enterprise systems**.`,
        logo: "/icons/intact_logo.svg"
      },
      {
        company: "QWeb (Queen’s Web Development Club)",
        role: "Full-Stack Developer, Team Lead",
        years: "Oct. 2024 – Apr. 2025",
        location: "Kingston, ON",
        description: `Led developers and designers through a multi-month client engagement, owning technical direction and coordinating delivery of a full-stack web application.`,
        logo: "/icons/qweb.svg"
      },
      {
        company: "Queen’s University",
        role: "Residence Don (Residence Advisor)",
        years: "Sept. 2023 – Apr. 2025",
        location: "Kingston, ON",
        description: `Supported **50+ residents** through community events, student guidance, and conflict resolution.`,
        logo: "/icons/queens.svg"
      },
    ];

    const projects = [
      {
        name: "flagctl",
        subtitle: "Feature Flag Service, CLI & Terraform Provider",
        date: "Sept. 2026",
        description: `A feature-flag service with a versioned, backward-compatible REST API and a **Cobra CLI** for creating, listing, and toggling flags across environments, with JSON and table output.

Built a **Terraform provider** using the Terraform Plugin Framework so flags can be managed as infrastructure as code. Includes unit and acceptance tests, GitHub Actions CI, and binaries published with GoReleaser.`,
        technologies: ["Go", "Cobra", "Terraform", "Docker", "GitHub Actions"],
        link: "https://github.com/ahmedr1zwan/flagctl",
      },
      {
        name: "FashionABLE",
        subtitle: "AI Smart Mirror & Stylist · QHacks 2026",
        date: "Jan. 2026",
        description: `An AI-powered smart mirror for inclusive styling, with webcam outfit overlays, generated virtual try-ons, a filterable wardrobe, and a metadata-tagged gallery.

Integrated **Google Gemini** for multimodal styling advice and **Gradium** for voice interaction, with Firebase Auth, Firestore, and Storage for authentication and persistence.`,
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini", "Gradium", "Firebase"],
        link: "https://github.com/ahmedr1zwan/fashion-able",
      },
      {
        name: "Camera Surveillance Application",
        subtitle: "Qt;Athon 2025 · 2nd of 138 Teams",
        date: "Dec. 2025",
        description: `A real-time desktop surveillance application built with **C++ and Qt**, with a responsive QML interface for camera controls and live feeds.

Integrated **OpenCV** for motion detection and frame processing, optimizing video handling to reduce unnecessary frame analysis and improve monitoring efficiency.`,
        technologies: ["C++", "Qt", "QML", "OpenCV"],
        link: "https://github.com/ahmedr1zwan/QtCameraApp",
      },
      {
        name: "Transaction Management Backend Service",
        date: "May 2025",
        description: `A **Spring Boot** backend for managing accounts and processing financial transactions with strong consistency guarantees.

Built REST APIs for account creation, balance updates, and transaction history using **Spring Data JPA and PostgreSQL**, with transactional boundaries to ensure atomic updates and data integrity.`,
        technologies: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL"],
        link: "https://github.com/ahmedr1zwan/transaction-management-service",
      },
      {
        name: "SlideFlow",
        subtitle: "AI Presentation Controller · QHacks 2025 Winner",
        date: "Jan. 2025",
        description: `An AI-powered presentation controller for voice-driven slide navigation, live transcription, and semantic search using NLP and computer vision.

Combined **Google Gemini**, the **Web Speech API**, and a local **Sentence-BERT** model to process real-time voice commands and retrieve relevant slide content during live presentations.`,
        technologies: ["React", "Flask", "Gemini AI", "Sentence-BERT", "Web Speech API"],
        link: "https://devpost.com/software/slideflow",
      },
    ];
    return (
      <>
        {/* Experience Section */}
        <CollapsibleSection id="experience" title="Experience">
          <div className="max-w-5xl mx-auto">
            <div className="entry-list">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="experience-entry"

                >
                  <div className="experience-content">
                    {/* Left: Company info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-900 mb-2">
                          {exp.website ? <MarkerLink href={exp.website}>{exp.company}</MarkerLink> : exp.company}
                        </h3>
                        <p className="text-lg md:text-xl font-medium text-apple-gray-700 mb-2">
                          {exp.role}
                        </p>
                        <p className="text-sm md:text-base text-apple-gray-500 font-medium">
                          {exp.years} {exp.location && `• ${exp.location}`}
                        </p>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        <div className="text-apple-gray-700 text-base md:text-lg leading-relaxed [&>p+p]:mt-4 [&>ul]:mt-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mt-3">
                          <ReactMarkdown>{exp.description}</ReactMarkdown>
                        </div>
                      </div>
                    </div>

                    {/* Right: Logo */}
                    <div className="company-logo">
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
        </CollapsibleSection>

        {/* Projects Section */}
        <CollapsibleSection id="projects" title="Projects">
          <div className="max-w-5xl mx-auto">
            <div className="project-list">
              {projects.map((proj) => (
                <div
                  key={proj.name}
                  className="project-entry"

                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-900 mb-2">
                        {proj.name}
                      </h3>
                      <p className="text-sm text-apple-gray-600 mb-3">{proj.date}</p>
                      {proj.subtitle && (
                        <p className="text-sm md:text-base text-apple-blue font-medium mb-4">
                          {proj.subtitle}
                        </p>
                      )}
                      <div className="prose prose-sm max-w-none">
                        <div className="text-apple-gray-700 text-base md:text-lg leading-relaxed [&>p+p]:mt-4 [&>ul]:mt-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mt-3">
                          <ReactMarkdown>{proj.description}</ReactMarkdown>
                        </div>
                      </div>
                    </div>

                    {/* Technologies used */}
                    <div className="project-tags">
                      {proj.technologies.filter(Boolean).map((tech) => (
                        <span
                          key={tech}

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
                        className="project-link"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        {proj.link.includes('github.com') ? 'Source code' : 'Project details'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>
      </>

    );
                }

export default ExperienceProjects;

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C++', 'Go', 'JavaScript', 'TypeScript', 'C', 'SQL', 'Bash', 'Haskell', 'Prolog'],
  },
  {
    title: 'Frameworks & APIs',
    skills: ['React', 'Next.js', 'FastAPI', 'Flask', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'AWS (S3, Lambda, Bedrock, AgentCore)', 'GCP (Gemini, Vertex AI)'],
  },
  {
    title: 'Tools & Delivery',
    skills: ['Git', 'Docker', 'CI/CD', 'Terraform', 'GitHub Actions', 'Agile'],
  },
];

const Techno = () => {
  return (
    <section id="technologies" className="pt-8 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="section-heading mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-apple-gray-900 mb-3">
          Skills
        </h2>
      </div>

      <div className="skill-list">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-row">
            <h3 className="skill-label">{group.title}</h3>
            <ul className="skill-values">
              {group.skills.map((skill) => (
                <li key={skill} >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techno;

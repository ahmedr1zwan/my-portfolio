import CollapsibleSection from './CollapsibleSection';

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
    <CollapsibleSection id="technologies" title="Skills">
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
    </CollapsibleSection>
  );
};

export default Techno;

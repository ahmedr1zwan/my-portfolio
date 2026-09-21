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
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-apple-gray-900 mb-3">
          Skills
        </h2>
        <p className="text-lg text-apple-gray-600 font-light max-w-2xl mx-auto">
          Technologies I use to build, ship, and maintain software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-apple-gray-200 p-6">
            <h3 className="text-base font-semibold text-apple-gray-900 mb-4">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="px-3 py-1.5 bg-apple-gray-50 text-apple-gray-700 rounded-full text-sm">
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

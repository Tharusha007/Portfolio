// Edit this file to update your personal content. Keep claims supported by evidence.
export const profile = {
  name: 'Tharusha Pasan Hanwella', shortName: 'Tharusha Hanwella',
  identity: 'Business Analyst | IT Professional | Information Systems Undergraduate',
  email: 'tharushahanwella4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tharusha-hanwella-3553422a0',
  github: 'https://github.com/Tharusha007', location: 'Sri Lanka',
  portrait: '/images/tharusha-portrait.webp', portraitSmall: '/images/tharusha-portrait-480.webp',
  portraitFallback: '/images/tharusha-portrait.jpg', resume: '/documents/Tharusha-Hanwella-Resume.pdf',
  introduction: 'I’m Tharusha, an emerging Business Analyst and IT professional connecting business requirements, people, and practical technology solutions.',
  about: [
    'I’m an Information Systems undergraduate pursuing a BSc (Hons) in Information Technology for Business at NIBM, affiliated with Coventry University, UK. I’m interested in the work that happens between understanding a problem and building the right solution.',
    'At Softwatch InfoSys, I work with banking users and development teams: listening to operational issues, making requirements clearer, testing functionality, and writing guidance that people can use.',
    'My academic projects bring that same interest into system design, Agile delivery, and business environment analysis. I’m also developing my foundation in SQL, data analytics, and business intelligence.'
  ],
};
export const navigation = [
  ['home', 'Home'], ['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'],
  ['skills', 'Skills'], ['education', 'Education'], ['contact', 'Contact']
] as const;
export const experience = {
  company: 'Softwatch InfoSys (Pvt) Ltd', role: 'Intern Business Analyst', dates: 'May 2026 — Present',
  introduction: 'Helping banking users and development teams understand each other, with clear requirements and careful testing.',
  responsibilities: [
    { title: 'Understand the operational problem', text: 'Analyse user complaints and day-to-day banking software issues to understand what needs to change.' },
    { title: 'Make the requirement clear', text: 'Act as a communication link between bank users and developers, translating operational issues into clear developer instructions.' },
    { title: 'Test the experience', text: 'Test banking software functionality, identify defects, and evaluate usability to support software improvements.' },
    { title: 'Support the people using it', text: 'Write straightforward guides to help banking staff understand and use the software.' }
  ],
};
export const skills = [
  { title: 'Business analysis', description: 'From business needs to actionable requirements.', items: ['Requirements elicitation', 'Stakeholder communication', 'Business process mapping', 'User stories', 'Acceptance criteria', 'SWOT & PESTLE', 'Stakeholder analysis'] },
  { title: 'System design', description: 'Making workflows and system relationships visible.', items: ['Use Case diagrams', 'Activity diagrams', 'Class diagrams', 'ER diagrams', 'Wireframing', 'Figma', 'Draw.io'] },
  { title: 'Data & business intelligence', description: 'A technical foundation for understanding information.', items: ['SQL Server', 'MySQL', 'Oracle', 'SQLite', 'Power BI', 'Excel', 'Business intelligence', 'Data warehousing', 'Statistics'] },
  { title: 'Delivery & collaboration', description: 'Keeping people, requirements, and work connected.', items: ['Agile / Scrum', 'Sprint planning', 'Backlog management', 'Jira', 'Software testing', 'Documentation', 'Cross-functional teamwork', 'Analytical problem-solving'] },
  { title: 'Technical foundation', description: 'Understanding the technology behind a solution.', items: ['HTML', 'CSS', 'C', 'C#', 'Oracle APEX AI', 'CI/CD concepts', 'MS Office'] }
];
export const education = [
  { dates: 'Ongoing', title: 'BSc (Hons) in Information Technology for Business', institution: 'NIBM · Coventry University, UK', detail: 'Current undergraduate programme.', current: true },
  { dates: 'Apr 2025 — Apr 2026', title: 'Higher Diploma in Information Systems', institution: 'National Institute of Business Management', detail: 'Business Analysis · Agile & DevOps · ERP · Data Warehousing · Data Management' },
  { dates: 'Mar 2023 — Apr 2024', title: 'Diploma in System Design', institution: 'National Institute of Business Management', detail: 'Web technologies · IoT · SQL · Analytical skills · Microsoft Office' },
  { dates: 'Aug 2022 — Feb 2023', title: 'Certificate Course in Computer Science', institution: 'National Institute of Business Management', detail: 'C programming · HTML · Databases' },
  { dates: 'Jan 2014 — Nov 2022', title: 'Secondary education · G.C.E. Ordinary Level', institution: 'Wesley College, Colombo 09', detail: 'Completed G.C.E. Ordinary Level examinations.' }
];
// These labels are in the résumé; no credential IDs, issuers, or dates are invented.
export const certifications = ['Oracle APEX AI', 'Computer Science', 'Oracle Cloud & Databases'];
export const community = { title: 'Rotaract NIBM committee', dates: 'Aug 2025 — Present', description: 'Active member, contributing to event organisation, community projects, and stakeholder communication.', languages: 'English & Sinhala' };

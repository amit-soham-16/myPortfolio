
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';

const experiences = [
  {
    title: "Walmart Virtual Experience Program",
    company: "Walmart",
    location: "Remote",
    date: "December 2024",
    description: [
      "Built custom data structures (Heap, HashMap) in Java, optimizing performance by 20%",
      "Designed an entity-relationship model for a retail database system",
      "Solved real-world software engineering challenges simulating industry problems"
    ]
  },
  {
    title: "B P Poddar Institute of Management and Technology",
    company: "Bachelor of Technology in Computer Science",
    location: "Kolkata, WB",
    date: "June 2022 - Present",
    description: [
      "Current GPA: 7.44 (till 5th Semester)",
      "Focused on Computer Science fundamentals, Data Structures & Algorithms",
      "Participated in hackathons and coding competitions",
      "Developed projects using Java, Spring Boot, and React"
    ]
  },
  {
    title: "British English School",
    company: "Higher Secondary Education",
    location: "Gaya, Bihar",
    date: "Completed April 2022",
    description: [
      "Achieved 71.6% in Higher Secondary Education",
      "Completed Science stream with Computer Science",
      "Participated in school-level technical competitions"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          subtitle="Experience" 
          title="My Professional Journey"
          description="A chronological record of my professional experience, education, and the skills I've developed along the way."
          centered
        />
        
        <div className="relative mt-16">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                date={exp.date}
                description={exp.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

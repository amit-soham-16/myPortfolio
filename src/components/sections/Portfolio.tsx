
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: "Realtime Chat Application",
    description: "Real-time messaging with WebSocket, supporting 50+ concurrent users with 99.9% uptime and reduced latency.",
    image: "https://www.shawndsilva.com/public/assets/images/TypingEvents.png",
    technologies: ["ReactJS", "Java", "Spring Boot", "Maven", "WebSocket"],
    githubLink: "https://github.com/amit-soham-16/Realtime-ChatApplication"
  },
  {
    title: "Bank Management System",
    description: "Banking system with account creation, transactions, and user management for 100+ accounts with secure authentication.",
    image: "https://www.sourcecodester.com/sites/default/files/images/oretnom23/php-bannk-login.png",
    technologies: ["Java (AWT, Swing)", "MySQL"],
    githubLink: "https://github.com/amit-soham-16/Bank-Management-System/tree/master"
  },
  {
    title: "Face Mask Detection",
    description: "Real-time AI-based face mask detection system with 70%+ accuracy, trained on 5,000+ labeled images.",
    image: "https://pyimagesearch.com/wp-content/uploads/2020/05/face_mask_detection_featured.jpg",
    technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
    githubLink: "https://github.com/amit-soham-16/Face-Mask-Detection/tree/master"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <SectionTitle 
          subtitle="Portfolio" 
          title="My Recent Projects"
          description="Explore some of my latest projects showcasing my skills in Java development and modern web technologies."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

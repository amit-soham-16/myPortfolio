
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedButton from '../ui/AnimatedButton';
import { Download } from 'lucide-react';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'JavaScript', level: 80 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'MySQL', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'Python', level: 75 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <SectionTitle 
          subtitle="About Me" 
          title="Know Me More"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-2xl font-bold">
              I'm <span className="text-primary">Amit Kumar</span>, a Java Fullstack Developer
            </h3>
            
            <p className="text-muted-foreground">
              I am a passionate software developer pursuing my Bachelor of Technology in Computer Science at B P Poddar Institute of Management and Technology. With a strong foundation in Java development and modern web technologies, I specialize in building robust, scalable applications.
            </p>
            
            <p className="text-muted-foreground">
              My technical expertise includes Java, Spring Boot, ReactJS, and database systems like MySQL and MongoDB. I have experience developing real-time applications, management systems, and implementing secure authentication methods. I'm committed to writing clean, efficient code and continuously improving my skills through problem-solving and certification courses.
            </p>
            
            <AnimatedButton 
              href="Resume.pdf" 
              variant="primary"
              icon={<Download size={18} />}
            >
              Download Resume
            </AnimatedButton>
          </div>
          
          <div className="glass-card p-8 animate-fade-in-right">
            <h3 className="text-xl font-bold mb-6">My Skills</h3>
            
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import CertificateCard from '../ui/CertificateCard';

const certificates = [
  {
    title: "Java Foundations: Mastering the Basics",
    issuer: "Udemy",
    date: "October 2023",
    viewLink: "https://www.udemy.com/certificate/UC-30cfc0b2-49b2-4c18-bda3-46e0261e6a4b/"
  },
  {
    title: "ReactJS for Ecommerce: Building a Store with ReactJS",
    issuer: "Coursera",
    date: "July 2023",
    viewLink: "https://www.udemy.com/certificate/UC-de2457a3-f0b3-449c-a5f5-9258d50f2438/"
  },
  {
    title: "MongoDB: The Complete MongoDB Developers Course",
    issuer: "MongoDB University",
    date: "March 2023",
    viewLink: "https://www.udemy.com/certificate/UC-98880367-10b5-4c96-80d3-956e850bfa10/"
  },
  {
    title: "Google Developer Student Club: HTML, CSS, and JavaScript",
    issuer: "Google",
    date: "January 2023",
    viewLink: "https://drive.google.com/file/d/1UmXqawInPSoZySSRCqcT6WDWHhGfTPD9/view"
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <SectionTitle 
          subtitle="Certifications" 
          title="Professional Credentials"
          description="A collection of certifications that validate my technical knowledge and expertise."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {certificates.map((cert, index) => (
            <CertificateCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              viewLink={cert.viewLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

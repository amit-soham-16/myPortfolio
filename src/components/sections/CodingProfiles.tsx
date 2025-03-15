
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProfileCard from '../ui/ProfileCard';

const profiles = [
  {
    title: "LeetCode",
    username: "amit_soham",
    stats: [
      { label: "Problems", value: "200+" },
      { label: "Contest", value: "10+" }
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/amit_soham"
  },
  {
    title: "GeeksforGeeks",
    username: "amit_soham",
    stats: [
      { label: "Problems", value: "150+" },
      { label: "Articles", value: "5+" }
    ],
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3-300x300.png",
    link: "https://www.geeksforgeeks.org/user/amit_soham"
  },
  {
    title: "HackerRank",
    username: "amit_soham",
    stats: [
      { label: "Problems", value: "100+" },
      { label: "Badges", value: "8+" }
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png",
    link: "https://www.hackerrank.com/amit_soham"
  },
  {
    title: "GitHub",
    username: "kumaramit02",
    stats: [
      { label: "Repos", value: "15+" },
      { label: "Projects", value: "6+" }
    ],
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/amit-soham-16"
  }
];

const CodingProfiles: React.FC = () => {
  return (
    <section id="coding" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          subtitle="Coding Profiles" 
          title="My Competitive Coding Journey"
          description="Check out my profiles on various competitive coding platforms where I've solved 200+ coding problems, improving my problem-solving abilities."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {profiles.map((profile, index) => (
            <ProfileCard 
              key={index}
              title={profile.title}
              username={profile.username}
              stats={profile.stats}
              image={profile.image}
              link={profile.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

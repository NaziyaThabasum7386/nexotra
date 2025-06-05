import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';

function ProfileData() {
  const profiles = [
    {
      name: "Jane Doe",
      aboutMe: "Frontend developer passionate about creating beautiful user experiences",
      socialLinks: [
        { type: 'instagram', url: 'https://instagram.com' },
        { type: 'twitter', url: 'https://twitter.com' },
        { type: 'github', url: 'https://github.com' }
      ]
    },
    {
      name: "John Smith",
      aboutMe: "Fullstack engineer who loves backend performance and frontend polish",
      socialLinks: [
        { type: 'github', url: 'https://github.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "Emily Stone",
      aboutMe: "UI/UX designer with a flair for minimalism and motion design",
      socialLinks: [
        { type: 'instagram', url: 'https://instagram.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "Liam Park",
      aboutMe: "React expert building fast, accessible web apps at scale",
      socialLinks: [
        { type: 'github', url: 'https://github.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    },
    {
      name: "Sophia Lee",
      aboutMe: "Creative coder blending art and interactivity in digital spaces",
      socialLinks: [
        { type: 'instagram', url: 'https://instagram.com' },
        { type: 'github', url: 'https://github.com' }
      ]
    },
    {
      name: "Ethan Wright",
      aboutMe: "DevOps & cloud enthusiast automating everything possible",
      socialLinks: [
        { type: 'github', url: 'https://github.com' },
        { type: 'twitter', url: 'https://twitter.com' }
      ]
    }
  ];

  return (
    <div className="min-h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            aboutMe={profile.aboutMe}
            socialLinks={profile.socialLinks}
            onMailClick={() => alert(`Mail clicked for ${profile.name}`)}
            onContactClick={() => alert(`Contact clicked for ${profile.name}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileData;

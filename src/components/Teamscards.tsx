import React from 'react';
import { Mail, Github, Twitter, Instagram } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';

const profiles = [
  {
    name: "John Doe",
    about: "Frontend Developer passionate about creating beautiful user interfaces",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: {
      instagram: "https://instagram.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  {
    name: "Jane Smith",
    about: "UI/UX Designer with a keen eye for detail and user experience",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: {
      instagram: "https://instagram.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith"
    }
  },
  {
    name: "Mike Johnson",
    about: "Full Stack Developer specializing in React and Node.js applications",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    social: {
      instagram: "https://instagram.com/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
      github: "https://github.com/mikejohnson"
    }
  }
];

function Teamscards() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-wrap gap-8 justify-center">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
}

export default Teamscards;
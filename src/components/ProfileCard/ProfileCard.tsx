import React from 'react';
import ProfilePicture from './ProfilePicture';
import SocialLinks from './SocialLinks';
import { Mail } from 'lucide-react';

interface SocialLink {
  type: 'instagram' | 'twitter' | 'github';
  url: string;
}

interface ProfileCardProps {
  name: string;
  aboutMe: string;
  socialLinks: SocialLink[];
  onMailClick?: () => void;
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  aboutMe,
  socialLinks,
  onMailClick,
  onContactClick
}) => {
  return (
    <div className="relative w-[280px] h-[280px] bg-white rounded-[32px] p-1 shadow-[0_70px_30px_-50px_rgba(96,75,74,0.188)] transition-all duration-100 ease-in-out group overflow-hidden">
      {/* Mail Button */}
      <button
        className="absolute right-8 top-6 z-40 cursor-pointer bg-transparent border-none"
        onClick={onMailClick}
      >
        <Mail
          size={24}
          className="stroke-[#fbb9b6] stroke-[3px] transition-colors duration-300 group-hover:stroke-[#f55d56]"
        />
      </button>

      {/* Profile Picture */}
      
      <div className="absolute top-1 left-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] rounded-[29px] z-10 border-0 overflow-hidden transition-all duration-500 delay-200 group-hover:w-[100px] group-hover:h-[100px] group-hover:top-[10px] group-hover:rounded-full group-hover:z-30 group-hover:border-[7px] group-hover:border-[#c957eb75] group-hover:shadow-[0_5px_5px_0_rgba(96,75,74,0.19)] hover:scale-[1.3] hover:rounded-none">
        <ProfilePicture />
      </div>

      {/* Bottom Panel (Reveals on Hover) */}
      <div className="absolute bottom-1 left-1 right-1 top-[80%] bg-custom-profile rounded-[29px] z-20 shadow-inner transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)] group-hover:top-[20%] group-hover:rounded-tl-[80px] overflow-hidden">
        
        {/* Name + AboutMe — Initially clipped, revealed on hover */}
        <div className="absolute bottom-[60px] left-6 right-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="block text-white text-lg font-bold">{name}</span>
          <span className="block text-white text-sm mt-4">{aboutMe}</span>
        </div>

        {/* Socials + Contact Button */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
          <div className="flex gap-4">
            <SocialLinks links={socialLinks} />
          </div>
          <button
            onClick={onContactClick}
            className="bg-white text-[#fbb9b6] rounded-[20px] text-xs px-2 py-1 shadow-md hover:bg-[#f55d56] hover:text-white transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

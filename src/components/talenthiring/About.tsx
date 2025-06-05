import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={aboutRef} 
          className="flex flex-col md:flex-row items-center opacity-0 transition-opacity duration-1000"
        >
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <img 
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Strategic planning session" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">The TalentSphere Advantage</h2>
            <p className="text-gray-600 mb-8 text-lg">
              In today's competitive landscape, having the right talent can make all the difference. 
              Our innovative approach combines deep industry knowledge with cutting-edge recruitment 
              strategies to connect you with exceptional professionals who will drive your organization forward.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Data-Driven Insights</h3>
                  <p className="text-gray-600">
                    Leverage advanced analytics and market intelligence to make informed hiring decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Tailored Solutions</h3>
                  <p className="text-gray-600">
                    Custom recruitment strategies designed to meet your unique organizational challenges.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Global Reach</h3>
                  <p className="text-gray-600">
                    Access to an extensive network of professionals across industries and regions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">Proven Success</h3>
                  <p className="text-gray-600">
                    Track record of successful placements with high retention rates and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
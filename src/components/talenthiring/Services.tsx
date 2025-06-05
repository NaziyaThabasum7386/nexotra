import React, { useEffect, useRef } from 'react';
import { 
  Search, 
  Users, 
  Clock, 
  Briefcase, 
  UserCheck, 
  LineChart 
} from 'lucide-react';
import ServiceCard from '../talenthiring/ServiceCard';

const services = [
  {
    id: 1,
    title: 'Strategic Role Analysis',
    description: 'Our expert team develops comprehensive role profiles that align with your organizational goals and culture.',
    icon: Search
  },
  {
    id: 2,
    title: 'Precision Talent Matching',
    description: 'Using advanced assessment methods, we identify candidates whose skills and values perfectly align with your needs.',
    icon: Users
  },
  {
    id: 3,
    title: 'Accelerated Recruitment',
    description: 'Our efficient processes ensure swift placement of top talent without compromising on quality.',
    icon: Clock
  },
  {
    id: 4,
    title: 'Cross-Industry Expertise',
    description: 'Specialized recruiters with deep knowledge across technology, finance, healthcare, and other key sectors.',
    icon: Briefcase
  },
  {
    id: 5,
    title: 'Elite Talent Network',
    description: 'Access to an exclusive pool of pre-vetted professionals ready to make an impact in your organization.',
    icon: UserCheck
  },
  {
    id: 6,
    title: 'Success Metrics Tracking',
    description: 'Comprehensive analytics and regular check-ins ensure optimal placement success and employee satisfaction.',
    icon: LineChart
  }
];

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={servicesRef}
          className="text-center mb-16 opacity-0 transition-opacity duration-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Our Expertise</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover how our innovative talent solutions can transform your workforce and drive organizational excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
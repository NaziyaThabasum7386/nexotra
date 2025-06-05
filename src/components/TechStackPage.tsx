import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Server, Cloud, PenTool as Tool, Cpu, Layers, Repeat,
  Smartphone, Globe, ShieldCheck, LineChart, PenTool, Boxes, GitBranch, Folder
} from 'lucide-react';

import Hero from './Herotech';
import TechSection from './TechSection';

// Define tech stacks
const techStacks = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Creating responsive, interactive, and performant user interfaces with modern technologies.',
    technologies: [
      {
        id: 'react',
        name: 'React',
        icon: <Code size={24} />,
        description: 'Building interactive UIs with component-based architecture and virtual DOM for optimal performance.',
        skillLevel: 5,
        color: 'blue'
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        icon: <PenTool size={24} />,
        description: 'Utility-first CSS framework for rapidly building custom designs without leaving your HTML.',
        skillLevel: 5,
        color: 'teal'
      },
      {
        id: 'redux',
        name: 'Redux',
        icon: <Repeat size={24} />,
        description: 'Predictable state container for JavaScript apps, helping manage application state consistently.',
        skillLevel: 4,
        color: 'purple'
      },
      {
        id: 'responsive',
        name: 'Responsive Design',
        icon: <Smartphone size={24} />,
        description: 'Creating flexible layouts that adapt to any device size with mobile-first approach.',
        skillLevel: 5,
        color: 'pink'
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        icon: <Globe size={24} />,
        description: 'React framework enabling server-side rendering, static site generation, and optimized production builds.',
        skillLevel: 3,
        color: 'blue'
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: <Code size={24} />,
        description: 'Strongly typed programming language that builds on JavaScript for better tooling and error prevention.',
        skillLevel: 4,
        color: 'blue'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Building robust, scalable server-side applications and APIs to power your business.',
    technologies: [
      {
        id: 'nodejs',
        name: 'Node.js',
        icon: <Server size={24} />,
        description: 'JavaScript runtime built on Chrome\'s V8 engine for building fast and scalable network applications.',
        skillLevel: 5,
        color: 'green'
      },
      {
        id: 'express',
        name: 'Express.js',
        icon: <Layers size={24} />,
        description: 'Fast, unopinionated, minimalist web framework for Node.js, ideal for APIs and web applications.',
        skillLevel: 5,
        color: 'green'
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        icon: <Database size={24} />,
        description: 'Document-oriented NoSQL database for high volume data storage with flexible schema design.',
        skillLevel: 4,
        color: 'green'
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: <Database size={24} />,
        description: 'Powerful, open source object-relational database system with strong reputation for reliability.',
        skillLevel: 4,
        color: 'blue'
      },
      {
        id: 'graphql',
        name: 'GraphQL',
        icon: <Boxes size={24} />,
        description: 'Query language for APIs enabling clients to request exactly the data they need, nothing more.',
        skillLevel: 4,
        color: 'pink'
      },
      {
        id: 'rest',
        name: 'RESTful APIs',
        icon: <Globe size={24} />,
        description: 'Building standardized, stateless APIs adhering to REST principles for scalable integration.',
        skillLevel: 5,
        color: 'orange'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Automating and optimizing the development lifecycle with continuous integration and delivery.',
    technologies: [
      {
        id: 'docker',
        name: 'Docker',
        icon: <Boxes size={24} />,
        description: 'Platform for developing, shipping, and running applications in containers for consistency across environments.',
        skillLevel: 5,
        color: 'blue'
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        icon: <Boxes size={24} />,
        description: 'Container orchestration system for automating application deployment, scaling, and management.',
        skillLevel: 4,
        color: 'blue'
      },
      {
        id: 'cicd',
        name: 'CI/CD Pipelines',
        icon: <Repeat size={24} />,
        description: 'Automating testing and deployment with tools like GitHub Actions, Jenkins, and GitLab CI.',
        skillLevel: 5,
        color: 'green'
      },
      {
        id: 'terraform',
        name: 'Terraform',
        icon: <Server size={24} />,
        description: 'Infrastructure as code tool for building, changing, and versioning infrastructure safely and efficiently.',
        skillLevel: 4,
        color: 'purple'
      },
      {
        id: 'monitoring',
        name: 'Monitoring & Alerting',
        icon: <LineChart size={24} />,
        description: 'Implementing comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack.',
        skillLevel: 4,
        color: 'red'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud',
    description: 'Leveraging cloud platforms to build scalable, resilient, and cost-effective infrastructure.',
    technologies: [
      {
        id: 'aws',
        name: 'AWS',
        icon: <Cloud size={24} />,
        description: 'Building on Amazon Web Services with EC2, S3, Lambda, DynamoDB, and more for scalable applications.',
        skillLevel: 5,
        color: 'orange'
      },
      {
        id: 'azure',
        name: 'Azure',
        icon: <Cloud size={24} />,
        description: 'Microsoft\'s cloud computing platform for building, testing, deploying, and managing applications.',
        skillLevel: 4,
        color: 'blue'
      },
      {
        id: 'gcp',
        name: 'Google Cloud',
        icon: <Cloud size={24} />,
        description: 'Suite of cloud computing services running on the same infrastructure as Google products.',
        skillLevel: 4,
        color: 'red'
      },
      {
        id: 'serverless',
        name: 'Serverless',
        icon: <Cpu size={24} />,
        description: 'Building applications with functions as a service (FaaS) for reduced operational complexity.',
        skillLevel: 5,
        color: 'yellow'
      },
      {
        id: 'security',
        name: 'Cloud Security',
        icon: <ShieldCheck size={24} />,
        description: 'Implementing security best practices for cloud environments with IAM, encryption, and compliance.',
        skillLevel: 4,
        color: 'green'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Essential tools and utilities that enhance our development workflow and productivity.',
    technologies: [
      {
        id: 'git',
        name: 'Git',
        icon: <GitBranch size={24} />,
        description: 'Distributed version control system for tracking changes and collaborating on code.',
        skillLevel: 5,
        color: 'orange'
      },
      {
        id: 'vscode',
        name: 'VS Code',
        icon: <Code size={24} />,
        description: 'Lightweight but powerful source code editor with extensive ecosystem of extensions.',
        skillLevel: 5,
        color: 'blue'
      },
      {
        id: 'npm',
        name: 'NPM/Yarn',
        icon: <Folder size={24} />,
        description: 'Package managers for the JavaScript programming language for dependency management.',
        skillLevel: 5,
        color: 'red'
      },
      {
        id: 'jira',
        name: 'Jira',
        icon: <Tool size={24} />,
        description: 'Issue and project tracking tool for agile development teams with customizable workflows.',
        skillLevel: 4,
        color: 'blue'
      },
      {
        id: 'figma',
        name: 'Figma',
        icon: <PenTool size={24} />,
        description: 'Collaborative interface design tool for creating UI/UX designs and prototypes.',
        skillLevel: 4,
        color: 'purple'
      }
    ]
  }
];

const TechStackPage: React.FC = () => {
  const [filteredTechStacks, setFilteredTechStacks] = useState(techStacks);
  const [filterQuery, setFilterQuery] = useState('');

  const handleFilterChange = (query: string) => {
    setFilterQuery(query);

    if (!query) {
      setFilteredTechStacks(techStacks);
      return;
    }

    const lowercasedQuery = query.toLowerCase();

    const filtered = techStacks.map(section => {
      const filteredTechnologies = section.technologies.filter(tech =>
        tech.name.toLowerCase().includes(lowercasedQuery) ||
        tech.description.toLowerCase().includes(lowercasedQuery)
      );

      if (filteredTechnologies.length > 0) {
        return {
          ...section,
          technologies: filteredTechnologies
        };
      }
      return null;
    }).filter(Boolean) as typeof techStacks;

    setFilteredTechStacks(filtered);
  };

  return (
    <div className="bg-white text-gray-900">
      <div className="relative py-20 flex justify-center overflow-hidden">
  <div className="absolute inset-0 bg-white">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
  </div>
  <div className="container mx-auto px-4 relative z-10 text-center">
    
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Our <span className="bg-clip-text text-transparent bg-custom-gradient">Tech Stack</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
        Leveraging cutting-edge technologies to build scalable, efficient, and innovative solutions for our clients.
      </p>
    
  </div>
</div>


      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 lg:px-8 pt-0 pb-16">
        {filteredTechStacks.length > 0 ? (
          filteredTechStacks.map((section, index) => (
            <TechSection
              key={section.id}
              title={section.title}
              description={section.description}
              technologies={section.technologies}
              index={index}
            />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-semibold mb-4">No technologies found</h3>
            <p className="text-gray-600">
              No technologies match your search for "{filterQuery}". Try a different search term.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default TechStackPage;

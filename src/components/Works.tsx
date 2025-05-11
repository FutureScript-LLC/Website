import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import Button from './ui/Button';

const projects = [
  {
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial analytics platform built with React and D3.js, processing millions of transactions in real-time.',
    image: 'https://images.pexels.com/photos/7681098/pexels-photo-7681098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'D3.js', 'AWS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'HealthTech Platform',
    description: 'HIPAA-compliant telehealth platform enabling secure video consultations and medical record management.',
    image: 'https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Node.js', 'WebRTC', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'E-commerce Solution',
    description: 'Scalable e-commerce platform handling 100k+ daily transactions with real-time inventory management.',
    image: 'https://images.pexels.com/photos/18069362/pexels-photo-18069362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-700 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex space-x-2">
            <a 
              href={project.liveUrl}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label="View live site"
            >
              <ExternalLink className="w-5 h-5 text-gray-900" />
            </a>
            <a 
              href={project.githubUrl}
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              aria-label="View source code"
            >
              <Github className="w-5 h-5 text-gray-900" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="works" 
      className="py-16 md:py-24 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Projects</h2>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful software solutions delivered to clients across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div 
          className={`text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <Button variant="primary" size="large">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Works;
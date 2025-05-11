import React, { useEffect, useRef } from 'react';
import { Code2, Database, Globe, Smartphone, Shield, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: <Code2 className="w-10 h-10 p-2 bg-blue-100 text-blue-600 rounded-lg" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js.'
  },
  {
    icon: <Smartphone className="w-10 h-10 p-2 bg-purple-100 text-purple-600 rounded-lg" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.'
  },
  {
    icon: <Database className="w-10 h-10 p-2 bg-teal-100 text-teal-600 rounded-lg" />,
    title: 'Backend Systems',
    description: 'Scalable backend solutions with Node.js, Python, and cloud-native architectures.'
  },
  {
    icon: <Globe className="w-10 h-10 p-2 bg-orange-100 text-orange-600 rounded-lg" />,
    title: 'Cloud Solutions',
    description: 'Cloud-native applications and infrastructure on AWS, Azure, and Google Cloud.'
  },
  {
    icon: <Shield className="w-10 h-10 p-2 bg-red-100 text-red-600 rounded-lg" />,
    title: 'Security First',
    description: 'Enterprise-grade security with encryption, authentication, and compliance built-in.'
  },
  {
    icon: <Zap className="w-10 h-10 p-2 bg-green-100 text-green-600 rounded-lg" />,
    title: 'DevOps',
    description: 'Automated CI/CD pipelines, containerization, and infrastructure as code.'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-700 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End Software Development</h2>
          <p className="text-xl text-gray-600">
            From concept to deployment, we deliver comprehensive software solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React, { useState, useRef } from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import { useInView } from '../hooks/useInView';

const pricingPlans = [
  {
    name: 'MVP',
    description: 'Perfect for startups and small projects',
    monthlyPrice: 8000,
    yearlyPrice: 85000,
    features: [
      'Custom web application',
      'Basic authentication',
      'RESTful API development',
      'Cloud hosting setup',
      'Basic analytics integration',
      '3 months support'
    ],
    cta: 'Start Project',
    highlighted: false
  },
  {
    name: 'Scale-Up',
    description: 'For growing businesses needing robust solutions',
    monthlyPrice: 15000,
    yearlyPrice: 160000,
    features: [
      'Full-stack application',
      'Advanced authentication',
      'Database optimization',
      'CI/CD pipeline setup',
      'Advanced analytics',
      'Mobile app development',
      '6 months support'
    ],
    cta: 'Start Project',
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Custom enterprise solution',
      'Microservices architecture',
      'High-availability setup',
      'DevOps automation',
      'Security auditing',
      'Performance optimization',
      '24/7 priority support',
      'Dedicated team'
    ],
    cta: 'Contact Us',
    highlighted: false
  }
];

const formatPrice = (price: number | null) => {
  if (price === null) return 'Custom';
  return `$${(price / 1000).toFixed(1)}k`;
};

const PricingCard = ({ plan, index, isYearly }: { plan: typeof pricingPlans[0], index: number, isYearly: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-700 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${plan.highlighted ? 'border-2 border-blue-500 relative' : 'border border-gray-200'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {plan.highlighted && (
        <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">
            {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
          </span>
          {plan.monthlyPrice !== null && (
            <span className="text-gray-600">
              {isYearly ? '/project' : '/month'}
            </span>
          )}
        </div>
        <Button 
          variant={plan.highlighted ? 'primary' : 'secondary'} 
          fullWidth
        >
          {plan.cta}
        </Button>
      </div>
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <p className="font-medium mb-4">Features included:</p>
        <ul className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Project Pricing</h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the development package that best fits your project needs.
          </p>
          
          <div className="flex items-center justify-center">
            <span className={`mr-3 ${!isYearly ? 'font-medium text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
              style={{ backgroundColor: isYearly ? '#3B82F6' : '#CBD5E1' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isYearly ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
              Project-based
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              index={index} 
              isYearly={isYearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
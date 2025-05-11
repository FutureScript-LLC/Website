import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our 14-day free trial gives you full access to all features of the plan you choose. No credit card is required to start. At the end of the trial, you can choose to subscribe or your account will automatically switch to the free tier with limited features."
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive a prorated credit toward your next billing cycle."
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer: "The number of team members you can add depends on your plan. The Starter plan allows up to a total of 5 team members, the Professional plan allows up to 15, and the Enterprise plan offers unlimited team members. Each team member receives their own login credentials."
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer: "Yes, we offer special pricing for nonprofit organizations, educational institutions, and students. Please contact our sales team for more information about our discount programs and eligibility requirements."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use industry-standard encryption for all data, both in transit and at rest. Our infrastructure is hosted on secure cloud providers with SOC 2 and ISO 27001 certifications. We also offer two-factor authentication and single sign-on options for additional security."
  },
  {
    question: "Can I export my data if I decide to cancel?",
    answer: "Yes, you always retain ownership of your data. If you decide to cancel your subscription, you can export all your data in standard formats like CSV, JSON, or PDF before closing your account. We also offer a 30-day grace period after cancellation during which you can still access and export your data."
  }
];

const FaqItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(faqRef, { threshold: 0.1 });

  return (
    <div 
      ref={faqRef}
      className={`border-b border-gray-200 py-6 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Wavely.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
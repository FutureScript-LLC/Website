import React, { useState, useRef } from 'react';
import Button from './ui/Button';
import { Send, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setIsError(true);
      return;
    }
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsError(false);
      setEmail('');
    }, 800);
  };

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our newsletter for the latest updates, tips, and special offers.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row max-w-lg mx-auto gap-3 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            {!isSubmitted ? (
              <>
                <div className="flex-grow relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 backdrop-blur-sm border border-white/20 placeholder-white/60 ${
                      isError ? 'border-red-400' : ''
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsError(false);
                    }}
                  />
                  {isError && (
                    <p className="text-red-200 text-sm mt-1 absolute left-0">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  variant="white"
                  className="whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </>
            ) : (
              <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 flex items-center justify-center">
                <Check className="mr-2 h-5 w-5 text-green-300" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </form>
          
          <p className="text-sm opacity-80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
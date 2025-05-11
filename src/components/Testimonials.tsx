import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    content: "Wavely has transformed how our team collaborates. The interface is intuitive, and the analytics features provide insights we never had before. It's become an essential part of our daily workflow.",
    author: "Alexandra Chen",
    position: "Product Manager at Droplet",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  },
  {
    content: "The automation features alone have saved us countless hours every week. Our team productivity has increased by 35% since implementing Wavely across our organization.",
    author: "Marcus Johnson",
    position: "CTO at TechVision",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  },
  {
    content: "As a startup, we needed a solution that could scale with us. Wavely's flexible pricing and feature set made it the perfect choice. The onboarding experience was seamless.",
    author: "Sophia Martinez",
    position: "Founder at InnovateLab",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4
  },
  {
    content: "I've tried numerous project management tools, and Wavely stands out for its elegant design and powerful functionality. It strikes the perfect balance between simplicity and capability.",
    author: "Daniel Kim",
    position: "Design Lead at ArtisticMinds",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied teams who have transformed their workflow with Wavely.
          </p>
        </div>
        
        <div 
          className={`max-w-4xl mx-auto relative transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
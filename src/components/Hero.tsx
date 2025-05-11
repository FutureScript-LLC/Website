import { useEffect, useRef } from "react";
import Button from "./ui/Button";
import { ArrowRight, Code2, Cpu, Globe } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-28 md:pt-36 pb-16 md:pb-24 opacity-0 transition-opacity duration-1000"
      style={{ minHeight: "90vh" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
            <div className="flex items-center mb-6 space-x-2">
              <Code2 className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-medium text-blue-600">
                Software Development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Ideas Into
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Powerful Software
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 md:pr-10">
              We build scalable, custom software solutions that drive innovation
              and business growth. From web applications to enterprise systems,
              we deliver excellence in every line of code.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="large">
                Start Your Project
              </Button>
              <Button variant="secondary" size="large">
                <span>View Our Work</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-3 inline-flex mb-2">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Clean Code</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-50 rounded-lg p-3 inline-flex mb-2">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Scalable</h3>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 rounded-lg p-3 inline-flex mb-2">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold">Global</h3>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl transform -rotate-2"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaborating on code"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

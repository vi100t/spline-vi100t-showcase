
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/3dtextbluecopy-7byaYgFxRsJ1rue28iECHM6q/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="3D Background"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Vicente
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            Specializing in React, Node.js, and cloud architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 font-medium px-8 py-3"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary font-medium px-8 py-3"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://www.linkedin.com/in/vi100t/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/vi100t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-accent transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:dovallevicente@gmail.com"
              className="text-white/80 hover:text-accent transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-accent transition-colors duration-200 animate-float"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

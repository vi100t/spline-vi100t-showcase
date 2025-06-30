import React from "react";
import { Card } from "@/components/ui/card";
import { Code2, Users, Zap, Target, SmileIcon } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code is my passion.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with strong communication skills.",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks.",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that matter to the business.",
    },
    {
      icon: SmileIcon,
      title: "Having Fun",
      description: "Making the whole develepment process a breeze.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-backgroundSpline">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white/90 mb-6">
              About Me
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I love building digital experiences that are not
              only functional but also beautiful and user-friendly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white/90 mb-4">
                My Journey
              </h3>
              <p className="text-white/80 leading-relaxed">
                With several years of experience in software development, I've
                worked on diverse projects ranging from small business websites
                to large-scale enterprise applications. My journey started with
                curiosity about how things work on the web, and it has evolved
                into a deep passion for creating digital solutions.
              </p>
              <p className="text-white/80 leading-relaxed">
                I believe in continuous learning and staying up-to-date with the
                latest technologies and best practices. Whether it's exploring
                new frameworks, diving into cloud architecture, or improving
                development workflows, I'm always eager to grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary mb-4">
                    <highlight.icon size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white/90 mb-6">
              When I'm not coding...
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              I enjoy exploring new technologies, developing apps that i wanna
              use, and sharing knowledge with the developer community. I also
              love making music, dancing, and playing football ⚽.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

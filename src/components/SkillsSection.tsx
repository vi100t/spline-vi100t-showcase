
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 
        'Tailwind CSS', 'Sass', 'JavaScript', 'Redux', 'Zustand'
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js', 'Express.js', 'Python', 'FastAPI', 'PostgreSQL', 
        'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Prisma'
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Docker', 'AWS', 'Vercel', 'Git', 'GitHub Actions', 'CI/CD', 
        'Linux', 'Nginx', 'Jest', 'Cypress', 'Webpack', 'Vite'
      ]
    },
    {
      title: 'Other',
      skills: [
        'Figma', 'Adobe Creative Suite', 'Agile', 'Scrum', 'Team Leadership', 
        'Code Review', 'Technical Writing', 'UI/UX Design'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for building modern web applications, 
              from frontend interfaces to backend systems and everything in between.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Always Learning
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
                frameworks, and methodologies to stay at the forefront of web development. 
                Currently diving deeper into AI/ML integration and Web3 technologies.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

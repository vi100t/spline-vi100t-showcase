import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "Angular",
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Styled Components",
        "Sass",
        "Redux",
        "Zustand",
      ],
    },
    {
      title: "Backend",
      skills: [
        "C#",
        ".NET ASP",
        ".NET CORE",
        "Entity",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "SQLite",
        "SQL Server",
        "MongoDB",
        "Redis",
        "REST APIs",
        "Prisma",
        "Supabase",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "AWS",
        "Google Cloud",
        "Vercel",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Linux",
        "Nginx",
        "Jest",
        "Cypress",
        "Webpack",
        "Vite",
        "Expo",
      ],
    },
    {
      title: "Other",
      skills: [
        "Spline",
        "Figma",
        "Agile",
        "Scrum",
        "Team Leadership",
        "Code Review",
        "Technical Writing",
        "UI/UX Design",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-backgroundSpline">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white/90 mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for building modern web applications, from
              frontend interfaces to backend systems and everything in between.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
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
                Technology evolves rapidly, and so do I. I'm constantly
                exploring new tools, frameworks, and methodologies to stay at
                the forefront of web development. Currently diving deeper into
                AI/ML integration and cloud solutions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

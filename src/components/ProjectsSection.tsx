import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Casa Amarela Piauí",
      description:
        "A beautiful website for Casa Amarela Piauí, showcasing local culture, tourism, and heritage. Built with modern web technologies and responsive design.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Responsive Design",
      ],
      liveUrl: "https://casaamarelapiaui.com",
      githubUrl: "https://github.com/vi100t",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/vi100t",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Vuetify"],
      liveUrl: "#",
      githubUrl: "https://github.com/vi100t",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and historical data visualization.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "TypeScript",
        "Chart.js",
        "Weather API",
        "Styled Components",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/vi100t",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-backgroundSpline">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white/90 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise across
              different technologies and problem-solving approaches.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-accent/20"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative h-64 lg:h-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/20" />
                  </div>
                  <div
                    className={`p-8 flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-accent text-accent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        asChild
                        className="bg-accent hover:bg-accent/90 text-primary"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-accent text-accent hover:bg-accent hover:text-primary"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-white/90 mb-8 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-accent/20"
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/20" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-accent/10 text-accent"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-accent/10 text-accent"
                        >
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        asChild
                        className="bg-accent hover:bg-accent/90 text-primary"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-accent text-accent hover:bg-accent hover:text-primary"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

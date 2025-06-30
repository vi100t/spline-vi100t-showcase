import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_83e6kjn", // Service ID
        "template_coem128", // Template ID (please update if this is incorrect)
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "pcIcUs1GimnFQ5vd2", // Public Key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dovallevicente@gmail.com",
      href: "mailto:dovallevicente@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vi100t",
      href: "https://www.linkedin.com/in/vi100t/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vi100t",
      href: "https://github.com/vi100t",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Remotely",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-backgroundSpline">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white/90 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm always excited to discuss
              new projects and opportunities. Let's create something amazing
              together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-accent/20">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                    className="border-accent/20 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="border-accent/20 focus:border-accent"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 border-accent/20">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get in touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'd love to hear from you. Feel free
                  to reach out through any of these channels.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-accent">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-foreground hover:text-accent transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 text-center border-accent/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Open to Opportunities
                </h4>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's discuss how we can work together.
                </p>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-primary"
                  asChild
                >
                  <a href="mailto:dovallevicente@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Start a Conversation
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border px-4">
        <div className="text-center">
          <p className="text-white/80">
            © 2025 Vicente. Built with React, api keyTypeScript, and lots of ☕
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;

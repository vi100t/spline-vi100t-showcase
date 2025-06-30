import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add the Spline viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.2/build/spline-viewer.js";
    script.async = true;
    document.head.appendChild(script);

    // Mobile viewport height fix
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`,
      );
    };
    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      // Cleanup script and event listener on component unmount
      document.head.removeChild(script);
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <>
      <section className="w-full min-h-dvh flex col md:hidden">
        <spline-viewer
          url="https://prod.spline.design/f2hfsAQEojDaPt8F/scene.splinecode"
          loading-anim-type="spinner-small-dark"
          style={{ width: "100%", height: "100vh" }}
        ></spline-viewer>
      </section>
      <section id="hero" className="min-h-screen relative flex overflow-hidden">
        {/* Spline 3D Background - Desktop Only */}
        <div
          className="absolute inset-0 w-full h-full spline-mobile-fullscreen hidden md:block"
          style={{ height: "100%", minHeight: "calc(var(--vh, 1vh) * 100)" }}
        >
          <spline-viewer
            url="https://prod.spline.design/gxF0afQYLvbdiYoT/scene.splinecode"
            loading-anim-type="spinner-small-dark"
            style={{ width: "100%", height: "100%" }}
          ></spline-viewer>
        </div>

        {/* Spline 3D Section - Mobile Only */}

        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" /> */}

        {/* Right Side Content */}
        <div className="relative z-10 flex flex-col justify-between ml-auto w-full md:w-1/2 lg:w-2/5 p-8 md:p-12 md:bg-transparent bg-backgroundSpline">
          {/* Top Content - Name */}
          <div className="flex-1 flex items-start justify-center pt-20">
            <div className="text-center animate-fade-in"></div>
          </div>

          {/* Bottom Content - Info, CTA, Social Links */}
          <div className="flex flex-col items-center justify-end pb-20">
            <div className="flex flex-col text-center max-w-2xl animate-fade-in gap-4">
              <h2 className="text-3xl md:text-3xl text-white/90 font-medium">
                Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
                Passionate about creating innovative web solutions with modern
                technologies. Specializing in Angular, React, C# and .NET.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 font-medium px-8 py-3"
                  onClick={() =>
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary hover:bg-accent hover:border-accent hover:text-primary font-medium px-8 py-3"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
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
              className="text-white/80 hover:text-accent transition-colors duration-350 animate-float"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

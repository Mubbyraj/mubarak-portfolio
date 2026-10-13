import "./App.css";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import profilePhoto from "./assets/profile.jpg";

const projects = [
  {
    number: "01",
    type: "AI APPLICATION",
    title: "Abdullah AI",
    description:
      "An AI-powered knowledge assistant built around retrieval, embeddings and contextual question answering.",
    stack: ["Python", "FastAPI", "RAG", "Embeddings"],
    link: "https://github.com/Mubbyraj/abdullah-ai",
    accent: "violet",
  },
  {
    number: "02",
    type: "INFORMATION SYSTEM",
    title: "NAVORA",
    description:
      "A backend-focused information system designed around structured data, APIs and PostgreSQL.",
    stack: ["Python", "FastAPI", "PostgreSQL", "REST API"],
    link: "https://github.com/Mubbyraj/navora",
    accent: "blue",
  },
  {
    number: "03",
    type: "BUSINESS WEBSITE",
    title: "GulfNaija Trading",
    description:
      "A responsive business website created to present services, establish credibility and support digital presence.",
    stack: ["Web Development", "Responsive Design", "Business"],
    link: "https://magenta-clafoutis-8ccc73.netlify.app/",
    accent: "lime",
  },
  {
    number: "04",
    type: "GOVERNMENT / DIPLOMATIC",
    title:
      "High Commission of the Federal Republic of Nigeria, Kuala Lumpur",
    description:
      "A modern digital experience for the Nigerian High Commission in Kuala Lumpur, developed alongside the existing government website.",
    stack: ["React", "Next.js", "Responsive UI", "Government"],
    links: [
      {
        label: "Current WordPress",
        href: "https://nigeria.org.my/",
      },
      {
        label: "React rebuild",
        href: "https://nigeriahighcomkl.netlify.app/",
      },
    ],
    accent: "cyan",
  },
  {
    number: "05",
    type: "SCHOLAR / KNOWLEDGE PLATFORM",
    title: "Dr. Saheed Abdullah Busari",
    description:
      "A professional knowledge platform designed for lectures, fatwas, articles, publications and searchable Islamic scholarship.",
    stack: ["Next.js", "Supabase", "Prisma", "SEO"],
    link: "https://dr-sahid-abdullah-busari.vercel.app/",
    accent: "orange",
  },
];

const academicProjects = [
  {
    title: "Aetheris Analytics — Hardened Linux Server",
    description:
      "Linux server administration and security coursework covering AlmaLinux 9.8, secure SSH, SELinux, firewalld, Apache HTTPS, Samba file sharing, POSIX ACLs and Lynis security auditing.",
    link: "https://github.com/Mubbyraj/aetheris-analytics-linux-server",
  },
  {
    title: "GameForge Servers",
    description:
      "Collaborative systems and software engineering project.",
    link: "https://github.com/goldensquirrel11/Gameforge-servers-group-project",
  },
  {
    title: "Light MariaDB Interpreter",
    description:
      "Programming fundamentals project implementing a lightweight database interpreter.",
    link: "https://github.com/Kharyybsam/Programming-Fundamentals---Light-MariaDB-Interpeter",
  },
  {
    title: "Robot War",
    description:
      "Object-oriented programming project focused on game logic and system interaction.",
    link: "https://github.com/osmanMukhtar/Asg1-Robot-War",
  },
];

const skillGroups = [
  {
    title: "Development",
    items: [
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "FastAPI",
    ],
  },
  {
    title: "Data & Systems",
    items: [
      "SQL",
      "PostgreSQL",
      "REST APIs",
      "Data Analytics",
      "Information Systems",
      "Supabase",
    ],
  },
  {
    title: "Security",
    items: [
      "Cybersecurity",
      "Linux",
      "Networking",
      "Security Fundamentals",
      "Docker",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "WordPress",
      "Elementor",
      "Excel",
      "Canva",
      "n8n",
    ],
  },
];

const focusAreas = [
  "Information Systems",
  "Web Development",
  "Backend Engineering",
  "Cybersecurity",
  "Data & Analytics",
  "AI / RAG",
];

const languages = [
  ["English", "Fluent"],
  ["Arabic", "Fluent"],
  ["Yoruba", "Native"],
  ["Bahasa Melayu", "Basic"],
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ArrowUpRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.48 11.48 0 0 1 6.01 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.49 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.48v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function SectionReveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  shouldReduceMotion,
}) {
  return (
    <motion.article
      className={`project-card project-${project.accent}`}
      variants={scaleReveal}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -10,
              rotateX: 1.5,
              rotateY: index % 2 === 0 ? -1 : 1,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 22,
              },
            }
      }
      style={{
        transformPerspective: 1200,
      }}
    >
      <div className="project-glow" />

      <div className="project-top">
        <span className="project-number">
          {project.number}
        </span>

        <span className="project-type">
          {project.type}
        </span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-stack">
          {project.stack.map((item, tagIndex) => (
            <motion.span
              key={item}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.15 + tagIndex * 0.05,
                  duration: 0.35,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="project-bottom">
        {project.links ? (
          <div className="dual-project-links">
            {project.links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {item.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View project
            <ArrowUpRight size={17} />
          </a>
        )}
      </div>

      <div className="project-line" />
    </motion.article>
  );
}

function App() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");

      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }

      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    } catch {
      return "dark";
    }
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Ignore storage restrictions.
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 650);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 55]
  );

  const heroGlowY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -100]
  );

  return (
    <div className={`app-shell theme-${theme}`}>
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: progress,
        }}
      />

      <div className="ambient-background">
        <motion.div
          className="ambient-grid"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0px 0px",
                    "80px 80px",
                  ],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        />

        <motion.div
          className="ambient-glow ambient-glow-one"
          style={{
            y: heroGlowY,
          }}
        />

        <motion.div
          className="ambient-glow ambient-glow-two"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 60, 0],
                  y: [0, -30, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      </div>

      <nav className="navbar">
        <motion.a
          href="#top"
          className="nav-name"
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          RAJI MUBARAK OLOHUNISOLA
        </motion.a>

        <motion.div
          className="nav-links"
          initial={{
            opacity: 0,
            x: 25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Learning</a>
          <a href="#contact">Contact</a>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            aria-pressed={theme === "light"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            <span>
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </motion.div>
      </nav>

      <main id="top">
        <section
          className="hero"
          ref={heroRef}
        >
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
            >
              <span className="availability-dot">
                <span />
              </span>

              Building systems, products & digital experiences
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hero-heading"
            >
              <motion.p
                variants={fadeUp}
                className="hero-kicker"
              >
                INFORMATION SYSTEMS · WEB · DATA · SECURITY
              </motion.p>

              <motion.h1 variants={fadeUp}>
                I build digital
                <br />
                <span>systems with purpose.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="hero-description"
              >
                I’m Mubarak — an Information Systems student and
                developer interested in turning ideas into practical
                digital products, intelligent systems and scalable
                web experiences.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="hero-actions"
              >
                <a
                  href="#work"
                  className="primary-button"
                >
                  Explore my work
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="secondary-button"
                >
                  Let’s connect
                </a>

                <a
                  href="/Mubarak-Raji-CV.pdf"
                  className="secondary-button"
                  download="Mubarak-Raji-CV.pdf"
                >
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="hero-visual">
            <motion.div
              className="photo-stage"
              style={{
                y: shouldReduceMotion
                  ? 0
                  : heroImageY,
                transformPerspective: 1000,
              }}
              initial={{
                opacity: 0,
                scale: 0.86,
                rotate: 3,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotateY: -4,
                      rotateX: 2,
                      scale: 1.015,
                      transition: {
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                      },
                    }
              }
            >
              <div className="photo-frame">
                <img
                  src={profilePhoto}
                  alt="Raji Mubarak Olohunisola"
                  className="profile-image"
                />

                <motion.div
                  className="scan-line"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          top: ["5%", "95%", "5%"],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />

                <div className="photo-overlay" />
              </div>

              <motion.div
                className="floating-card floating-card-one"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -12, 0],
                        rotate: [0, 1.5, 0],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                <span className="mini-label">
                  CURRENT FOCUS
                </span>

                <strong>Web × Systems</strong>
              </motion.div>

              <motion.div
                className="floating-card floating-card-two"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, 10, 0],
                        rotate: [0, -1.5, 0],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 5.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6,
                      }
                }
              >
                <span className="mini-label">
                  BASED IN
                </span>

                <strong>Malaysia</strong>
              </motion.div>

              <motion.div
                className="orbit orbit-one"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
              >
                <span />
              </motion.div>

              <motion.div
                className="orbit orbit-two"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
              >
                <span />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="intro-strip"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <span>01</span>
            <strong>Build</strong>
            <p>Functional digital products</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <span>02</span>
            <strong>Think</strong>
            <p>Systems, data & architecture</p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <span>03</span>
            <strong>Explore</strong>
            <p>AI, security & emerging tech</p>
          </motion.div>
        </motion.section>

        <section
          className="section work-section"
          id="work"
        >
          <SectionReveal>
            <div className="section-heading">
              <div>
                <span className="section-index">
                  SELECTED WORK / 01
                </span>

                <h2>Things I’ve built.</h2>
              </div>

              <p>
                A selection of projects spanning web
                development, information systems, AI and
                digital platforms.
              </p>
            </div>
          </SectionReveal>

          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        </section>

        <section className="section academic-section">
          <SectionReveal>
            <div className="section-heading compact">
              <div>
                <span className="section-index">
                  SCHOOL WORKS / 02
                </span>

                <h2>Learning by building.</h2>
              </div>
            </div>
          </SectionReveal>

          <motion.div
            className="academic-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {academicProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="academic-item"
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 8,
                        transition: {
                          type: "spring",
                          stiffness: 250,
                          damping: 25,
                        },
                      }
                }
              >
                <span className="academic-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <ArrowUpRight size={20} />
              </motion.a>
            ))}
          </motion.div>
        </section>

        <section
          className="section about-section"
          id="about"
        >
          <div className="about-grid">
            <SectionReveal>
              <div>
                <span className="section-index">
                  ABOUT / 03
                </span>

                <h2>
                  I’m interested in the space where
                  <span>
                    {" "}
                    technology meets real problems.
                  </span>
                </h2>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="about-copy">
                <p>
                  My background in Information Systems has
                  pushed me toward understanding both sides
                  of technology — how products are built and
                  how they create value for people and
                  organisations.
                </p>

                <p>
                  I enjoy working across the stack, from
                  interfaces and APIs to databases,
                  automation and intelligent systems. I’m
                  especially interested in fintech,
                  cybersecurity, data and AI.
                </p>

                <p>
                  My goal is simple: keep building, keep
                  learning and become someone capable of
                  taking a technical idea from concept to a
                  working product.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section
          className="section skills-section"
          id="skills"
        >
          <SectionReveal>
            <div className="section-heading">
              <div>
                <span className="section-index">
                  CAPABILITIES / 04
                </span>

                <h2>Tools I work with.</h2>
              </div>

              <p>
                A growing technical toolkit built through
                coursework, projects, internships and
                independent development.
              </p>
            </div>
          </SectionReveal>

          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {skillGroups.map((group) => (
              <motion.div
                className="skill-group"
                key={group.title}
                variants={fadeUp}
              >
                <div className="skill-group-heading">
                  <span />
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: index * 0.025,
                          duration: 0.35,
                        },
                      }}
                      viewport={{
                        once: true,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="section focus-section">
          <div className="focus-grid">
            <SectionReveal>
              <div>
                <span className="section-index">
                  FOCUS / 05
                </span>

                <h2>Where I’m heading.</h2>
              </div>
            </SectionReveal>

            <motion.div
              className="focus-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              {focusAreas.map((area, index) => (
                <motion.div
                  className="focus-item"
                  key={area}
                  variants={fadeUp}
                >
                  <span>0{index + 1}</span>

                  <strong>{area}</strong>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section languages-section">
          <SectionReveal>
            <div className="language-header">
              <span className="section-index">
                LANGUAGES / 06
              </span>

              <h2>Communication matters.</h2>
            </div>
          </SectionReveal>

          <motion.div
            className="languages-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            {languages.map(([language, level]) => (
              <motion.div
                className="language-card"
                key={language}
                variants={scaleReveal}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                      }
                }
              >
                <strong>{language}</strong>

                <span>{level}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section
          className="section certifications-section"
          id="certifications"
        >
          <SectionReveal>
            <div className="section-heading">
              <div>
                <span className="section-index">
                  CERTIFICATIONS & LEARNING / 07
                </span>

                <h2>Learning in progress.</h2>
              </div>

              <p>
                Formal learning and structured training that support my
                development in AI and cybersecurity.
              </p>
            </div>
          </SectionReveal>

          <div className="certification-list">
            <article className="certification-item">
              <div className="certification-status completed">
                Completed
              </div>
              <div>
                <h3>Claude 101</h3>
                <p>Anthropic · AI fundamentals</p>
              </div>
            </article>

            <article className="certification-item">
              <div className="certification-status in-progress">
                In progress
              </div>
              <div>
                <h3>Cybersecurity Theory & Practice</h3>
                <p>Cisco · Cybersecurity learning path</p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
        >
          <motion.div
            className="contact-inner"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="section-index">
              CONTACT / 08
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let’s build something.</span>
            </h2>

            <p>
              Whether it’s a website, information system,
              backend, AI project or something completely
              different — I’m open to interesting problems.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:mubarakraji2404@gmail.com"
                className="primary-button"
              >
                Email me
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/mubarak-raji-549733231"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <LinkedInIcon />
                LinkedIn
              </a>

              <a
                href="https://github.com/Mubbyraj"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>RAJI MUBARAK OLOHUNISOLA</strong>

          <span>
            Information Systems · Developer · Builder
          </span>
        </div>

        <div className="footer-right">
          <span>
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>

      <motion.button
        type="button"
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        initial={false}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20,
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <ChevronUpIcon />
      </motion.button>
    </div>
  );
}

export default App;
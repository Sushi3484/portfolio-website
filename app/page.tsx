import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Send,
  ExternalLink,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Lakshmi Vallabhani
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#certifications"
              className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            >
              Certifications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#resume" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 font-medium">Hello, I'm</p>
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                    Lakshmi Naga Sushmitha Vallabhani
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 font-medium">
                    Full Stack Developer | QA Engineer | DevOps Enthusiast
                  </p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  A passionate software engineer with 2+ years of experience building scalable applications and
                  automating workflows. Currently seeking opportunities to leverage my technical skills in innovative
                  projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="#contact" className="flex items-center">
                      Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full transition-all duration-300"
                  >
                    <Link href="/resume.pdf" download className="flex items-center">
                      <Download className="mr-2 h-5 w-5" />
                      Resume
                    </Link>
                  </Button>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href="mailto:nagasushmitha10@gmail.com"
                    className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sushmitha-vallabhani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/Sushi3484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-2">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/images/profile.jpg"
                        alt="Lakshmi Naga Sushmitha Vallabhani - Professional Photo"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
                    <span className="font-semibold">Available for hire!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Connect Button */}
          <div className="fixed bottom-8 right-8 z-50">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
              <Link href="#contact">Let's Connect!</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        I recently completed my Master's in Information Systems at Saint Louis University with a GPA of
                        3.81/4.0, where I expanded my knowledge in software development, data analytics, and information
                        security.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        With over 2 years of industry experience as a Senior Software Engineer at Capgemini, I've
                        developed expertise in building scalable applications, automating workflows, and ensuring
                        quality in Agile environments. I'm passionate about creating efficient solutions that solve
                        real-world problems.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        I'm actively seeking full-time opportunities in Full Stack Development, QA Automation, and
                        DevOps where I can leverage my technical skills and contribute to innovative projects.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Location</span>
                    </div>
                    <p className="text-gray-600">Saint Louis, Missouri</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Experience</span>
                    </div>
                    <p className="text-gray-600">2+ Years</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-gray-900">Availability</span>
                    </div>
                    <p className="text-gray-600">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Here are some of my key projects that demonstrate my expertise in full-stack development, data
                  analytics, and DevOps automation with measurable business impact.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <ProjectCard
                  title="Insurance Claim Verification Dashboard"
                  description="Built a dashboard to help insurance officers verify claims, compute risk scores, and reduce review time by 40%."
                  techStack={["SQLite", "SQL", "Python (Pandas)", "Power BI"]}
                  image="/images/insurance-dashboard.png"
                  imageAlt="Insurance claim verification system with gavel and insurance documents representing legal compliance and claim processing"
                />
                <ProjectCard
                  title="CI/CD Pipeline for Microservices"
                  description="Designed and deployed CI/CD pipelines for 6+ microservices with automated deployment and 99.9% uptime."
                  techStack={["Jenkins", "Docker", "Kubernetes", "Terraform"]}
                  image="/images/cicd-pipeline.png"
                  imageAlt="Distributed microservices architecture visualization with interconnected containers representing CI/CD pipeline and containerized deployment"
                />
                <ProjectCard
                  title="Depression Detection from Social Networks"
                  description="Developed an ML-powered Flask app to detect depression with 90% accuracy based on social media data."
                  techStack={["Python", "Flask", "NLP", "ML"]}
                  image="/images/social-media-detection.png"
                  imageAlt="Social media applications on mobile device showing platforms like Twitter, Facebook, and Instagram used for depression detection analysis"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Professional Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

                <Card className="ml-16 shadow-lg border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">Senior Software Engineer</CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600">Capgemini</CardDescription>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full">
                        Sep 2021 – Jul 2023
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Developed and maintained backend utilities using Java and integrated them with Jenkins pipelines to automate data validation and system integrations for insurance applications",
                        "Collaborated on full stack development of internal tools, enhancing UI workflows using HTML/CSS/JavaScript and implementing backend logic to process and compare large-scale databases",
                        "Engineered modular test automation frameworks (BDD with Cucumber) and reusable service components, reducing regression cycle time and improving deployment reliability",
                        "Built interactive model-driven dashboards using ConformIQ and structured RESTful APIs for insurance eApp flows, enabling dynamic policy management",
                        "Partnered with cross-functional teams across Agile sprints to design, test, and deploy scalable features while documenting technical processes and improving accessibility compliance (WCAG)",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Technical Skills
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-8">
                <SkillCategoryWithDot
                  title="Programming Languages"
                  dotColor="bg-gradient-to-r from-red-500 to-pink-500"
                  skills={["Python", "JavaScript", "TypeScript", "Java", "SQL", "C++"]}
                />
                <SkillCategoryWithDot
                  title="Web Technologies & Frameworks"
                  dotColor="bg-gradient-to-r from-blue-500 to-cyan-500"
                  skills={[
                    "React",
                    "Next.js",
                    "Django",
                    "Flask",
                    "Node.js",
                    "Express.js",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                  ]}
                />
                <SkillCategoryWithDot
                  title="Cloud & DevOps"
                  dotColor="bg-gradient-to-r from-green-500 to-emerald-500"
                  skills={["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "CI/CD", "Terraform"]}
                />
                <SkillCategoryWithDot
                  title="Databases"
                  dotColor="bg-gradient-to-r from-purple-500 to-violet-500"
                  skills={["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"]}
                />
                <SkillCategoryWithDot
                  title="Data Analytics & Tools"
                  dotColor="bg-gradient-to-r from-orange-500 to-amber-500"
                  skills={[
                    "Pandas",
                    "NumPy",
                    "Power BI",
                    "Tableau",
                    "Apache Spark",
                    "Jupyter",
                    "Matplotlib",
                    "Seaborn",
                  ]}
                />
                <SkillCategoryWithDot
                  title="Development Tools"
                  dotColor="bg-gradient-to-r from-indigo-500 to-blue-600"
                  skills={["VS Code", "PyCharm", "Postman", "Figma", "Jira", "Slack", "Notion"]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Certifications
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Continuous learning and professional development through industry-recognized certifications.
                </p>
              </div>

              <div className="space-y-6">
                <CertificationCard
                  title="Advanced GitHub Actions"
                  provider="LinkedIn Learning"
                  completionDate="Apr 11, 2025"
                  description="Mastered advanced GitHub Actions workflows, automation strategies, and CI/CD pipeline optimization for modern DevOps practices."
                  skills={["GitHub Actions", "CI/CD", "DevOps", "Automation"]}
                  certificateUrl="#"
                />
                <CertificationCard
                  title="AWS Certified Cloud Practitioner (CLF-C02) - Cloud Concepts"
                  provider="LinkedIn Learning"
                  completionDate="Apr 08, 2025"
                  description="Comprehensive understanding of AWS cloud services, architecture principles, and foundational cloud computing concepts."
                  skills={["Amazon Web Services", "Cloud Computing", "Cloud Architecture"]}
                  certificateUrl="#"
                />
                <CertificationCard
                  title="Learning Python (2021)"
                  provider="LinkedIn Learning"
                  completionDate="Apr 07, 2025"
                  description="Comprehensive Python programming fundamentals covering syntax, data structures, object-oriented programming, and practical application development."
                  skills={[
                    "Python Programming",
                    "Data Structures",
                    "Object-Oriented Programming",
                    "Software Development",
                  ]}
                  certificateUrl="#"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Resume
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Resume Preview */}
                <div className="flex flex-col items-center">
                  <div className="mb-8 w-full max-w-md aspect-[1/1.414] bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
                    <Image
                      src="/images/resume.jpg"
                      alt="Lakshmi Naga Sushmitha Vallabhani Resume"
                      width={424}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/resume.pdf" download className="flex items-center">
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Link>
                  </Button>
                </div>

                {/* Resume Highlights */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Resume Highlights</h3>
                    <div className="space-y-6">
                      {[
                        {
                          color: "from-blue-500 to-cyan-500",
                          title: "Education Excellence",
                          description: "Master's in Information Systems from Saint Louis University with 3.81/4.0 GPA",
                        },
                        {
                          color: "from-green-500 to-emerald-500",
                          title: "Professional Experience",
                          description: "2+ years as Senior Software Engineer at Capgemini with proven track record",
                        },
                        {
                          color: "from-purple-500 to-violet-500",
                          title: "Technical Expertise",
                          description: "Full-stack development with Java, Node.js, Python, and modern DevOps tools",
                        },
                        {
                          color: "from-orange-500 to-amber-500",
                          title: "Project Impact",
                          description:
                            "Delivered solutions that reduced manual review time by 40% and achieved 99.9% uptime",
                        },
                        {
                          color: "from-red-500 to-pink-500",
                          title: "Leadership & Collaboration",
                          description:
                            "Led Agile teams and mentored junior developers in cross-functional environments",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div
                            className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full mt-2 flex-shrink-0`}
                          ></div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                    <div className="space-y-3">
                      {[
                        "Reduced deployment time from hours to minutes with CI/CD automation",
                        "Built 80+ reusable UI components, reducing development time by 25%",
                        "Achieved 90% accuracy in ML-based depression detection system",
                        "Improved system performance 3x through optimization techniques",
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Currently Seeking</h3>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full">
                        Full Stack Development
                      </Badge>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full">
                        QA Automation
                      </Badge>
                      <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full">
                        DevOps Engineering
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Get In Touch
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-600">Ready to collaborate? Let's discuss how we can work together!</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="border-2 border-gray-200 focus:border-purple-500 rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </Button>
                  </form>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <p className="text-gray-600 mb-8">
                      Feel free to reach out to me through any of the following channels:
                    </p>

                    <div className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          label: "Email",
                          value: "nagasushmitha10@gmail.com",
                          href: "mailto:nagasushmitha10@gmail.com",
                          color: "from-red-500 to-pink-500",
                        },
                        {
                          icon: Linkedin,
                          label: "LinkedIn",
                          value: "linkedin.com/in/sushmitha-vallabhani",
                          href: "https://www.linkedin.com/in/sushmitha-vallabhani/",
                          color: "from-blue-500 to-cyan-500",
                        },
                        {
                          icon: Github,
                          label: "GitHub",
                          value: "github.com/Sushi3484",
                          href: "https://github.com/Sushi3484",
                          color: "from-gray-600 to-gray-800",
                        },
                      ].map((contact, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color}`}>
                            <contact.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{contact.label}</p>
                            <a
                              href={contact.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-purple-600 transition-colors"
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Lakshmi Naga Sushmitha Vallabhani. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:nagasushmitha10@gmail.com"
                className="p-2 rounded-full bg-gray-700 hover:bg-purple-600 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sushmitha-vallabhani/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Sushi3484"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, techStack, image, imageAlt }) {
  const getTechColor = (tech) => {
    const techColors = {
      SQLite: "from-blue-500 to-cyan-500",
      SQL: "from-blue-500 to-cyan-500",
      PostgreSQL: "from-blue-500 to-cyan-500",
      MongoDB: "from-green-500 to-emerald-500",
      Python: "from-yellow-500 to-orange-500",
      "Python (Pandas)": "from-yellow-500 to-orange-500",
      Java: "from-orange-500 to-red-500",
      JavaScript: "from-yellow-500 to-orange-500",
      Flask: "from-gray-500 to-gray-700",
      Pandas: "from-purple-500 to-violet-500",
      Jenkins: "from-red-500 to-pink-500",
      Docker: "from-blue-500 to-cyan-500",
      Kubernetes: "from-blue-500 to-cyan-500",
      Terraform: "from-purple-500 to-violet-500",
      "Power BI": "from-yellow-500 to-orange-500",
      NLP: "from-green-500 to-emerald-500",
      ML: "from-green-500 to-emerald-500",
    }
    return techColors[tech] || "from-gray-500 to-gray-700"
  }

  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
        {techStack.map((tech) => (
          <Badge
            key={tech}
            className={`text-xs px-3 py-1 bg-gradient-to-r ${getTechColor(tech)} text-white border-0 hover:scale-105 transition-transform`}
          >
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

function CertificationCard({ title, provider, completionDate, description, skills, certificateUrl }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {title}
            </CardTitle>
            <p className="text-blue-600 font-semibold text-lg">{provider}</p>
            <p className="text-gray-500 text-sm mt-1">Completed: {completionDate}</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <ExternalLink className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-gray-700 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:scale-105 transition-transform"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-6 border-t">
        <Button
          variant="outline"
          size="sm"
          className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-full px-6"
          asChild
        >
          <Link href={certificateUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Certificate
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function SkillCategoryWithDot({ title, dotColor, skills }) {
  const getSkillBgColor = (categoryTitle) => {
    switch (categoryTitle) {
      case "Programming Languages":
        return "from-red-500 to-pink-500"
      case "Web Technologies & Frameworks":
        return "from-blue-500 to-cyan-500"
      case "Cloud & DevOps":
        return "from-green-500 to-emerald-500"
      case "Databases":
        return "from-purple-500 to-violet-500"
      case "Data Analytics & Tools":
        return "from-orange-500 to-amber-500"
      case "Development Tools":
        return "from-indigo-500 to-blue-600"
      default:
        return "from-gray-500 to-gray-700"
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-4 h-4 ${dotColor} rounded-full shadow-lg`}></div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill}
            className={`px-4 py-2 text-sm bg-gradient-to-r ${getSkillBgColor(title)} text-white border-0 hover:scale-105 transition-transform shadow-sm`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

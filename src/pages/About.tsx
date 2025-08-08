import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Heart, BookOpen, Music, Camera, Coffee, GraduationCap, Code, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import aboutImage from '@/assets/about.jpg';
import hero2Image from '@/assets/hero2.jpg';
import animeImage from '@/assets/anime.jpg';
import comicsImage from '@/assets/comics.jpg';
import musicImage from '@/assets/music.jpg';
import learningImage from '@/assets/learning.jpg';
import driveImage from '@/assets/drive.jpg';

const About = () => {
  const experience = [
    {
      year: '2023 - Present',
      title: 'Web & Software Developer',
      company: 'King of CMS Consulting',
      description: 'Full-stack development and IT support across multiple platforms including KStudy Learning and FigureHub.',
      achievements: ['Responsive web applications', 'Educational platform development', 'Technical troubleshooting']
    },
    {
      year: '2022 - 2023',
      title: 'Web Development Journey',
      company: 'Self-Directed Learning',
      description: 'Intensive learning and skill development in modern web technologies.',
      achievements: ['React & Node.js mastery', 'Frontend & backend development', 'Project portfolio building']
    },
    {
      year: '2022',
      title: 'Bachelor of Science',
      company: 'Nasarawa State University Keffi',
      description: 'Graduated with a degree in Microbiology, developing analytical and problem-solving skills.',
      achievements: ['Scientific methodology', 'Analytical thinking', 'Research skills']
    }
  ];

  const interests = [
    { 
      name: 'Music', 
      description: 'Afrobeats, electronic, jazz, indie rock',
      image: musicImage
    },
    { 
      name: 'Anime', 
      description: 'Exploring animated storytelling worlds',
      image: animeImage
    },
    { 
      name: 'Comics', 
      description: 'Marvel, DC, indie graphic novels, manga',
      image: comicsImage
    },
    { 
      name: 'Learning', 
      description: 'New frameworks, design trends, emerging tech',
      image: learningImage
    }
  ];

  const values = [
    {
      title: 'Creativity',
      description: 'Approaching development with artistic vision and innovative problem-solving techniques.'
    },
    {
      title: 'Logic',
      description: 'Applying scientific methodology and systematic thinking to create robust digital solutions.'
    },
    {
      title: 'Curiosity',
      description: 'Always asking "why" and "what if" to push boundaries and explore new possibilities.'
    },
    {
      title: 'Excellence',
      description: 'Committed to creating digital experiences that are both beautiful and meaningful.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-hero mb-6 text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="gradient-text text-bounce">Faith Oseni</span>
          </motion.h1>
          <motion.p
            className="text-accent max-w-3xl mx-auto text-lift"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The story behind the code - where creativity meets logic
          </motion.p>
        </motion.div>

        {/* Personal Introduction */}
        <section className="mb-24">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h2
                className="text-heading mb-6 text-lift"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                The Story Behind the Code
              </motion.h2>
              <motion.div
                className="space-y-4 text-muted-foreground leading-relaxed text-body"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lift">
                  Hi, I'm <strong className="text-primary">Faith Oseni</strong> – a passionate web developer who believes that great digital experiences are born from the intersection of creativity, logic, and genuine curiosity.
                </p>
                <p className="text-lift">
                  My path to web development wasn't conventional, and that's exactly what makes it interesting. I graduated from Nasarawa State University Keffi with a Bachelor's degree in Microbiology, where I developed a scientific mindset that now serves me well in debugging code and solving complex technical problems.
                </p>
                <p className="text-lift">
                  While studying the microscopic world of organisms, I found myself increasingly drawn to the digital realm. The precision required in laboratory work translated beautifully into coding – both demand attention to detail, systematic thinking, and the ability to troubleshoot when things don't go as planned.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden glass">
                <img
                  src={aboutImage}
                  alt="Faith Oseni - About"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                
                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/20 rounded-full"
                  animate={{ 
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* From Lab to Code */}
        <section className="mb-24">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden glass">
                <img
                  src={hero2Image}
                  alt="Faith Oseni - From Lab to Code"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                
                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/20 rounded-full"
                  animate={{ 
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.h2
                className="text-heading mb-6 text-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                From Lab Bench to Code Editor
              </motion.h2>
              <motion.div
                className="space-y-6 text-body leading-relaxed text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-lift">
                  Over the past year and a half, I've immersed myself in the world of web development, transforming curiosity into expertise. What started as a fascination with how websites work has evolved into a genuine passion for creating digital solutions that make a difference.
                </p>
                <p className="text-lift">
                  I currently serve as a <strong className="text-primary">Web & Software Developer</strong> at <strong className="text-primary">King of CMS Consulting</strong>, where I wear multiple hats as both a developer and IT Support Specialist. My role extends across their ecosystem, including their subsidiaries <strong className="text-primary">KStudy Learning</strong> and <strong className="text-primary">FigureHub</strong>, where I help build educational platforms and digital tools that empower learning and growth.
                </p>
                <p className="text-lift">
                  Every day brings new challenges – from architecting responsive web applications to troubleshooting complex technical issues. This variety keeps me engaged and constantly learning, which is exactly where I thrive.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Professional Experience */}
        <section className="mb-24">
          <motion.h2
            className="text-heading text-center mb-12 text-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <Card className="glass">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-heading mb-1 text-lift">{item.title}</h3>
                          <p className="text-primary font-plain-regular">{item.company}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs font-plain-light">
                          {item.year}
                        </Badge>
                      </div>
                      <p className="text-body mb-4 text-lift">{item.description}</p>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground font-plain-light text-caption">
                            <Award className="w-3 h-3 mr-2 text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond the Screen */}
        <section className="mb-24">
          <motion.h2
            className="text-heading text-center mb-12 text-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Beyond the Screen
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={interest.image}
                        alt={`${interest.name} - Faith's Interest`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="font-plain-regular mb-2 text-lift text-white">{interest.name}</h3>
                        <p className="text-sm text-white/80 font-plain-light text-caption">{interest.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* What Drives Me */}
        <section className="mb-24">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-heading mb-8 text-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What Drives Me
            </motion.h2>
            <motion.div
              className="space-y-6 text-body leading-relaxed text-muted-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lift">
                I'm fascinated by the power of technology to solve real-world problems. Coming from a science background, I approach development with a researcher's mindset – always asking "why" and "what if." This scientific curiosity, combined with creative problem-solving, helps me build digital solutions that are not just functional, but truly meaningful.
              </p>
              <p className="text-lift">
                I believe that the best websites and applications are those that seamlessly blend form and function, creating experiences that users don't just interact with, but genuinely enjoy.
              </p>
            </motion.div>
            
            {/* Drive Image */}
            <motion.div
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden glass">
                <img
                  src={driveImage}
                  alt="Faith Oseni - What Drives Me"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                
                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/20 rounded-full"
                  animate={{ 
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Values & Philosophy */}
        <section className="mb-24">
          <motion.h2
            className="text-heading text-center mb-12 text-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Philosophy
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass p-6 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Heart className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-heading text-lift">{value.title}</h3>
                    </div>
                    <p className="text-body leading-relaxed text-lift">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="mb-24">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-heading mb-6 text-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="text-body max-w-2xl mx-auto text-muted-foreground mb-8 text-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I'm always excited to collaborate on projects that push boundaries, solve interesting problems, or simply create something amazing. Whether you're looking to build the next big digital platform or need someone to bring your web vision to life, I'd love to hear about it.
            </motion.p>
            <motion.div
              className="text-accent font-plain-regular text-lg text-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <em>Ready to turn ideas into digital reality? Let's build something extraordinary together.</em>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About; 
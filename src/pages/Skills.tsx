import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Award, 
  GraduationCap,
  Users,
  Lightbulb,
  Target,
  MessageSquare
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 95, years: 4 },
        { name: 'TypeScript', level: 90, years: 3 },
        { name: 'Next.js', level: 85, years: 2 },
        { name: 'Tailwind CSS', level: 92, years: 3 },
        { name: 'Vue.js', level: 75, years: 2 }
      ]
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 88, years: 4 },
        { name: 'Express.js', level: 85, years: 3 },
        { name: 'Python', level: 80, years: 3 },
        { name: 'PostgreSQL', level: 82, years: 3 },
        { name: 'MongoDB', level: 78, years: 2 }
      ]
    },
    {
      category: 'Design & UI/UX',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85, years: 3 },
        { name: 'Adobe XD', level: 80, years: 2 },
        { name: 'Sketch', level: 75, years: 2 },
        { name: 'InVision', level: 70, years: 2 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: Database,
      skills: [
        { name: 'Git', level: 90, years: 4 },
        { name: 'Docker', level: 75, years: 2 },
        { name: 'AWS', level: 70, years: 2 },
        { name: 'CI/CD', level: 80, years: 3 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', experience: 'Expert' },
    { name: 'TypeScript', category: 'Language', experience: 'Expert' },
    { name: 'Node.js', category: 'Backend', experience: 'Advanced' },
    { name: 'Next.js', category: 'Framework', experience: 'Advanced' },
    { name: 'Tailwind CSS', category: 'Styling', experience: 'Expert' },
    { name: 'PostgreSQL', category: 'Database', experience: 'Advanced' },
    { name: 'MongoDB', category: 'Database', experience: 'Intermediate' },
    { name: 'Docker', category: 'DevOps', experience: 'Intermediate' },
    { name: 'AWS', category: 'Cloud', experience: 'Intermediate' },
    { name: 'Figma', category: 'Design', experience: 'Advanced' },
    { name: 'Git', category: 'Version Control', experience: 'Expert' },
    { name: 'Jest', category: 'Testing', experience: 'Advanced' }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-DEV-001',
      link: '#'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credential: 'META-REACT-001',
      link: '#'
    },
    {
      name: 'TypeScript Professional',
      issuer: 'Microsoft',
      date: '2022',
      credential: 'MS-TS-001',
      link: '#'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Stanford University',
      year: '2019-2021',
      gpa: '3.9/4.0',
      focus: 'Software Engineering'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of California',
      year: '2015-2019',
      gpa: '3.8/4.0',
      focus: 'Computer Science'
    }
  ];

  const softSkills = [
    {
      skill: 'Communication',
      level: 90,
      description: 'Excellent verbal and written communication skills'
    },
    {
      skill: 'Leadership',
      level: 85,
      description: 'Experience leading teams and mentoring developers'
    },
    {
      skill: 'Problem Solving',
      level: 95,
      description: 'Strong analytical and critical thinking abilities'
    },
    {
      skill: 'Teamwork',
      level: 88,
      description: 'Collaborative approach with cross-functional teams'
    },
    {
      skill: 'Adaptability',
      level: 92,
      description: 'Quick to learn new technologies and adapt to changes'
    },
    {
      skill: 'Time Management',
      level: 85,
      description: 'Efficient project planning and deadline management'
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
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A comprehensive overview of my technical abilities and professional development
          </motion.p>
        </motion.div>

        {/* Technical Skills Visualization */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          
          <div className="space-y-12">
            {technicalSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <Card className="glass">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <category.icon className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-2xl font-semibold">{category.category}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium">{skill.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {skill.years} years
                              </Badge>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tools & Technologies
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="glass text-center p-4 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="font-semibold mb-1">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{tech.category}</p>
                    <Badge 
                      variant={tech.experience === 'Expert' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {tech.experience}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Certifications & Education */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certifications & Education
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 text-primary mr-2" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="glass p-4 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{cert.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {cert.date}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">Credential: {cert.credential}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-primary mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="glass p-4 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {edu.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-medium mb-1">{edu.school}</p>
                        <p className="text-sm text-muted-foreground mb-1">Focus: {edu.focus}</p>
                        <p className="text-xs text-muted-foreground">GPA: {edu.gpa}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Soft Skills
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass p-6 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{skill.skill}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 mb-4" />
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Skills; 
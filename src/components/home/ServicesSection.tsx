import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';
import learningImage from '@/assets/learning.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications with modern technologies like React, Node.js, and TypeScript.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly'],
      experience: '5+ years'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and native technologies.',
      features: ['iOS & Android', 'Cross-platform', 'Native Performance'],
      experience: '3+ years'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and drive engagement.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      experience: '4+ years'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable backend solutions with robust APIs and database architecture.',
      features: ['API Development', 'Database Design', 'Cloud Deployment'],
      experience: '4+ years'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Infrastructure automation and cloud deployment solutions for modern applications.',
      features: ['CI/CD Pipelines', 'AWS/Azure', 'Docker & Kubernetes'],
      experience: '3+ years'
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security implementation and automated testing strategies.',
      features: ['Security Audits', 'Automated Testing', 'Code Quality'],
      experience: '4+ years'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Zap },
    { number: '5+', label: 'Years Experience', icon: Users },
    { number: '100%', label: 'Client Satisfaction', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Cloud }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary text-sm uppercase tracking-wider font-plain-regular text-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Services
          </motion.span>
          <motion.h2
            className="text-display mt-4 mb-6 text-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            What I <span className="gradient-text text-bounce">Offer</span>
          </motion.h2>
          <motion.p
            className="text-body max-w-2xl mx-auto text-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive development and design services to bring your ideas to life
          </motion.p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass text-center p-6 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2 font-plain-regular text-glow">{stat.number}</div>
                  <p className="text-sm text-muted-foreground font-plain-light text-caption">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group"
            >
              <Card className="glass p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-heading group-hover:text-primary transition-colors text-lift">
                        {service.title}
                      </h3>
                      <p className="text-caption font-plain-light">{service.experience}</p>
                    </div>
                  </div>
                  
                  <p className="text-body mb-4 leading-relaxed text-lift">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground font-plain-light text-caption">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-plain-regular">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass overflow-hidden max-w-2xl mx-auto group">
            <CardContent className="p-0">
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={learningImage}
                    alt="Ready to Start Your Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <h3 className="text-heading mb-4 text-lift text-white">Ready to Start Your Project?</h3>
                  <p className="text-body mb-6 text-lift text-white/90">
                    Let's discuss your requirements and create something amazing together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="group font-plain-regular">
                      Get Started
                      <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="font-plain-regular border-white/30 text-white hover:bg-white hover:text-background">
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 
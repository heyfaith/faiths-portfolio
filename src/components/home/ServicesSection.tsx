import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  Users
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import driveImage from '@/assets/drive.jpg';
import supportImage from '@/assets/support.jpg';
import satisfactionImage from '@/assets/satisfaction.jpg';
import experienceImage from '@/assets/experience.jpg';
import completedImage from '@/assets/completed.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      experience: '3+ Years',
      description: 'Full-stack development with modern technologies like React, Node.js, and TypeScript.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Best Practices'],
      icon: Code
    },
    {
      title: 'UI/UX Design',
      experience: '2+ Years',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      icon: Palette
    },
    {
      title: 'Mobile Development',
      experience: '2+ Years',
      description: 'Cross-platform mobile applications using React Native and Flutter.',
      features: ['iOS & Android', 'Native Performance', 'App Store Optimization'],
      icon: Smartphone
    },
    {
      title: 'Database Design',
      experience: '3+ Years',
      description: 'Designing and optimizing database structures for scalable applications.',
      features: ['SQL & NoSQL', 'Data Modeling', 'Performance Tuning'],
      icon: Database
    },
    {
      title: 'Cloud Solutions',
      experience: '2+ Years',
      description: 'Deploying and managing applications on cloud platforms like AWS and Azure.',
      features: ['AWS Services', 'CI/CD Pipelines', 'Scalability'],
      icon: Cloud
    },
    {
      title: 'Security & Testing',
      experience: '3+ Years',
      description: 'Implementing security best practices and comprehensive testing strategies.',
      features: ['Security Audits', 'Unit Testing', 'Integration Testing'],
      icon: Shield
    }
  ];

  const stats = [
    { 
      number: '50+', 
      label: 'Projects Completed',
      image: completedImage
    },
    { 
      number: '5+', 
      label: 'Years Experience',
      image: experienceImage
    },
    { 
      number: '100%', 
      label: 'Client Satisfaction',
      image: satisfactionImage
    },
    { 
      number: '24/7', 
      label: 'Support Available',
      image: supportImage
    }
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
              <Card className="glass overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={stat.image}
                      alt={`${stat.label} - Faith's Services`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                      <div className="text-3xl font-bold text-white mb-2 font-plain-regular text-glow">{stat.number}</div>
                      <p className="text-sm text-white/80 font-plain-light text-caption text-center">{stat.label}</p>
                    </div>
                  </div>
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
          <Card className="glass overflow-hidden p-8 max-w-2xl mx-auto relative">
            <CardContent className="p-0">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={driveImage}
                  alt="Background - Ready to Start Your Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-heading mb-4 text-lift text-white">Ready to Start Your Project?</h3>
                <p className="text-body mb-6 text-lift text-white/90">
                  Let's discuss your requirements and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group font-plain-regular">
                    Get Started
                    <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="font-plain-regular bg-white/10 border-white/20 text-white hover:bg-white/20">
                    View Portfolio
                  </Button>
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
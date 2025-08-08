import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import bankingImage from '@/assets/project-banking.jpg';
import designSystemImage from '@/assets/project-design-system.jpg';

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with seamless user experience and advanced analytics.',
      category: 'Web Development',
      image: ecommerceImage,
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with real-time transactions.',
      category: 'Mobile App',
      image: bankingImage,
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      link: '#',
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Comprehensive design system for consistent brand experience across platforms.',
      category: 'Design',
      image: designSystemImage,
      technologies: ['Figma', 'React', 'Storybook'],
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="featured-work" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
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
            Featured Work
          </motion.span>
          <motion.h2
            className="text-display mt-4 mb-6 text-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Recent <span className="gradient-text text-bounce">Projects</span>
          </motion.h2>
          <motion.p
            className="text-body max-w-2xl mx-auto text-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Explore some of my latest work across web development, mobile apps, and design.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={false}
                  >
                    <div className="absolute bottom-4 right-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm font-plain-regular"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-primary font-plain-regular text-glow">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-heading mb-2 group-hover:text-primary transition-colors text-lift">
                    {project.title}
                  </h3>
                  
                  <p className="text-body mb-4 leading-relaxed text-lift">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md font-plain-light text-caption"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-plain-regular"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Filter, 
  Search, 
  Eye, 
  Code, 
  Users, 
  Star,
  Download,
  Calendar,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import bankingImage from '@/assets/project-banking.jpg';
import designSystemImage from '@/assets/project-design-system.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Web Development', 'Mobile App', 'Design', 'Full Stack', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with seamless user experience and advanced analytics.',
      category: 'Web Development',
      image: ecommerceImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      liveDemo: '#',
      stats: {
        users: '10K+',
        rating: 4.8,
        downloads: '5K+',
        completion: '100%'
      },
      details: {
        problem: 'Client needed a scalable e-commerce platform with advanced features.',
        solution: 'Built a full-stack solution with React frontend, Node.js backend, and MongoDB database.',
        process: 'Agile development with 2-week sprints, user testing, and iterative improvements.',
        results: 'Increased sales by 300%, improved user engagement by 150%, 99.9% uptime.'
      }
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with real-time transactions.',
      category: 'Mobile App',
      image: bankingImage,
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Stripe'],
      link: '#',
      github: '#',
      liveDemo: '#',
      stats: {
        users: '50K+',
        rating: 4.9,
        downloads: '25K+',
        completion: '100%'
      },
      details: {
        problem: 'Traditional banking apps were slow and lacked modern UX patterns.',
        solution: 'Developed a React Native app with real-time updates and biometric authentication.',
        process: 'User research, prototyping, development, and extensive security testing.',
        results: 'Reduced transaction time by 70%, increased user satisfaction to 95%.'
      }
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Comprehensive design system for consistent brand experience across platforms.',
      category: 'Design',
      image: designSystemImage,
      technologies: ['Figma', 'React', 'Storybook', 'TypeScript'],
      link: '#',
      github: '#',
      liveDemo: '#',
      stats: {
        users: '100+',
        rating: 4.7,
        downloads: '500+',
        completion: '100%'
      },
      details: {
        problem: 'Inconsistent design patterns across multiple products and platforms.',
        solution: 'Created a comprehensive design system with reusable components and guidelines.',
        process: 'Audit existing designs, create component library, document guidelines.',
        results: 'Reduced design time by 60%, improved consistency across all products.'
      }
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Collaborative task management platform with real-time updates and team features.',
      category: 'Full Stack',
      image: ecommerceImage,
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      link: '#',
      github: '#',
      liveDemo: '#',
      stats: {
        users: '5K+',
        rating: 4.6,
        downloads: '2K+',
        completion: '95%'
      },
      details: {
        problem: 'Teams needed a better way to collaborate and track project progress.',
        solution: 'Built a real-time collaborative platform with advanced project management features.',
        process: 'User interviews, MVP development, beta testing, feature iterations.',
        results: 'Improved team productivity by 40%, reduced project delays by 60%.'
      }
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations and responsive design.',
      category: 'UI/UX',
      image: bankingImage,
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      github: '#',
      liveDemo: '#',
      stats: {
        users: '1K+',
        rating: 4.8,
        downloads: '500+',
        completion: '100%'
      },
      details: {
        problem: 'Need for a modern, animated portfolio to showcase work effectively.',
        solution: 'Created a responsive portfolio with smooth animations and modern design.',
        process: 'Design exploration, animation planning, development, optimization.',
        results: 'Increased engagement by 200%, improved conversion rate by 150%.'
      }
    },
    {
      id: 6,
      title: 'AI Chat Application',
      description: 'Intelligent chat application powered by machine learning and natural language processing.',
      category: 'Full Stack',
      image: designSystemImage,
      technologies: ['Python', 'React', 'TensorFlow', 'WebSocket'],
      link: '#',
      github: '#',
      liveDemo: '#',
      stats: {
        users: '20K+',
        rating: 4.5,
        downloads: '10K+',
        completion: '90%'
      },
      details: {
        problem: 'Businesses needed intelligent customer support automation.',
        solution: 'Developed an AI-powered chat system with natural language understanding.',
        process: 'ML model training, API development, frontend integration, testing.',
        results: 'Reduced support costs by 50%, improved response time by 80%.'
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const projectStats = {
    totalProjects: projects.length,
    totalUsers: '100K+',
    averageRating: 4.7,
    totalDownloads: '50K+',
    completionRate: '98%'
  };

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
            My <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Explore my latest work across web development, mobile apps, and design
          </motion.p>
        </motion.div>

        {/* Project Statistics */}
        <section className="mb-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.totalProjects}</div>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </CardContent>
            </Card>
            <Card className="glass text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.totalUsers}</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </CardContent>
            </Card>
            <Card className="glass text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.averageRating}</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
            <Card className="glass text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.totalDownloads}</div>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </CardContent>
            </Card>
            <Card className="glass text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.completionRate}</div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Filters and Search */}
        <section className="mb-12">
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass overflow-hidden hover:border-primary/30 transition-all duration-300">
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
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm"
                          onClick={() => {
                            setSelectedProject(project);
                            setIsModalOpen(true);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm"
                          asChild
                        >
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        <span>{project.stats.users}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        <span>{project.stats.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        <span>{project.stats.downloads}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Project Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                      <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Project Stats</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2 text-primary" />
                              <span className="text-sm">{selectedProject.stats.users} users</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 mr-2 text-primary" />
                              <span className="text-sm">{selectedProject.stats.rating} rating</span>
                            </div>
                            <div className="flex items-center">
                              <Download className="w-4 h-4 mr-2 text-primary" />
                              <span className="text-sm">{selectedProject.stats.downloads} downloads</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-primary" />
                              <span className="text-sm">{selectedProject.stats.completion} complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Case Study</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Problem</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Solution</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Process</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.process}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Results</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4 pt-6">
                    <Button asChild>
                      <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Code className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Projects; 
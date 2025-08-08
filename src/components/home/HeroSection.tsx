import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = ['Developer', 'Designer', 'Creator', 'Innovator'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText('');
    const timeout = setTimeout(() => {
      setCurrentText(texts[textIndex]);
    }, 150);
    
    return () => clearTimeout(timeout);
  }, [textIndex]);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-16">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-24 h-24 bg-primary/20 rounded-lg rotate-45"
        animate={{ 
          rotate: [45, 135, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main heading */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-plain-regular mb-6 text-glow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block gradient-text text-bounce">Faith Oseni</span>
              </motion.h1>
              
              {/* Animated subtitle */}
              <motion.div
                className="text-2xl md:text-3xl font-silkserif-regular mb-8 text-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span>Creative </span>
                <motion.span
                  key={textIndex}
                  className="text-primary inline-block text-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentText}
                </motion.span>
              </motion.div>
              
              <motion.p
                className="text-xl text-muted-foreground max-w-2xl leading-relaxed text-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Crafting digital experiences with code, design, and creativity. 
                Passionate about building innovative solutions that make a difference.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link to="/projects">
                <Button 
                  variant="default" 
                  size="lg"
                  className="group relative overflow-hidden bg-primary hover:bg-primary-glow transition-all duration-300 font-plain-regular text-lg px-8 py-6"
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-plain-regular text-lg px-8 py-6"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-4 glass rounded-full hover:bg-primary/20 transition-all duration-300 group text-glow"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative z-10 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Main Image */}
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[600px] rounded-3xl overflow-hidden glass">
                <img
                  src={heroImage}
                  alt="Faith Oseni - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                
                {/* Floating elements around the image */}
                <motion.div
                  className="absolute -top-6 -right-6 w-8 h-8 bg-primary/30 rounded-full"
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/30 rounded-full"
                  animate={{ 
                    y: [0, 15, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/20 rounded-full"
                  animate={{ 
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground text-caption"
          >
            <span className="mb-2 text-lift">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
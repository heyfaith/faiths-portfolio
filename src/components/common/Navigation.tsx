import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SKILLS', href: '/skills' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'CONTACT', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'YouTube', href: '#' },
  ];

  return (
    <>
      {/* Logo - Top Left Corner */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link to="/" className="block">
          <motion.h1 
            className="text-2xl font-plain-regular gradient-text text-glow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Faith.
          </motion.h1>
        </Link>
          </motion.div>

      {/* Menu Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300 font-plain-regular"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="w-6 h-6" />
      </motion.button>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-3 glass rounded-full hover:bg-primary/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Menu Content */}
            <div className="flex h-full">
              {/* Left Side - Main Navigation */}
              <motion.div
                className="flex-1 flex flex-col justify-center pl-24 pr-12"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Logo in Menu */}
                <motion.div
                  className="mb-16"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <h1 className="text-3xl font-plain-regular gradient-text text-glow">
                      Faith.
                    </h1>
                  </Link>
                </motion.div>

                {/* Main Navigation Links */}
                <nav className="space-y-6">
                {navItems.map((item, index) => (
                    <motion.div
                    key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className={`block text-4xl md:text-5xl font-plain-regular transition-all duration-300 text-lift ${
                          location.pathname === item.href 
                            ? 'text-muted-foreground font-silkserif-regular' 
                            : 'text-foreground hover:text-primary'
                        }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Right Side - Socials and Contact Info */}
              <motion.div
                className="w-80 p-12 flex flex-col justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Socials */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-lg font-plain-regular mb-6 text-glow">Socials</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors font-plain-light text-caption text-lift"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

                {/* Contact Info */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-lg font-plain-regular mb-6 text-glow">Contact</h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center text-sm text-muted-foreground font-plain-light text-caption"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Mail className="w-4 h-4 mr-3" />
                      <span>osenif00@gmail.com</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center text-sm text-muted-foreground font-plain-light text-caption"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.85 }}
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      <span>+234 808 573 2327</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-lg font-plain-regular mb-6 text-glow">Address</h3>
                  <p className="text-sm text-muted-foreground font-plain-light text-caption text-lift">
                    Lagos, Nigeria
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
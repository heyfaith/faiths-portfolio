import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Calendar,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'faith.oseni@example.com',
      type: 'email',
      link: 'mailto:faith.oseni@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      type: 'tel',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      type: 'text',
      link: '#'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      description: 'Usually much faster during business hours',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/faithoseni',
      color: 'hover:text-gray-400',
      description: 'Check out my open source projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/faithoseni',
      color: 'hover:text-blue-400',
      description: 'Connect with me professionally'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/faithoseni',
      color: 'hover:text-blue-400',
      description: 'Follow me for tech updates'
    }
  ];

  const availability = [
    { day: 'Monday', time: '9:00 AM - 6:00 PM', available: true },
    { day: 'Tuesday', time: '9:00 AM - 6:00 PM', available: true },
    { day: 'Wednesday', time: '9:00 AM - 6:00 PM', available: true },
    { day: 'Thursday', time: '9:00 AM - 6:00 PM', available: true },
    { day: 'Friday', time: '9:00 AM - 6:00 PM', available: true },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM', available: true },
    { day: 'Sunday', time: 'Closed', available: false }
  ];

  const timezones = [
    { name: 'PST (UTC-8)', current: true },
    { name: 'EST (UTC-5)', current: false },
    { name: 'GMT (UTC+0)', current: false },
    { name: 'CET (UTC+1)', current: false }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Let's discuss your project and bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold">Send Message</h2>
                </div>
                
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="glass p-4 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{info.label}</h3>
                            <a
                              href={info.link}
                              className="text-primary hover:underline transition-colors"
                            >
                              {info.value}
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <Card className="glass p-4 text-center hover:border-primary/30 transition-all duration-300">
                        <CardContent className="p-0">
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                              <social.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">{social.label}</h3>
                            <p className="text-xs text-muted-foreground">{social.description}</p>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Availability & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Availability Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold">Availability</h2>
                </div>
                
                <div className="space-y-3">
                  {availability.map((day, index) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/20"
                    >
                      <span className="font-medium">{day.day}</span>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-muted-foreground">{day.time}</span>
                        <Badge variant={day.available ? 'default' : 'secondary'}>
                          {day.available ? 'Available' : 'Closed'}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-semibold mb-2">Timezone</h3>
                  <div className="space-y-2">
                    {timezones.map((tz) => (
                      <div key={tz.name} className="flex items-center justify-between">
                        <span className="text-sm">{tz.name}</span>
                        {tz.current && (
                          <Badge variant="default" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location/Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold">Location</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">San Francisco, CA</h3>
                      <p className="text-sm text-muted-foreground">Open to remote work worldwide</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <span className="font-medium">Travel Availability</span>
                      <Badge variant="default">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <span className="font-medium">Remote Work</span>
                      <Badge variant="default">Preferred</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <span className="font-medium">Time Zone</span>
                      <Badge variant="secondary">PST (UTC-8)</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
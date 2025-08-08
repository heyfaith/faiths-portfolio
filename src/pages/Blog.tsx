import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Web Development', 'Design', 'Technology', 'Tutorial', 'Industry'];

  const tags = [
    { name: 'React', count: 15, popular: true },
    { name: 'TypeScript', count: 12, popular: true },
    { name: 'UI/UX', count: 8, popular: false },
    { name: 'JavaScript', count: 20, popular: true },
    { name: 'CSS', count: 10, popular: false },
    { name: 'Node.js', count: 6, popular: false },
    { name: 'Design Systems', count: 4, popular: false },
    { name: 'Performance', count: 7, popular: false },
    { name: 'Accessibility', count: 5, popular: false },
    { name: 'Testing', count: 9, popular: false }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with React and TypeScript',
      excerpt: 'Learn how to create scalable and maintainable web applications using React and TypeScript. This comprehensive guide covers best practices, patterns, and real-world examples.',
      category: 'Web Development',
      tags: ['React', 'TypeScript', 'JavaScript'],
      author: 'Faith Oseni',
      date: '2024-01-15',
      readTime: '8 min read',
      views: '2.5K',
      featured: true,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'The Future of Design Systems in 2024',
      excerpt: 'Explore the latest trends in design systems and how they are evolving to meet the demands of modern web development. From component libraries to design tokens.',
      category: 'Design',
      tags: ['Design Systems', 'UI/UX', 'CSS'],
      author: 'Faith Oseni',
      date: '2024-01-12',
      readTime: '6 min read',
      views: '1.8K',
      featured: false,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Optimizing Performance in Next.js Applications',
      excerpt: 'Discover advanced techniques for optimizing performance in Next.js applications. From code splitting to image optimization, learn how to build lightning-fast web apps.',
      category: 'Technology',
      tags: ['Next.js', 'Performance', 'React'],
      author: 'Faith Oseni',
      date: '2024-01-10',
      readTime: '10 min read',
      views: '3.2K',
      featured: false,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'A Complete Guide to CSS Grid Layout',
      excerpt: 'Master CSS Grid Layout with this comprehensive tutorial. Learn how to create complex layouts with ease and understand the fundamental concepts.',
      category: 'Tutorial',
      tags: ['CSS', 'Grid', 'Layout'],
      author: 'Faith Oseni',
      date: '2024-01-08',
      readTime: '12 min read',
      views: '4.1K',
      featured: false,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Building Accessible Web Applications',
      excerpt: 'Learn how to create web applications that are accessible to all users. This guide covers WCAG guidelines, ARIA attributes, and testing strategies.',
      category: 'Web Development',
      tags: ['Accessibility', 'WCAG', 'Testing'],
      author: 'Faith Oseni',
      date: '2024-01-05',
      readTime: '9 min read',
      views: '2.9K',
      featured: false,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'The Rise of Micro-Frontends Architecture',
      excerpt: 'Explore micro-frontends architecture and how it is changing the way we build large-scale web applications. Learn about implementation strategies and best practices.',
      category: 'Technology',
      tags: ['Micro-Frontends', 'Architecture', 'JavaScript'],
      author: 'Faith Oseni',
      date: '2024-01-03',
      readTime: '11 min read',
      views: '1.6K',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
            My <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Thoughts, tutorials, and insights on web development, design, and technology
          </motion.p>
        </motion.div>

        {/* Search and Filters */}
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
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>
        </section>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={filteredPosts.find(post => post.featured)?.image}
                      alt="Featured post"
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="bg-primary">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">
                        {filteredPosts.find(post => post.featured)?.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(filteredPosts.find(post => post.featured)?.date || '')}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      {filteredPosts.find(post => post.featured)?.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {filteredPosts.find(post => post.featured)?.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{filteredPosts.find(post => post.featured)?.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{filteredPosts.find(post => post.featured)?.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{filteredPosts.find(post => post.featured)?.views}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {currentPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="glass overflow-hidden hover:border-primary/30 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md">
                          +{post.tags.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="mb-16">
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </section>
        )}

        {/* Categories & Tags */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Popular Tags */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Tag className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold">Popular Tags</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <motion.div
                      key={tag.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant={tag.popular ? 'default' : 'secondary'}
                        className="cursor-pointer hover:bg-primary/80 transition-colors"
                      >
                        {tag.name} ({tag.count})
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Blog Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold">Blog Statistics</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{blogPosts.length}</div>
                    <div className="text-sm text-muted-foreground">Total Posts</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">{categories.length - 1}</div>
                    <div className="text-sm text-muted-foreground">Categories</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{tags.length}</div>
                    <div className="text-sm text-muted-foreground">Tags</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">15K+</div>
                    <div className="text-sm text-muted-foreground">Total Views</div>
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

export default Blog; 
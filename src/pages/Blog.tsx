import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Calendar, User, ArrowRight, Filter, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Transforming Rural Education: The Digital Classroom Revolution",
      excerpt: "How we're bringing technology to remote villages and changing the way children learn in rural India.",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-15",
      category: "Education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Medical Miracles in Remote Villages: Our Mobile Health Impact",
      excerpt: "Stories from our mobile health clinics and the lives saved through accessible healthcare initiatives.",
      author: "Dr. Priya Sharma",
      date: "2024-01-10",
      category: "Healthcare", 
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Green Villages: A Sustainable Future for Rural Communities",
      excerpt: "Exploring our environmental initiatives and how communities are embracing renewable energy and sustainable practices.",
      author: "Arjun Patel", 
      date: "2024-01-05",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "The ₹1 Revolution: How Micro-Donations Create Macro Impact",
      excerpt: "Breaking down the mathematics and psychology behind our groundbreaking ₹1 donation campaign.",
      author: "Meera Singh",
      date: "2023-12-28",
      category: "Impact Stories",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "Volunteer Spotlight: Meet the Changemakers Behind Our Success",
      excerpt: "Celebrating the incredible volunteers who dedicate their time and energy to our mission.",
      author: "Community Team",
      date: "2023-12-20",
      category: "Volunteer Stories",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "Annual Impact Report 2023: Celebrating Milestones Together",
      excerpt: "A comprehensive look at our achievements, challenges, and the communities we've transformed this year.",
      author: "Leadership Team",
      date: "2023-12-15",
      category: "Annual Report",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      readTime: "12 min read",
      featured: true
    }
  ];

  const categories = ['All', 'Education', 'Healthcare', 'Sustainability', 'Impact Stories', 'Volunteer Stories', 'Annual Report', 'Events'];

  const recentPosts = blogPosts.slice(0, 4);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Education': return 'bg-sunset-orange/10 text-sunset-orange';
      case 'Healthcare': return 'bg-mauve-purple/10 text-mauve-purple';
      case 'Sustainability': return 'bg-sage-green/10 text-sage-green';
      case 'Impact Stories': return 'bg-dusty-rose/10 text-dusty-rose';
      case 'Volunteer Stories': return 'bg-peach-blush/10 text-charcoal-gray';
      case 'Annual Report': return 'bg-charcoal-gray/10 text-charcoal-gray';
      default: return 'bg-vanilla-cream/10 text-charcoal-gray';
    }
  };

  return (
    <div className="min-h-screen bg-vanilla-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-vanilla-cream to-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-inter font-bold text-charcoal-gray mb-6">
              Stories of <span className="text-mauve-purple">Change</span>
            </h1>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
              Discover inspiring stories, impact updates, and insights from our journey 
              of transforming communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-sage-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-inter font-bold text-charcoal-gray mb-12 text-center">Featured Stories</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className={`bg-white border-peach-blush shadow-elegant hover:shadow-strong hover:scale-105 transition-all duration-300 group overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className={`font-inter font-bold text-charcoal-gray ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className={`text-charcoal-gray/70 leading-relaxed ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-charcoal-gray/60">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="text-mauve-purple font-medium">{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full border-mauve-purple/30 text-charcoal-gray hover:bg-mauve-purple/10">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-gray/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-peach-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-purple focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="h-5 w-5 text-charcoal-gray/60 mr-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-mauve-purple text-white hover:bg-mauve-purple/90' 
                      : 'border-mauve-purple/30 text-charcoal-gray hover:bg-mauve-purple/10'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-inter font-bold text-charcoal-gray mb-8">
                Latest Articles
                {selectedCategory !== 'All' && (
                  <span className="text-lg font-normal text-charcoal-gray/60 ml-2">
                    in {selectedCategory}
                  </span>
                )}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card key={post.id} className="bg-white border-peach-blush shadow-elegant hover:shadow-strong hover:scale-105 transition-all duration-300 group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-inter font-bold text-charcoal-gray">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-charcoal-gray/70 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-charcoal-gray/60">
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-mauve-purple font-medium">{post.readTime}</span>
                        <Button size="sm" variant="outline" className="border-mauve-purple/30 text-charcoal-gray hover:bg-mauve-purple/10">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-charcoal-gray/60">
                    No articles found matching your search criteria.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="mt-4 donation-button"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Recent Posts */}
              <Card className="bg-white border-peach-blush shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-inter font-bold text-charcoal-gray">
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="pb-4 border-b border-peach-blush last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-charcoal-gray text-sm mb-2 hover:text-mauve-purple cursor-pointer transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-charcoal-gray/60">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-mauve-purple to-dusty-rose text-white border-none shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-inter font-bold">
                    Stay Updated
                  </CardTitle>
                  <p className="text-white/90 text-sm">
                    Subscribe to our newsletter for the latest stories and impact updates
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="w-full bg-white text-mauve-purple hover:bg-white/90 font-semibold">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="bg-white border-peach-blush shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-inter font-bold text-charcoal-gray flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Education', 'Healthcare', 'Rural Development', 'Volunteers', 'Impact', 'Community', 'Sustainability', 'Charity'].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-sage-mist text-charcoal-gray text-xs rounded-full cursor-pointer hover:bg-mauve-purple hover:text-white transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
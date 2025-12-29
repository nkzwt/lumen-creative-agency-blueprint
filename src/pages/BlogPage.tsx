import React from 'react';
import { PageTransition } from '@/components/PageTransition';
import { BLOG_POSTS } from '@/lib/data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
export function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);
  return (
    <PageTransition>
      <div className="space-y-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Insights & <span className="text-gradient">Ideas</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Thought leadership from the intersection of design, technology, and strategy.
          </p>
        </div>
        {/* Featured Post */}
        <Link to={`/blog/${featuredPost.slug}`} className="group block">
          <div className="relative aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-muted border mb-8">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <div className="space-y-4 max-w-3xl text-white">
                <Badge className="bg-primary hover:bg-primary border-none text-white">{featuredPost.category}</Badge>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight group-hover:underline decoration-primary underline-offset-4">
                  {featuredPost.title}
                </h2>
                <p className="text-white/70 text-lg line-clamp-2">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 pt-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border border-white/20">
                      <AvatarImage src={featuredPost.author.image} />
                      <AvatarFallback>{featuredPost.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{featuredPost.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readingTime}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPost.date}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {otherPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block space-y-4">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-muted border">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.image} />
                    </Avatar>
                    <span className="text-xs font-medium">{post.author.name}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';
import { BLOG_POSTS } from '@/lib/data';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
export function BlogDetailPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);
  return (
    <PageTransition>
      <article className="space-y-12">
        <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
        </Link>
        <header className="space-y-8 text-center max-w-4xl mx-auto">
          <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20 px-4 py-1">{post.category}</Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={post.author.image} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-bold text-foreground leading-none">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readingTime}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            </div>
          </div>
        </header>
        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden bg-muted border">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
          <p className="text-xl text-muted-foreground leading-relaxed italic mb-8">
            {post.excerpt}
          </p>
          <div className="text-lg leading-relaxed space-y-6">
            {post.content.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        <footer className="max-w-3xl mx-auto border-t pt-12">
          <div className="bg-muted/30 p-8 rounded-3xl border flex flex-col md:flex-row gap-8 items-center">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={post.author.image} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h4 className="text-xl font-bold font-display">Written by {post.author.name}</h4>
              <p className="text-muted-foreground leading-relaxed">{post.author.bio}</p>
            </div>
          </div>
        </footer>
        {relatedPosts.length > 0 && (
          <section className="pt-20 border-t space-y-10">
            <h2 className="text-3xl font-display font-bold">Recommended Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(p => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group block space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted border">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="font-display font-bold group-hover:text-primary transition-colors leading-tight">{p.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </PageTransition>
  );
}
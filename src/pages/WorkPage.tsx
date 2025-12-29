import React, { useState } from 'react';
import { PageTransition } from '@/components/PageTransition';
import { PROJECTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
export function WorkPage() {
  const categories = ['All', 'Web', 'Branding', 'Design'];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = PROJECTS.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );
  return (
    <PageTransition>
      <div className="space-y-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A selection of our favorite projects where we pushed the boundaries of what's possible in the digital space.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-6"
            >
              {cat}
            </Button>
          ))}
        </div>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted border"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-display font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-sm">{project.description}</p>
                    <div className="mt-6 font-semibold text-foreground border-b border-foreground w-max pb-1">View Case Study</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
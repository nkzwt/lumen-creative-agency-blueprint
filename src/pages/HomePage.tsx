import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Code, Palette, Zap, Globe, Layers, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUIStore } from '@/lib/store';
import { Section } from '@/components/ui/section';
export function HomePage() {
  const openQuoteModal = useUIStore((s) => s.openQuoteModal);
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };
  const services = [
    { title: 'Brand Identity', icon: Palette, desc: 'Visual storytelling that resonates.' },
    { title: 'Web Development', icon: Code, desc: 'High-performance digital products.' },
    { title: 'Digital Strategy', icon: Zap, desc: 'Data-driven growth plans.' },
  ];
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative min-h-[85vh] flex items-center pt-32 lg:pt-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[1.1] max-w-4xl mx-auto">
            Where Vision <span className="text-gradient">Meets</span> Velocity.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lumen is a creative partner for brands that refuse to blend in. We build fast, minimalist, and deeply immersive digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg group" onClick={openQuoteModal}>
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
              View Work
            </Button>
          </div>
        </motion.div>
      </Section>
      {/* Services Teaser */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Uncompromising quality across every pixel.</h2>
            <p className="text-muted-foreground text-lg">
              We specialize in the intersection of design and technology. Our modular approach ensures scalability without sacrificing aesthetic integrity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {services.map((s, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="aspect-square rounded-2xl bg-muted border overflow-hidden" />
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl bg-muted border overflow-hidden" />
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Happy Clients', val: '150+', icon: Users },
            { label: 'Projects Completed', val: '320+', icon: Layers },
            { label: 'Global Awards', val: '12', icon: Zap },
            { label: 'Active Countries', val: '18', icon: Globe },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex justify-center mb-4">
                <item.icon className="w-8 h-8 text-primary opacity-50" />
              </div>
              <div className="text-4xl font-display font-bold">{item.val}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>
      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground py-20 rounded-[2.5rem] my-20 mx-4 md:mx-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">Ready to illuminate <br /> your brand?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Let's build something that matters. Join the ranks of industry leaders who chose Lumen for their digital future.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg" onClick={openQuoteModal}>
            Contact Us Today
          </Button>
        </div>
      </Section>
    </div>
  );
}
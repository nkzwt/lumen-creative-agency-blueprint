import React from 'react';
import { PageTransition } from '@/components/PageTransition';
import { CORE_VALUES } from '@/lib/data';
import { motion } from 'framer-motion';
export function AboutPage() {
  return (
    <PageTransition>
      <div className="space-y-24">
        {/* Hero */}
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            We build the <span className="text-gradient">future</span> of digital interaction.
          </motion.h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Lumen was founded on the belief that the digital world deserves better than cookie-cutter templates. We are a collective of designers and engineers dedicated to high-performance storytelling.
          </p>
        </div>
        {/* Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CORE_VALUES.map((value, idx) => (
            <div key={idx} className="space-y-4 p-8 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </section>
        {/* Timeline */}
        <section className="space-y-12">
          <h2 className="text-3xl font-display font-bold">Our Journey</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {[
              { year: '2018', title: 'The Spark', desc: 'Lumen founded in a small studio in Berlin.' },
              { year: '2020', title: 'Going Global', desc: 'Expanded into 4 continents with 100% remote talent.' },
              { year: '2023', title: 'Next Gen', desc: 'Launched our proprietary AI-assisted design framework.' }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border bg-card shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-primary font-display">{item.year}</div>
                  </div>
                  <div className="text-lg font-bold mb-2">{item.title}</div>
                  <div className="text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
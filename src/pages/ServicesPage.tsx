import React, { useState } from 'react';
import { PageTransition } from '@/components/PageTransition';
import { SERVICES } from '@/lib/data';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
export function ServicesPage() {
  const categories = ['All', 'Design', 'Development', 'Marketing'];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredServices = SERVICES.filter(s => 
    activeCategory === 'All' || s.category === activeCategory
  );
  return (
    <PageTransition>
      <div className="space-y-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-display font-bold mb-6">Strategic <span className="text-gradient">Offerings</span></h1>
          <p className="text-lg text-muted-foreground">
            We provide specialized expertise at every stage of the digital product lifecycle.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <Link key={service.id} to={`/services/${service.slug}`} className="group">
              <Card className="h-full border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 bg-muted/20">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.shortDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map(f => (
                      <span key={f} className="text-xs px-2 py-1 rounded bg-background border text-muted-foreground">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
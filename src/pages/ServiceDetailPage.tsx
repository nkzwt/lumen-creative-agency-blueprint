import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';
import { SERVICES } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useUIStore } from '@/lib/store';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);
  const openQuoteModal = useUIStore(s => s.openQuoteModal);
  if (!service) return <Navigate to="/services" replace />;
  const relatedServices = SERVICES.filter(s => s.id !== service.id).slice(0, 2);
  return (
    <PageTransition>
      <div className="space-y-20">
        <Link to="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Services
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <service.icon className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.content}
            </p>
            <Button size="lg" className="h-14 px-8 text-lg" onClick={openQuoteModal}>
              Start a {service.title} Project
            </Button>
          </div>
          <div className="bg-muted/30 p-8 rounded-3xl border space-y-8">
            <h3 className="text-2xl font-display font-bold">Key Capabilities</h3>
            <ul className="space-y-4">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Process */}
        <div className="space-y-12">
          <h2 className="text-3xl font-display font-bold">Our Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Discovery', 'Strategy', 'Execution', 'Launch'].map((step, idx) => (
              <div key={idx} className="relative p-6 bg-muted/20 border rounded-2xl">
                <span className="text-4xl font-display font-black text-primary/10 absolute top-4 right-4 leading-none">0{idx + 1}</span>
                <h4 className="text-xl font-bold mb-2">{step}</h4>
                <div className="h-1 w-12 bg-primary/30 rounded-full" />
              </div>
            ))}
          </div>
        </div>
        {/* Related */}
        <div className="border-t pt-20">
          <h2 className="text-2xl font-display font-bold mb-10">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedServices.map(s => (
              <Link key={s.id} to={`/services/${s.slug}`} className="group p-6 rounded-2xl border hover:border-primary/30 transition-all bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded bg-primary/10 text-primary">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold">{s.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
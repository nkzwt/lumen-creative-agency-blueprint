import React from 'react';
import { Section } from '@/components/ui/section';
const Placeholder = ({ title }: { title: string }) => (
  <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
    <h1 className="text-5xl font-display font-bold">{title}</h1>
    <p className="text-muted-foreground text-lg max-w-md">
      We are currently crafting this experience. Check back soon for the full reveal.
    </p>
    <div className="w-24 h-1 bg-primary rounded-full mt-8 animate-pulse" />
  </Section>
);
export const AboutPage = () => <Placeholder title="About Our Agency" />;
export const ServicesPage = () => <Placeholder title="Strategic Services" />;
export const ServiceDetail = () => <Placeholder title="Service Deep Dive" />;
export const WorkPage = () => <Placeholder title="Featured Case Studies" />;
export const TeamPage = () => <Placeholder title="Meet the Visionaries" />;
export const BlogPage = () => <Placeholder title="Industry Insights" />;
export const ContactPage = () => <Placeholder title="Let's Connect" />;
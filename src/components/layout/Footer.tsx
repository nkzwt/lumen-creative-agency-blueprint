import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight uppercase">Lumen</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting digital experiences that define the future of creative agency standards. Minimalist by design, powerful by execution.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/work" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Portfolio</Link></li>
              <li><Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Meet the Team</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/web-design" className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Design</Link></li>
              <li><Link to="/services/branding" className="text-sm text-muted-foreground hover:text-primary transition-colors">Branding</Link></li>
              <li><Link to="/services/ui-ux" className="text-sm text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest insights and projects.</p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-background" />
              <Button size="sm">Join</Button>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Lumen Creative Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
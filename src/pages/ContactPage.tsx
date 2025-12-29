import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Mail, Phone, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject is too short'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type ContactFormValues = z.infer<typeof contactSchema>;
export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });
  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, type: 'contact' }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Message sent successfully!', { description: "We'll be in touch soon." });
        form.reset();
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err) {
      toast.error('Submission failed', { description: err instanceof Error ? err.message : 'Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <PageTransition>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-display font-bold">Let's <span className="text-gradient">Talk</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a visionary project in mind? We'd love to hear about it. Our team is ready to bring your ideas into the digital light.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all group">
              <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-lg mb-1">Email Us</h4>
              <p className="text-muted-foreground text-sm">hello@lumencreative.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all group">
              <Phone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-lg mb-1">Call Us</h4>
              <p className="text-muted-foreground text-sm">+1 (555) 012-3456</p>
            </div>
            <div className="p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all group sm:col-span-2">
              <MapPin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-lg mb-1">Main Studio</h4>
              <p className="text-muted-foreground text-sm">2400 Radiant Way, Suite 100, San Francisco, CA 94103</p>
            </div>
          </div>
          <div className="pt-8 border-t">
            <div className="aspect-[16/6] rounded-2xl bg-muted/20 border flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                 {/* Stylized world map placeholder */}
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="20" cy="30" r="1" fill="currentColor" />
                    <circle cx="80" cy="40" r="1" fill="currentColor" />
                    <circle cx="50" cy="70" r="1" fill="currentColor" />
                 </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Operating Globally</p>
            </div>
          </div>
        </div>
        <div className="bg-card p-8 md:p-12 rounded-[2.5rem] border shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="John Doe" className="bg-muted/50 border-muted" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl><Input placeholder="john@example.com" className="bg-muted/50 border-muted" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl><Input placeholder="Project Inquiry" className="bg-muted/50 border-muted" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your goals..." 
                        className="min-h-[150px] bg-muted/50 border-muted resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg group">
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </PageTransition>
  );
}
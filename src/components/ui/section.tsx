import React from 'react';
import { cn } from '@/lib/utils';
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}
export function Section({ 
  children, 
  className, 
  container = true,
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn(
        "section-padding",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
import React, { useState } from 'react';
import { PageTransition } from '@/components/PageTransition';
import { TEAM_MEMBERS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Twitter, Linkedin, Github } from 'lucide-react';
export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);
  return (
    <PageTransition>
      <div className="space-y-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-display font-bold mb-6">The <span className="text-gradient">Visionaries</span></h1>
          <p className="text-lg text-muted-foreground">
            Lumen is powered by a globally distributed team of creative rebels and technical architects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-muted relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => setSelectedMember(member)}
                  >
                    View Biography
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="sm:max-w-[500px]">
            {selectedMember && (
              <>
                <DialogHeader>
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4">
                    <img src={selectedMember.image} alt={selectedMember.name} className="object-cover w-full h-full" />
                  </div>
                  <DialogTitle className="text-2xl font-display">{selectedMember.name}</DialogTitle>
                  <DialogDescription className="text-primary font-semibold">
                    {selectedMember.role}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedMember.bio}
                  </p>
                  <div className="flex gap-4">
                    <a href={selectedMember.socials.twitter} className="p-2 rounded-full border hover:bg-muted transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href={selectedMember.socials.linkedin} className="p-2 rounded-full border hover:bg-muted transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href={selectedMember.socials.github} className="p-2 rounded-full border hover:bg-muted transition-colors"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
}
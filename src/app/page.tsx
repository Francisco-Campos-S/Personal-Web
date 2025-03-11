'use client';
import { useState } from "react";
import { ProfileImage } from "@/components/ProfileImage";
import { ContentCreatorSection } from "@/components/ContentCreator/ContentCreatorSection";
import { DeveloperSection } from "@/components/Developer/DeveloperSection";

export default function Home() {
  const [activeHover, setActiveHover] = useState<'left' | 'right' | null>('left');

  return (
    <div className={`h-screen w-screen flex px-xl ${activeHover === null ? 'items-center' : ''} justify-center`}>
        <ContentCreatorSection 
          activeHover={activeHover}
          onHover={() => setActiveHover('left')}
          onLeave={() => setActiveHover(null)}
        />
        <ProfileImage activeHover={activeHover} />
        <DeveloperSection 
          activeHover={activeHover}
          onHover={() => setActiveHover('right')}
          onLeave={() => setActiveHover(null)}
        />
    </div>
  );
}

'use client';
import Image from "next/image";

interface ProfileImageProps {
  activeHover: 'left' | 'right' | null;
}

export function ProfileImage({ activeHover }: ProfileImageProps) {
  return (
    <div className="relative h-screen flex justify-center overflow-visible">
      <div 
        className={`h-full transition-transform duration-500 ease-in-out
          ${activeHover === 'left' ? 'translate-x-48' : ''}
          ${activeHover === 'right' ? '-translate-x-48' : ''}`}
      >
        <Image 
          id="profile-image"
          src="/fondo.png" 
          alt="Profile" 
          width={1000}
          height={1000}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
    </div>
  );
} 
import { PersonalProjects } from "./PersonalProjects";
import { WorkExperience } from "./WorkExperience";
import Image from 'next/image';

interface DeveloperSectionProps {
  activeHover: 'left' | 'right' | null;
  onHover: () => void;
  onLeave: () => void;
}

export function DeveloperSection({ activeHover, onHover, onLeave }: DeveloperSectionProps) {
  return (
    <div className="flex justify-center">
      <div 
        className="w-fit"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="flex flex-col">
          <h2 
            className={`text-xl text-off-white font-bold transition-all duration-500 ease-in-out transform-origin-left whitespace-nowrap
              ${activeHover === 'right' ? 'opacity-100 text-xxl text-center' : 'scale-100'}
              ${activeHover === 'left' ? 'opacity-0' : ''}`}
          >
            Software <span className="text-dark-gray">Developer</span>
          </h2>
          
          <div className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-y-xl
            ${activeHover === 'right' ? 'opacity-100 max-h-[1000px] w-[50vw]' : 'opacity-0 max-h-0 w-0'}`}>

              <p className="text-sm font-bold text-center text-off-white opacity-20 italic max-w-full mx-xl">
                Backend Software Engineer with 3 years of experience in love with software architecture starting in Indie Hacking.
              </p>
              
              <div className="flex flex-col gap-y-xs">
                <h3 className="text-off-white text-lg font-bold">Working at</h3>
                <WorkExperience />
              </div>
              
              <div className="flex flex-col gap-y-md">
                <div className="flex flex-col gap-y-xs">
                  <h3 className="text-off-white text-lg font-bold">Personal Projects</h3>
                  <PersonalProjects />
                </div>

                <div className="flex gap-y-xs w-full justify-between px-xxl">
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={96}
                    height={96}
                  />
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={96}
                    height={96}
                  />
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub"
                    width={96}
                    height={96}
                  />
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
} 
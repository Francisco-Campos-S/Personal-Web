import { ChannelProfile } from './AlpacaTechSection/ChannelProfile';
import CollaborationsSection from './CollaborationsSection/Collaborations';
import LatestVideosSection from './LatestVideosSection/LatestVideos';

interface ContentCreatorSectionProps {
  activeHover: 'left' | 'right' | null;
  onHover: () => void;
  onLeave: () => void;
}

interface Stats {
  subscribers: number;
  views: number;
  videos: number;
}

export function ContentCreatorSection({ activeHover, onHover, onLeave }: ContentCreatorSectionProps) {
  const stats: Stats = {
    subscribers: 27972,
    views: 3992867,
    videos: 948
  };

  return (
    <div className="flex justify-center">
      <div 
        className="flex flex-col items-center w-full relative"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <h2 
          className={`text-xl font-bold transition-all duration-500 ease-in-out cursor-pointer transform-origin-right whitespace-nowrap max-w-full
            ${activeHover === 'left' ? 'opacity-100 text-xxl text-center' : 'scale-100'}
            ${activeHover === 'right' ? 'opacity-0' : ''}`}
        >
          Tech <span className="text-dark-gray">Content</span> Creator
        </h2>

        <div className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-y-md
          ${activeHover === 'left' ? 'opacity-100 max-h-[1000px] w-[50vw]' : 'opacity-0 max-h-0 w-0'}`}>
          <ChannelProfile stats={stats} />
          <LatestVideosSection />
          <CollaborationsSection />
        </div>
      </div>
    </div>
  );
} 
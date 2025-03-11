import SubsIcon from "@/components/icons/SubsIcon";
import ChannelStatItem from "./ChannelStatItem";

interface Stats {
  subscribers: number;
  views: number;
  videos: number;
}

interface ChannelProfileProps {
  stats: Stats;
}

export function ChannelProfile({ stats }: ChannelProfileProps) {
  return (
    <div className="flex flex-col items-center gap-y-md">
      <div className="flex items-center gap-x-xs">
        <span className="text-pink-500">👾</span>
        <h3 className="text-off-white text-lg font-bold">AlpacaTech</h3>
        <span className="text-pink-500">👾</span>
      </div>
      
      <div className="flex gap-x-lg text-center">
        <ChannelStatItem value={stats.subscribers} label="Subscribers" icon={<SubsIcon width={24} height={24} />} />
        <ChannelStatItem value={stats.views} label="Views" icon={<SubsIcon width={24} height={24} />} />
        <ChannelStatItem value={stats.videos} label="Videos" icon={<SubsIcon width={24} height={24} />} />
      </div>
    </div>
  );
}
interface ChannelStatItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
}

function ChannelStatItem({ value, label, icon }: ChannelStatItemProps) {
  return (
    <div className="flex flex-col items-center bg-almost-black rounded-xs p-xs border-4 border-dark-gray">
      <div className="flex items-center gap-2">
        <span className="text-dark-gray font-bold">{icon}</span>
        <p className="text-md font-bold">{value.toLocaleString()}</p>
      </div>
      <p className="text-sm font-bold text-dark-gray">{label}</p>
    </div>
  );
} 

export default ChannelStatItem;
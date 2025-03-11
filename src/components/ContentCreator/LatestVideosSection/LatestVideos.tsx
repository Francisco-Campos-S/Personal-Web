import VideoCardItem from "./VideoCardItem";

function LatestVideosSection() {
  return (
    <div className="w-full">
      <h3 className="text-off-white text-lg font-bold">Latest videos</h3>
      <div className="grid grid-cols-3 gap-x-lg">
        {[1, 2, 3].map((_, index) => (
          <VideoCardItem key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestVideosSection;
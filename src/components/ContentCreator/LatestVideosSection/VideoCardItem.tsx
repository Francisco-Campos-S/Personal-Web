import Image from "next/image";

function VideoCardItem() {
  return (
    <div className="flex flex-col gap-y-xxs items-center">
      <div className="bg-gray-800 border-4 border-dark-gray rounded-xs overflow-hidden">
        <Image
          src="/mini.jpg"
          alt="GitHub"
          width={300}
          height={300}
      />
    </div>
    <p className="text-off-white text-xs font-bold">Video Title</p>
    </div>
  );
} 

export default VideoCardItem;
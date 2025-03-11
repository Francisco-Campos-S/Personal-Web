import Image from "next/image";

function CollaborationsSection() {
  return (
    <div className="flex flex-col gap-y-xs">
      <h3 className="text-off-white text-lg font-bold">Collaborated with</h3>
      <div className="flex w-full justify-between">
        {[1, 2, 3].map((_, index) => (
          <CollaboratorLogo key={index} />
        ))}
      </div>
    </div>
  );
}

function CollaboratorLogo() {
  return (
      <Image
        src="/icons/node.svg"
        alt="Node.js"
        width={150}
        height={150}
      />
  );
} 

export default CollaborationsSection;
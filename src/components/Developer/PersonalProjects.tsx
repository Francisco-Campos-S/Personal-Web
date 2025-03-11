import Image from 'next/image';

export function PersonalProjects() {
    const projects = [
      { id: 1, date: 'Noviembre 2023', image: '/project.png' },
      { id: 2, date: 'Noviembre 2023', image: '/project.png' },
      { id: 3, date: 'Noviembre 2023', image: '/project.png' },
    ];
  
    return (
      <div className="flex gap-x-xxl mx-xl">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-center relative pb-8 w-full">
              <Image 
                src={project.image} 
                alt={`Proyecto ${project.id}`}
                width={300}
                height={300}
                className="rounded-xs border-dark-gray border-4 object-cover"
              />
            <div className="text-off-white font-bold text-xs bg-almost-black rounded-xs p-xxs absolute bottom-4 left-1/2 transform -translate-x-1/2 border-4 border-dark-gray whitespace-nowrap">
              {project.date}
            </div>
          </div>
        ))}
      </div>
    );
  }
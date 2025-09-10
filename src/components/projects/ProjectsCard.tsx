import React from "react";

interface ProjectsCardProps {
  title: string;
  shortDes: string;
  image: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ title, shortDes, image }) => {
  return (
    <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer group">
      {/* تصویر */}
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
        <p className="text-sm md:text-base text-gray-300 mt-2">{shortDes}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;

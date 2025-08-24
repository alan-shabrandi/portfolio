import React from "react";

interface ProjectsCardProps {
  title: string;
  shortDes: string;
  image: string;
  onClick?: () => void;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ title, shortDes, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-full p-4 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-300"
    >
      <img src={image} alt={title} className="w-full h-60 object-cover rounded mb-4" />
      <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
      <p className="text-sm text-gray-300">{shortDes}</p>
    </div>
  );
};

export default ProjectsCard;

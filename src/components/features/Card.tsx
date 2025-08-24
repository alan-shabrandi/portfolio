import { HiArrowRight } from "react-icons/hi";
import type { Feature } from "../../utils/types";

interface CardProps {
  item: Feature;
}

const Card: React.FC<CardProps> = ({ item: { title, des, Icon } }) => {
  return (
    <div
      className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center 
                    bg-gradient-to-r from-bodyColor to-[#202327] 
                    group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] 
                    transition-colors duration-100"
    >
      <div className="h-72 overflow-y-hidden">
        <div
          className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 
                        transition-transform duration-500"
        >
          {/* Icon or placeholder bars */}
          <div className="w-10 h-8 flex flex-col justify-between">
            {Icon ? (
              <span className="text-5xl text-designColor">
                <Icon />
              </span>
            ) : (
              Array.from({ length: 4 }).map((_, i) => <span key={i} className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>)
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">{title}</h2>
            <p className="text-base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

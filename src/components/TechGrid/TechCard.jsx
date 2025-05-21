import React  from "react"
const TechCard = ({ imageUrl, name }) => {
          return (
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 group h-40">
              <div className="relative h-full w-full flex items-center justify-center">
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="max-h-16 max-w-full object-contain absolute transition-opacity duration-300 group-hover:opacity-0" 
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-full w-full">
                  <p className="text-xl font-bold text-gray-800 text-center">
                    {name}
                  </p>
                </div>
              </div>
            </div>
          );
        };
export default TechCard;
import React from "react";
import { projects } from "@/data/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20 mt-30 items-center"  id="projects">
      <h1 className="text-center text-4xl">
        A small selection of
        <span className="text-purple-400"> recent project</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4  gap-46 mt-5">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex item-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative  flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 ">
              
                <img src={img} alt={title} className="" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-l mt-2 lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-center  mt-7 mb-3">
                      <div className="flex items-center ">
                        {iconLists.map((icon,index)=>(
                          <div key={icon} className="border  border-white/20 rounded-l bg-black lg:w-10 lg:h-10  flex justify-center items-center ">
                            <img src={icon} alt={icon} className="p-2 w-10 h-10 " />
                          </div>
                        ))}

                      </div>
                     
              </div>

               <div className="flex justify-center items-center mt-4">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple-200">Check Live Site</p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

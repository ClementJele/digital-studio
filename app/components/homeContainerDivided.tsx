import React from "react";

const HomeContainerDivided = () => {
  return (
    //i will make this a component which takes a title and subtitle as optional with stling
    <div className="w-full ">
      <div className="rounded-md bg-white">
        <div className="flex py-6 px-24">
          <div className="flex flex-col flex-1 gap-8">
            <h1 className="text-5xl tracking-[11px]  text-gray-800 font-thin">
              LIGHTING INSTRUMENTS FOR ARCHITECTURE
            </h1>

            <p className="max-w-[22rem] ">
              Creating the perfect light experience in architectural
              environments
            </p>
          </div>
          <div className="flex flex-1 text-7xl font-bold">right-hand side</div>
        </div>
        <div className="bg-gradient-to-t from-gray-600 to-gray-200 p-7 text-2xl w-full  bottom-0 rounded-b-md text-white/80">
          LANDLITE
        </div>
      </div>
    </div>
  );
};

export default HomeContainerDivided;

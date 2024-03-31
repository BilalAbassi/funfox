import React from "react";

const MainPageDesign = ({ children }) => {
  return (
    <div className=" xl:w-[97%] mx-auto  w-[80%] 2xl:w-[95%] lg:w-[85%] lg:h-[70%] md:w-[85%] z-20   mt-20  bg-white rounded-2xl md:p-6 p-2 ">
      {children}
    </div>
  );
};

export default MainPageDesign;

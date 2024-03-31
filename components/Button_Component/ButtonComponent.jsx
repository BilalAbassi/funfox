import Image from "next/image";
import Pagination from "./Pagination";
import React from "react";

const ButtonComponent = ({ Value }) => {
  const totalPages = 2;
  return (
    <div
      className=" xl:w-[97%] mx-auto xl:h-[60%] w-[80%] 2xl:w-[95%] lg:w-[85%] lg:h-[70%] md:w-[85%] 
    mt-4  rounded-2xl md:p-6 p-2 flex mb-10 md:mb-0
  "
    >
      <div>
        <Image
          width={1000}
          height={1000}
          src="/markicon1.png"
          className="md:w-[41px] md:h-[45px] w-[25px] h-[25px]  2xl:w-[60px]  cursor-pointer 2xl:h-[60px]"
        />
      </div>
      <div className="w-[80%] mx-auto flex justify-center">
        <Pagination totalPages={totalPages} Value={Value} />
      </div>
      <div>
        <Image
          width={1000}
          height={1000}
          src="/markIcon.png"
          className="md:w-[41px] md:h-[45px] w-[25px] h-[25px]  2xl:w-[60px] 2xl:h-[60px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ButtonComponent;

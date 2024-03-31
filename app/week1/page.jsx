import React from "react";
import MainPageDesign from "@/components/MainPageDesign/MainPageDesign";
import Image from "next/image";
import ButtonComponent from "@/components/Button_Component/ButtonComponent";
const page = () => {
  return (
    <main className=" bg-[#FFAEBE] pb-10">
      <div
        className="  relative flex justify-center xl:max-w-screen-xl 2xl:max-w-[4000px] 
    mx-auto"
      >
        <Image
          width={1000}
          height={1000}
          src="/funlogo.png"
          className="w-[160px] h-[91.02px] absolute md::top-[10px] md:left-[-4px]
        
        xl:left-[-50px]  xl:top-[5px] rotate-[-17deg] 2xl:left-[-20px] left-[-35px] top-[12px] "
        />
        <Image
          width={1000}
          height={1000}
          src="/Vector2.svg"
          className="w-[200.27px] h-[250.46px] top-[30px] absolute md::top-[10px] 
        
        xl:left-[80%]  xl:top-[33.29px]  2xl:h-[600px] lg:left-[70%]
        
        md:top-[33px]
        2xl:left-[85%] left-[60%]  rotate-[180deg] md:w-[300px] md:h-[400px]  md:left-[70%]  "
        />
        <Image
          width={1000}
          height={1000}
          src="/Vector3.svg"
          className="lg:w-[481.27px]
          
          w-[200.27px] h-[250.46px]
          lg:h-[626.46px]  md:w-[300px] top-[30px]  md:h-[400px] absolute md::top-[10px] md:left-[-25%] 
        
        xl:left-[-20%]  xl:top-[120px]  2xl:left-[-200px]  left-[-100px] rotate-[180deg] lg:left-[-25%]  "
        />
        <MainPageDesign>
          <div className="px-4 mt-4   xl:px-8 space-y-2 ">
            <h3 className=" xl:text-[32px] p-3 md:leading-[39px]  2xl:leading-[45px] lg:text-[30px] 2xl:text-[40px] md:text-[20px] text-[10px] ">
              Can you figure out the definition of setting from the following
              examples?
            </h3>

            <p className=" xl:text-[24px] p-3 md:leading-[29px]  lg:text-[20px] 2xl:text-[35px] md:text-[18px] text-[10px] ">
              (take a minute to think about this)
            </p>

            {/* Images select  Div  */}
            <div className="md:flex justify-around pt-4 xl:px-20  2xl:px-28 ">
              <div className="group">
                <div className="border-[3px] rounded-[10px] border-dashed p-2 justify-center  flex">
                  <Image
                    src="/Group.png"
                    height={1000}
                    width={1000}
                    className="w-[163px] h-[133px] border-[1px] 2xl:w-[250px] cursor-pointer 2xl:h-[220px] group-hover:w-full duration-300"
                  />
                </div>
                <p className="xl:text-[20px] md:leading-[29px] 2xl:text-[30px] ">
                  Sunny day at a beach
                </p>
              </div>
              {/* 2  */}
              <div className="group">
                <div className="border-[3px] rounded-[10px] border-dashed p-2 justify-center  flex">
                  <Image
                    src="/Maskgroup.png"
                    height={1000}
                    width={1000}
                    className="w-[163px] h-[133px] border-[1px] 2xl:w-[250px]  cursor-pointer 2xl:h-[220px] group-hover:w-full duration-300"
                  />
                </div>
                <p className="xl:text-[20px] md:leading-[29px] 2xl:text-[30px] ">
                  Sunny day at a beach
                </p>
              </div>
            </div>
            <p className=" xl:text-[24px] p-3 md:leading-[29px]  lg:text-[20px] 2xl:text-[35px] md:text-[18px] text-[10px] pt-8">
              So, what do you think the definition of setting is?
              <span className="lg:hidden">Any guesses?</span>
            </p>

            {/* Imput Div */}
            <div className="flex w-full items-center">
              <p className=" xl:text-[24px] p-3 md:leading-[29px] hidden lg:block mb-1 w-[20%] lg:text-[20px] 2xl:text-[35px] md:text-[18px] text-[10px] pt-8">
                Any guesses?
              </p>
              <div className="border-[3px] border-dashed rounded-[10px] py-2 w-[60%] px-2">
                <input
                  type="text"
                  className="outline-none border-b-[1.4px] border-[#B6B6B6] w-full"
                />
              </div>
              <div className="w-[20%] flex md:items-center">
                <span className=" xl:text-[24px] p-3 md:leading-[29px]  lg:text-[16px] 2xl:text-[20px] md:text-[14px] text-[10px] pt-8">
                  Hint:
                </span>
                <div className="flex items-center lg:gap-4 md:gap-2 gap-1 mt-[16px] md:mt-0">
                  <button className="bg-[#EF4361] rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px]  ">
                    <Image
                      src="/clock_1.png"
                      width={1000}
                      height={1000}
                      className="md:w-[25px] md:h-[25px]  w-[13px] h-[13px] md:ml-2 ml-[3px]"
                    />
                  </button>

                  <button className="bg-purple-600 rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px]">
                    <Image
                      src="/home.png"
                      width={1000}
                      height={1000}
                      className="md:w-[25px] md:h-[25px] w-[12px] h-[12px] md:ml-2 ml-[3px]"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#25A3A1] text-white border-dashed border-[#A4FDFB] border-[3px]  flex md:py-2 p-[1px]">
              <div
                className=" lg:p-2 p-1 xl:text-[24px]  md:leading-[29px]  2xl:text-[35px] 
     text-[10px] lg:text-[20px] md:text-[18px] tracking-wider	"
              >
                <span> Setting is the </span>
                <button className="bg-[#EF4361] rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px] ">
                  <Image
                    src="/clock_1.png"
                    width={1000}
                    height={1000}
                    className="md:w-[25px] md:h-[25px] w-[13px] h-[13px] md:ml-2 ml-[3px]"
                  />
                </button>
                <span> time and place </span>
                <button className="bg-purple-600 rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px]">
                  <Image
                    src="/home.png"
                    width={1000}
                    height={1000}
                    className="md:w-[25px] md:h-[25px] w-[12px] h-[12px] md:ml-2 ml-[3px]"
                  />
                </button>
                <span>
                  {" "}
                  of a story. It often answers the questions: when? and where?{" "}
                </span>
              </div>
            </div>
            <p className=" xl:text-[22px] p-3 md:leading-[29px]  lg:text-[20px] 2xl:text-[35px] md:text-[18px] text-[10px] 2xl:pt-8 ">
              The time of the story could be in the past, future, day, night,
              summer or winter. A story may take place in a school, a mall, a
              desert, an airplane or in a variety of other places.
            </p>
          </div>
        </MainPageDesign>

        <Image
          width={1000}
          height={1000}
          src="/funlogo.png"
          className="w-[160px] h-[91.02px] absolute md::top-[10px] md:left-[-4px]
        
        xl:left-[-50px]  xl:top-[5px] rotate-[-17deg] 2xl:left-[-20px] left-[-35px] top-[12px] "
        />
        <Image
          width={1000}
          height={1000}
          src="/rular.png"
          className="md:w-[92.1px] md:h-[120px] w-[50px] h-[80px] absolute  md:left-[90%] md:top-[120px] left-[85%] top-[100px]  xl:left-[1230px] xl:top-[120.96px] 
        
        
        rotate-[-10deg] 2xl:left-[96%] "
        />
        <Image
          width={1000}
          height={1000}
          src="/pencile.png"
          className="md:w-[61.41px] md:h-[37.33px] w-[40px] h-[20px]  absolute   xl:top-[130px] top-[140px] xl:left-[-40px] 2xl:left-[0] 
        
left-0

        rotate-[-10deg] "
        />
        <Image
          width={1000}
          height={1000}
          src="/bag.png"
          className="md:w-[61.41px] md:h-[54.33px] w-[40px] h-[35px] absolute  xl:left-[-40px] left-0    top-[510px] xl:top-[490px] 2xl:left-[0]  "
        />
        <Image
          width={1000}
          height={1000}
          src="/Group53.png"
          className="md:w-[50px] md:h-[60px] w-[40px] h-[40px] absolute top-[50%] md:left-[93%] left-[89%]  xl:left-[1260px] xl:top-[490px] 2xl:left-[97.5%]  "
        />
        <Image
          width={1000}
          height={1000}
          src="/hat.png"
          className="md:w-[82px] md:h-[77px] w-[30px] h-[50px]  absolute xl:left-[1250px] md:top-[750px]
        
        left-[89%] top-[900px]
        md:left-[92%] xl:top-[750px] 2xl:left-[96.5%]  "
        />
        <Image
          width={1000}
          height={1000}
          src="/openBook.png"
          className="md:w-[60px] md:h-[66px] w-[40px] h-[46px]  absolute  md:top-[750px] top-[900px] left-0 xl:top-[750px]  xl:left-[-40px]  2xl:left-[0]  "
        />
      </div>
      <ButtonComponent Value={2} />
    </main>
  );
};

export default page;

import ButtonComponent from "@/components/Button_Component/ButtonComponent";
import MainPageDesign from "@/components/MainPageDesign/MainPageDesign";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#FFAEBE] pb-10">
      <div className="   relative flex justify-center xl:max-w-screen-xl 2xl:max-w-[4000px]  mx-auto">
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
          src="/week1.png"
          className="w-[153px] h-[41px] absolute  md:top-[25px] md:left-[150px]   xl:top-[20px] top-[25px] left-[110px] "
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
          <header className="flex justify-center">
            <h3
              className="  bg-[#FE6784] md:leading-[35px] md:px-10 px-4 border-dotted border-2 2xl:text-[45px] 2xl:py-6 2xl:px-6
             border-white py-2 text-white rounded-full md:text-[32px] text-[14px] mt-[5px] shadow  font-[400]"
            >
              Elements of Story Writing
            </h3>
          </header>
          <div className="px-4 mt-4   xl:px-8 space-y-2 pb-20 ">
            <p className=" xl:text-[24px] p-3 md:leading-[29px] tracking-[-6%] lg:text-[20px] 2xl:text-[35px] md:text-[18px] text-[10px] ">
              Welcome to term 2 of Writers Club. Are you excited for this
              amazing journey? Over the next week, we will be practicing the
              different elements of story writing. Our aim is to make stories
              more interesting and exciting.
            </p>
            <div className="reletive ">
              <div className="bg-[#25A3A1] text-white border-dotted border-[#A4FDFB] border-[3px]  flex py-2">
                <p className=" lg:p-2 p-1 xl:text-[24px]  xl:pr-20 md:leading-[29px] h-[114px] 2xl:text-[35px]  text-[10px] lg:text-[20px] md:text-[18px]  ">
                  There are <span className="font-[800] mx-1">five</span>
                  elements which make the foundation for story writing. An
                  element is an essential part of something and every fiction
                  story has the same key elements:
                </p>
                <div className="w-[110px]">
                  <Image
                    width={1000}
                    height={1000}
                    src="/Group925.png"
                    className="lg:w-[120px] w-[50px] h-[90px] lg:h-[150px] md:w-[100px] md:h-[140px]  absolute md:right-24 right-[16%]"
                  />
                </div>
              </div>
            </div>
            {/* Clouds */}
            <div className="grid md:grid-cols-5 grid-cols-3 gap-4   pt-4">
              <Image
                width={1000}
                height={1000}
                className="w-[185px] h-[101px]  cursor-pointer  hover:scale-105 duration-150 "
                src="/Frame.png"
              />
              <Image
                width={1000}
                height={1000}
                className="w-[185px] h-[101px]  cursor-pointer  hover:scale-105 duration-150"
                src="/Frame1.png"
              />
              <Image
                width={1000}
                height={1000}
                className="w-[185px] h-[101px] cursor-pointer  hover:scale-105 duration-150 "
                src="/Frame2.png"
              />
              <Image
                width={1000}
                height={1000}
                className="w-[176px] h-[105px]  cursor-pointer  hover:scale-105 duration-150 "
                src="/Frame3.png"
              />
              <Image
                width={1000}
                height={1000}
                className="w-[218px] h-[124px]  cursor-pointer hover:scale-105 duration-150 "
                src="/Framer4.png"
              />
            </div>
            <div>
              <p className="xl:text-[24px] md:leading-[29px] xl:tracking-wider md:text-[18px] text-[10px] 2xl:text-[35px] ">
                You must be familiar with some of these. If not, do not worry!
                we will cover all these elements as we go along.
              </p>
            </div>
            {/* For Today paragraph */}
            <div className="relative pt-8 pb-20 ">
              <img
                src="./g1.png"
                className="h-[134px] w-[100%]  absolute 2xl:w-[100%]  "
              />
              <p
                className="z-10 absolute xl:text-[24px] lg:text-[20px]  
              md:leading-[29px] md:left-[47px] lg:top-[38px] md:top-[35px] top-[45px] left-7 
               md:text-[14px] text-[10px] md:mr-14 2xl:left-[100px] 2xl:top-[50px] 2xl:text-[35px]"
              >
                For today’s lesson, we will try to understand and practice
                writing the setting for our stories.
                <br className="hidden md:block" /> The setting is an important
                element of every fiction story.
              </p>
            </div>
          </div>
        </MainPageDesign>
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
          src="/book.png"
          className="md:w-[74px] md:h-[73px] w-[40px] h-[40px] absolute top-[50%] md:left-[93%] left-[89%]  xl:left-[1250px] xl:top-[490px] 2xl:left-[97%]  "
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
      <div>
        <ButtonComponent Value={1} />
      </div>
    </main>
  );
}

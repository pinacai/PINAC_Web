import Image from "next/image";

// image
import headerImg from "@/public/assets/img/Pinac Workspace Header Image.svg";
import planet from "@/public/assets/img/red-green planet.svg";

const HeroSection = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center fixed overflow-hidden">
      <div
        className="3xl:mt-[128px] flex flex-col justify-center relative z-50
                  2xl:mt-[118px] xl:mt-[95px] lg:mt-[90px] md:mt-[80px]"
      >
        <span
          className="font-bold 3xl:text-[122px] 3xl:leading-[127px] text-light font-nasa 
                    2xl:text-[112px] 2xl:leading-[120px] xl:text-[92px] xl:leading-[102px]
                    lg:text-[80px] lg:leading-[90px] md:text-[60px] md:leading-[70px]"
        >
          PINAC
        </span>
        <span
          className="font-bold 3xl:text-[150px] 3xl:leading-[127px] text-light font-nasa 
                    2xl:text-[140px] 2xl:leading-[120px] xl:text-[120px] xl:leading-[102px]
                    lg:text-[108px] lg:leading-[90px] md:text-[80px] md:leading-[70px]"
        >
          Workspace
        </span>
        <Image
          alt="header design"
          src={headerImg}
          className="w-1/2 object-cover absolute bottom-4 right-0"
        />
      </div>
      <Image
        alt="planet image"
        src={planet}
        className="w-full object-cover absolute top-[150px]"
      />
    </section>
  );
};

export default HeroSection;

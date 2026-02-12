import Button from "../components/Button";
const Hero = () => {
  return (
    <header className="container mx-auto py-17 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-2 px-4 md:px-10">
      <div className="space-y-7.5 mt-10">
        <h1 className="text-[60px] md:text-[80px] font-extrabold text-black dark:text-foreground">
          It's good <br />
          tea time at The <br /> Tea House
        </h1>
        <p className="text-[18px] font-medium text-gray-400">
          Tea and Botanical Solutions Supplier Give Optimum <br /> Satisfaction
          To Your Taste Buds.
        </p>
        <Button content={"Explore More"} hasArrow />
      </div>

      <div className="flex item-end justify-end relative">
        
          <img src="/images/banner.png"  alt="banner"  />
        

        <div className="absolute bg-white rounded-md   px-6.5 py-4.5 -bottom-15 md:bottom-0 left-0 md:left-20 flex items-center gap-3.25 shadow-lg animate-upDown ">
          <img src="/images/star-banner.png" alt="star" />
          <div>
            <h3 className="text-[30px] font-extrabold text-black">5.0</h3>
            <p className="text-gray-500 font-semibold ">Trust Pilot Ratings</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

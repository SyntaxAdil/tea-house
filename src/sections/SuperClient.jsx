import Button from "./../components/Button";
const SuperClient = () => {
  return (
    <section className="bg-linear-to-r to-[#FF0000] from-[#FF8938] py-21.25 px-4 md:px-17.5 rounded-[10px] grid grid-cols-1 md:grid-cols-2 items-center gap-20"> 
      <div className="space-y-7.5">
        <h2 className="text-[38px] max-w-95 md:text-[45px] font-extrabold text-white">
          Meet Our Super  Clients
        </h2>
        <p className="text-[#F4F4F4] max-w-110">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.{" "}
        </p>
        <Button invert content={"Show All"} />
      </div>

      <div className="relative flex  flex-col gap-15 items-end max-w-131 mx-2  ">
        <div className="bg-white max-w-110 rounded-[10px] relative py-10.25 px-12.5 opacity-20 ">
          <span className="absolute -top-4.25 -left-4.25 w-17 h-17 rounded-full border-3 border-white ">
            <img src="/images/client.png" alt="" />
          </span>
          <h4 className="text-gray-500 mb-8">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </h4>

          <div>
            <h6 className="font-extrabold">Ilham Yuda</h6>
            <p className="text-gray-600">Businessman</p>
          </div>
        </div>
        <div className="bg-white max-w-110 rounded-[10px]  py-10.25 px-12.5 absolute top-1/2 left-0 -translate-y-1/2  z-10">
          <span className="absolute -top-4.25 -left-4.25 w-17 h-17 rounded-full border-3 border-white ">
            <img src="/images/client.png" alt="" />
          </span>
          <h4 className="text-gray-500 mb-8">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </h4>

          <div>
            <h6 className="font-extrabold">Ilham Yuda</h6>
            <p className="text-gray-600">Businessman</p>
          </div>
          <span className="absolute right-5"><img src="/images/circles.png" /></span>
        </div>
        <div className="bg-white max-w-110 rounded-[10px] relative py-10.25 px-12.5 opacity-20">
          <span className="absolute -top-4.25 -left-4.25 w-17 h-17 rounded-full border-3 border-white ">
            <img src="/images/client.png" alt="" />
          </span>
          <h4 className="text-gray-500 mb-8">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </h4>

          <div>
            <h6 className="font-extrabold">Ilham Yuda</h6>
            <p className="text-gray-600">Businessman</p>
          </div>
        </div>

        
       
      </div>
    </section>
  );
};

export default SuperClient;

import FeaturedCard from "../components/FeaturedCard";
import Heading from "../components/Heading";

const Feautured = () => {
  const featuredInfo = [
    {
      src: "/public/images/tea-1.png",
      title: "Milk Tea",
      subTitle: "Creamer could be replaced by fresh milk",
    },
    {
      src: "/public/images/tea-2.png",
      title: "Black Tea",
      subTitle: "Creamer could be replaced by fresh milk",
    },
    {
      src: "/public/images/tea-3.png",
      title: "Lemon Tea",
      subTitle: "Creamer could be replaced by fresh milk",
    },
    {
      src: "/public/images/tea-4.png",
      title: "Green Tea",
      subTitle: "Creamer could be replaced by fresh milk",
    },
  ];

  return (
    <section className="space-y-12.5">
      <Heading
        title={"Our Featured Products"}
        subTitle={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
      <div className="grid justify-center  grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-10 ">
        {
            featuredInfo.map((item,index)=>{
                return(
                    <FeaturedCard key={index} imageSrc={item.src} title={item.title} subTitle={item.subTitle} alt={item.title}  />
                )
            })
        }
      </div>
    </section>
  );
};

export default Feautured;

import NewsEventCart from "../components/NewsEventCart";
import Heading from "./../components/Heading";


const NewsEvent = () => {
  const newsEventCarts = [
    {
      image: "/public/images/news-1.png",
      date: "Feb 05, 2027",
      title: "Collecting 8 points for discount",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available.",
      href: "#",
    },
    {
      image: "/public/images/news-2.png",
      date: "Feb 05, 2027",
      title: "Collecting 8 points for discount",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available.",
      href: "#",
    },
    {
      image: "/public/images/news-3.png",
      date: "Feb 05, 2027",
      title: "Collecting 8 points for discount",
      subTitle:
        "There are many variations of passages of Lorem Ipsum available.",
      href: "#",
    },
  ];
  return (
    <div>
      <Heading
        subTitle={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
        title={"News & Events"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {newsEventCarts.map((carts, index) => {
          return (
            <NewsEventCart
              date={carts.date}
              title={carts.title}
              subtile={carts.subTitle}
              href={carts.href}
              key={index}
              image={carts.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsEvent;

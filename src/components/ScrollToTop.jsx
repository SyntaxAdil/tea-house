import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  

  const backToTop = () => {
      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isShow && (
        <button
          className="fixed bottom-10 right-5 h-12 w-12 rounded-full  bg-linear-to-r from-[#FF0000] to-[#FF8938] cursor-pointer transition-all duration-200 hover:-translate-y-2  hover:shadow shadow-orange-200"
          onClick={backToTop}
        >
          <ArrowUp color="white" className="mx-auto" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

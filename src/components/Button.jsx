import { ArrowUpRight } from "lucide-react";
const Button = ({href, content, hasArrow = false, invert = false }) => {
  return (
    <a href={href? href : "#"}
      className={`flex items-center w-fit  ${!invert ? "bg-linear-to-r from-[#FF0000] to-[#FF8938] text-white" : "bg-white"} py-4.5 px-5 rounded-[10px] cursor-pointer hover:-translate-y-3 transition-all duration-200 hover:shadow shadow-orange-300  font-bold te text-[20px] gap-3.75`}
    >
      {invert ? (
        <span className="bg-linear-to-r from-[#FF0000] to-[#FF8938] text-transparent  bg-clip-text">
          {" "}
          {content}{" "}
        </span>
      ) : (
         content 
      )}
      {hasArrow && <ArrowUpRight />}
    </a>
  );
};

export default Button;

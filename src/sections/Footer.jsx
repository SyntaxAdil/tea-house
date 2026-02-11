import Button from "./../components/Button";
import { ArrowRight} from "lucide-react";
const Footer = () => {
  const quickLink = ["Home", "About Us", "Insurance", "Privacy Policy"];
  const ourServices = [
    "Life Insurance",
    "Car Insurance",
    "Health Insurance",
    "House Insurance",
  ];
  const helpLink = ["FAQs", "Contact Us"];
const socialMedia=[
  {img: "/images/facebook.png",href:"https://facebook.com"},
  {img: "/images/twitter.png",href:"https://twitter.com"},
  {img: "/images/intsa.png",href:"https://instagram.com"},
 ]
  

  return (
    <footer className="py-20 md:py-32.5 bg-linear-to-r from-[rgb(255,0,0,0.1)] to-[rgb(255,137,56,0.1)]">
      <div className="container mx-auto md:px-10  px-4 ">
        <div className="flex justify-between items-center mb-25 flex-col md:flex-row gap-5">
          <img src="/images/cup.png" alt="cup" />
          <div className="flex md:gap-10 items-center flex-col md:flex-row gap-5">
            <h3 className="text-[20px] font-medium text-[#494949]">
              Ready to get strated?
            </h3>
            <Button content={"Get Started"} />
          </div>
        </div>

        <div className="grid grid-col-2 md:grid-cols-4 gap-5 ">
          <div>
            <h3 className="text-[20px] font-semibold mb-5.5">Quick Links</h3>
            <ul className="space-y-4.5 text-[#494949] ">
              {quickLink.map((i) => {
                return (
                  <li className="cursor-pointer hover:text-blue-950 hover:underline" key={i}>
                    <a href={`#${i}`}>{i}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-5.5">Our Service</h3>
            <ul className="space-y-4.5 text-[#494949] ">
              {ourServices.map((i) => {
                return (
                  <li className="cursor-pointer hover:text-blue-950 hover:underline" key={i}>
                    <a href={`#${i}`}>{i}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-5.5">Help</h3>
            <ul className="space-y-4.5 text-[#494949] ">
              {helpLink.map((i) => {
                return (
                  <li className="cursor-pointer hover:text-blue-950 hover:underline" key={i}>
                    <a href={`#${i}`}>{i}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold mb-5.5">
              Subscribe to our newsletter
            </h3>

            <div className="flex  items-center justify-between">
              <input
                type="email"
                placeholder="Email address"
                className="border-b border-b-[#494949] py-4 outline-0 text-[14px] w-full "
              />
              <button className="h-8 w-8 rounded-full  bg-linear-to-r from-[#FF0000] to-[#FF8938] cursor-pointer ">
                <ArrowRight size={20} color="white" className="mx-auto" />
              </button>
            </div>

            <div className="flex  items-center gap-6 mt-10">
             {socialMedia.map((item,index)=>{
              return(
                <a href={item.href} key={index} >
                  <img className="transition-all duration-150 hover:-translate-y-2 py-2 " src={item.img} alt={item.href} />
                </a>
              )
             })}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-15 text-[#494949] font-medium">
        <p>© 2027 Abdur Rahman Adil - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

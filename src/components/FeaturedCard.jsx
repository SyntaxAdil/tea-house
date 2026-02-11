
const FeaturedCard = ({imageSrc,alt,title,subTitle}) => {
  return (
    <div className="bg-linear-to-b from-[#F4F4F4] to-[rgba(244,244,244,0.1)] p-7.5 rounded-2xl max-w-66.75 text-center mx-auto  ">
        <img src={imageSrc} alt={alt} className="mb-8 mx-auto" />
        <h4 className="mb-2 text-[25px] font-extrabold">{title}</h4>
        <p className="font-semibold text-gray-400">{subTitle}</p>
    </div>
  )
}

export default FeaturedCard

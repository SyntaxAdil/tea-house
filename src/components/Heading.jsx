const Heading = ({title,subTitle}) => {
  return (
    <div className="max-[90%] md:max-w-[80%] mx-auto text-center" >

        <h1 className="font-extrabold text-[45px] text-black mb-2">{title}</h1>
        <p className="font-medium text-gray-400">{subTitle}</p>
      
    </div>
  )
}

export default Heading

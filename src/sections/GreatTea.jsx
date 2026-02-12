

const GreatTea = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-13">
        <div className="grid grid-cols-2 grid-rows-3 gap-7.5">
            <div className="bg-linear-to-r from-[rgb(255,0,0)] to-[#FF8938] dark:opacity-50 opacity-10  rounded-[10px]"></div>
            <div className="bg-[rgba(230,166,35,0.1)] dark:bg-[rgba(230,166,35,0.5)] py-13.75 px-7.5 row-span-2  rounded-[10px]">
                <img src="/images/fresh-1.png" alt="fresh-1" className="mx-auto" />
            </div>
            <div className="bg-[rgba(87,118,57,0.1)] dark:bg-[rgba(87,118,57,1)] py-13.75 px-7.5 row-span-2 rounded-[10px]">
                <img src="/images/fresh-2.png" alt="fresh-2" className="mx-auto" />

            </div>
            <div className="bg-linear-to-r from-[#D9D9D9] to-[rgba(255,255,255,0)] dark:opacity-50 rounded-[10px]"></div>
        </div>

        <div className="space-y-7.5">
            <h1 className="text-[45px] font-extrabold text-black dark:text-foreground">Great Tea, Freshly <br /> Presented</h1>
            <p  className="font-medium text-gray-400 leading-relaxed mb-10">The meaning of gong cha is chanese is to provide the best tea to emperor from all possessions . It represents the highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by its custoers  because of good words of mouth and unique customized service orginated from Taiwan.</p>

            <h4 className="font-extrabold mb-4 text-black dark:text-foreground">Unique Taste</h4>
            <p className="font-medium text-gray-400 leading-relaxed">A Unique and different style from other teapots gives a <br /> luxurious and minimalist impression</p>
            <h4 className="font-extrabold  mb-4 text-black dark:text-foreground">Premium Quality</h4>
            <p className="font-medium text-gray-400 leading-relaxed">Premium Quality that makes tea more <br /> elegant and more durable when you use it.</p>
        </div>
      
    </section>
  )
}

export default GreatTea

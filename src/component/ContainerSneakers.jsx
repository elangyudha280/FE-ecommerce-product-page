




const ContainerSneakers =()=>{
    return (
        <section className="container-sneakers border-2 w-full h-full flex-1 grid place-items-center mx-auto px-3">
            <div className="sneakers-content grid grid-cols-[auto_1fr] grid-rows-[460px]  w-full xl:w-[1000px] ">
                <div className="container-img-sneakers w-[380px] h-full  flex flex-col md:gap-1">
                    <div className="img-thumb relative w-full relative flex-1  overflow-hidden rounded-2xl">
                        <img src="./images/image-product-1.jpg" alt="" className="img-content-thumb object-cover object-top w-full h-full absolute select-none" />
                    </div>
                    <div className="item-tumb w-full pt-2 px-2  flex items-center justify-between">
                            <div className="thumb-item group w-[70px]  rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-1.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none" />
                            </div>
                            <div className="thumb-item  group w-[70px] rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-2.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none" />
                            </div>
                            <div className="thumb-item group w-[70px] rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-3.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none" />
                            </div>
                            <div className="thumb-item group w-[70px] rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-4.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none" />
                            </div>
                               
                    </div>
                </div>
                <div className="container-description-sneaker w-full h-full border-2 border-red-600">

                </div>
            </div>
        </section>
    )
}

export default ContainerSneakers;
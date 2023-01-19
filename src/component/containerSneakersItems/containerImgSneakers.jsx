



const ContainerImgSneakers = ()=>{
    return (
        <div className="container-img-sneakers w-full h-[350px] flex flex-col xs:w-[440px]  xs:h-[400px]  xs:mx-auto xs:gap-1 lg:h-full">
                    <div className="img-thumb relative w-full  flex-1  overflow-hidden xs:rounded-2xl grid place-items-center">
                        <img src="./images/image-product-1.jpg" alt="" className="img-content-thumb  object-cover object-center  w-full h-full absolute select-none xs:object-top" />
                        <div className="icon-slide-img w-full   z-[4] px-3 justify-between flex xs:hidden">
                            <button className="icon-previous bg-ecommerce-light-grayish-blue w-[30px] h-[30px] grid place-items-center  rounded-full">
                            <img src="./images/icon-previous.svg" alt="" className="scale-75 mr-1" />
                            </button>
                            <button className="icon-next bg-ecommerce-light-grayish-blue w-[30px] h-[30px] grid place-items-center  rounded-full">
                            <img src="./images/icon-next.svg" alt="" className="scale-75 ml-1" />
                            </button>
                        </div>
                    </div>
                    <div className="item-tumb w-full pt-2 px-2 hidden   items-center justify-around xs:flex  ">
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
    )
}


export default ContainerImgSneakers;
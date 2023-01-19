import ContainerDescriptionSneakers from "./containerSneakersItems/containerDescriptionSneakers";
import ContainerImgSneakers from "./containerSneakersItems/containerImgSneakers";





const ContainerSneakers =()=>{
    return (
        <section className="container-sneakers  w-full mx-auto flex-1 grid lg:h-full   xs:place-items-center  xs:py-2 lg:px-3">
            <div className="sneakers-content w-full h-full grid grid-rows-[auto_1fr] place-items-center xs:grid-rows-[auto_auto] xs:h-auto xs:grid-cols-[1fr] lg:grid-cols-[auto_1fr]  lg:grid-rows-[460px] lg:w-[1000px] ">
               {/* component container img sneakers */}
               <ContainerImgSneakers/>
               {/* component container description sneakers */}
               <ContainerDescriptionSneakers/>
            </div>
        </section>
    )
}

export default ContainerSneakers;
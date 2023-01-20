import { useContext,useEffect } from "react";
import { contextSneakers } from "../../context/sneakersContext";


const ContainerDescriptionSneakers = ()=>{

    let {countSneakers,setCountSneakers} = useContext(contextSneakers);

    useEffect(()=>{
        if(countSneakers <= 0 ){
            setCountSneakers((value => value=0))
        }
    },[countSneakers])
 

    return (
        <div className="container-description-sneaker w-full h-full p-5 grid place-items-center  xs:py-7">
        <div className="max-w-md  mx-auto">
        <h2 className="title-company text-orange-400 font-[700] uppercase tracking-widest text-xs">Sneaker Company</h2>
            <h2 className="title-sneaker max-[390px]:text-3xl text-4xl xs:text-5xl mt-3 font-[700] capitalize text-ecommerce-very-dark-blue">fall limited edition sneakers</h2>
            <p className="description-sneakers mt-5 xs:mt-8 text-ecommerce-dark-grayish-blue font-[500]">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.
            </p>
            <div className="price-sneakers  flex  flex-row mt-5  xs:flex-col xs:items-left select-none">
                <div className="flex-1 flex items-center gap-2">
                    <span className="discount-price text-2xl font-[700]">$125.00</span> 
                    <span className="discount px-2 p-1 text-sm rounded-md bg-orange-100 text-ecommerce-orange font-bold">50%</span>
                </div>
                <p className="normal-price  text-sm text-ecommerce-grayish-blue p-0 m-0 line-through font-[500]">$250.00</p>
            </div>

            <div className="button-action-sneakers flex flex-col h-auto mt-5 xs:flex-row  xs:h-[50px] gap-3">
                <div className="count-sneakers w-full h-[40px] xs:h-auto xs:w-[175px] flex bg-ecommerce-light-grayish-blue rounded-md overflow-hidden">
                    <button className="min-sneaker px-3  grid place-items-center" onClick={()=>{setCountSneakers((count)=> count-=1)}}>
                        <img src="./images/icon-minus.svg" alt="" />
                    </button>
                    <span className="count-value flex-1 grid place-items-center">{countSneakers}</span>
                    <button className="plus-sneaker px-3  grid place-items-center" onClick={()=>{setCountSneakers((count)=> count+=1)}}>
                        <img src="./images/icon-plus.svg" alt="" />
                    </button>
                </div>
                <button className="add-to-cart  h-[40px] flex items-center justify-center bg-ecommerce-orange rounded-md gap-2 font-[700] text-white text-sm xs:flex-1 xs:h- shadow-[0_1em_1em_0_rgba(221,221,221,0.8)]">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg>
                    Add to cart
                </button>
            </div>
        </div>
        </div>
    )
}


export default ContainerDescriptionSneakers;

import { useState,useEffect,useContext } from "react";
import { contextSneakers } from "../../context/sneakersContext";

const ContainerImgSneakers = ()=>{

    let {countSliderImg,setCountSliderImg} = useContext(contextSneakers);



    // event next count slider img 
    const addCountSliderImg = ()=>{
        if(countSliderImg >= 4){
            setCountSliderImg(4)
            return
        }
        setCountSliderImg(countSliderImg+=1)
    }

    // event previous count slider img 
    const previousCountSliderImg = ()=>{
        if(countSliderImg <= 1){
            setCountSliderImg(1)
            return
        }
        setCountSliderImg(countSliderImg-=1)
    }


    // event thumb item
    const tumb_active = (e)=>{
        if(e.target.classList.contains('img-item-thumb')){
            let thumb_item = [...document.getElementsByClassName('thumb-item')]
            let imgThumbItem = [...document.getElementsByClassName('img-item-thumb')]
            thumb_item.forEach(el=>{
                if(el.classList.contains('thumb-item-shadow')){
                    el.classList.remove('thumb-item-shadow')
                }
            })
            
            imgThumbItem.forEach(el=>{
                if(el.classList.contains('opacity-40')){
                    el.classList.remove('opacity-40')
                }
            })
            e.target.parentElement.classList.add('thumb-item-shadow')
            e.target.classList.add('opacity-40')
            setCountSliderImg(parseInt(e.target.dataset.countImg))
        }
    } 
    
    return (
        <div className="container-img-sneakers w-full h-[350px] flex flex-col xs:w-[440px]  xs:h-[400px]  xs:mx-auto xs:gap-1 lg:h-full">
                    <div className="img-thumb relative w-full  flex-1  overflow-hidden xs:rounded-2xl grid place-items-center">
                        <img src={`./images/image-product-${countSliderImg}.jpg`} alt="" className="img-content-thumb  object-cover object-center  w-full h-full absolute select-none xs:object-top" />
                        <div className="icon-slide-img w-full   z-[4] px-4 justify-between flex xs:hidden">
                            <button onClick={previousCountSliderImg} className="icon-previous bg-ecommerce-light-grayish-blue w-[35px] h-[35px] grid place-items-center  rounded-full active:scale-90 transition-all duration-200">
                            <img src="./images/icon-previous.svg" alt=""  className="scale-75 mr-1" />
                            </button>
                            <button onClick={addCountSliderImg} className="icon-next bg-ecommerce-light-grayish-blue w-[35px] h-[35px] grid place-items-center  rounded-full active:scale-90 transition-all duration-200">
                            <img src="./images/icon-next.svg" alt=""  className="scale-75 ml-1" />
                            </button>
                        </div>
                    </div>
                    <div onClick={tumb_active} className="item-tumb w-full pt-2 px-2 hidden   items-center justify-around xs:flex  ">
                            <div className="thumb-item thumb-item-shadow group w-[70px]  rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-1.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none opacity-40" data-count-img='1'/>
                            </div>
                            <div className="thumb-item  group w-[70px] rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-2.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none" data-count-img='2'/>
                            </div>
                            <div className="thumb-item group w-[70px] rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-3.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none" data-count-img='3'/>
                            </div>
                            <div className="thumb-item group w-[70px] rounded-lg cursor-pointer overflow-hidden h-[70px] hover:shadow-[0_0_0_2px_#ff7d1a] ">
                            <img src="./images/image-product-4.jpg" alt="" className="img-item-thumb transition-all duration-200 group-hover:opacity-40 object-cover object-top w-full h-full  select-none" data-count-img='4' />
                            </div>
                               
                    </div>
                </div>
    )
}


export default ContainerImgSneakers;
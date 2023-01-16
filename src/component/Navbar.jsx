// import iconCardNavbar from '../assets/images/icon-cart.svg'
// import imgAvatar from '../assets/images/image-avatar.png'


import { useEffect,useRef,useState } from 'react'

// component navbar
const Navbar = ()=>{

    let navDevide = useRef();
    let navItem = useRef();

    // event show nav item
    let ToggleShow = ()=>{
        console.log('ok')
        let classHidden = 'hidden'
        let classTransform = 'translate-x-[-100%]';
        navDevide.current.classList.remove(classHidden)
        setTimeout(() => {
        navItem.current.classList.remove(classTransform)
        }, 50);
    }

    // event hidden nav item
    let toggleHidden = ()=>{
            navItem.current.classList.add('translate-x-[-100%]')
            setTimeout(() => {
            navDevide.current.classList.add('hidden')
            }, 100);
    }
    

    return (    
        <nav className="navbar relative w-full h-auto px-3 ">
            <div className="nav-container mx-auto max-w-5xl relative h-[90px] border-b-[1px] border-b-slate-200 flex">

                {/* icon toggle sidebar */}
                <div className="icon-toggle-sidebar relative pr-5 md:px-3  grid place-items-center md:hidden" onClick={ToggleShow}>
                    <i className="fa-solid fa-bars text-lg cursor-pointer"></i>
                </div>
                {/* title navbar */}
                <div href="#" className="title-navbar flex-1  grid items-center pr-7  p-0 m-0  font-[700] max- md:flex-grow-0 md:flex-shrink-0">
                    <span className=" text-3xl min-[340px]:text-3xl p-0 m-0 mt-[-7px] md:mt-[-4px] md:text-2xl">sneakers</span>
                </div>
                {/* navbar item */}
                <div ref={navDevide} onClick={toggleHidden} className="item-devide z-10  hidden fixed w-full h-full bg-[rgba(0,0,0,0.5)] m-0 p-0 left-0 top-0 md:flex-1 md:relative md:bg-white md:inline-block md:opacity-100 md:z-[1]">
                    <div className="container-navbar-item p-5 translate-x-[-100%] flex flex-col gap-5  bg-white max-w-[250px] h-full transition-all duration-200  md:opacity-100 md:max-w-full md:h-full md:flex-row md:p-0 md:translate-x-[0%]" onClick={(e)=>e.stopPropagation()} ref={navItem}>
                        <div className="nav-item-close group  md:hidden">
                            <i className="fa-solid fa-xmark icon-close-nav" onClick={toggleHidden}></i>
                        </div>
                        <div className="nav-item group  md:hover:shadow-[inset_0_-4px_0_-2px_#ff7d1a] md:hover:text-ecommerce-very-dark-blue md:hover:font-[500] ">
                            <a href="#">collections</a>
                        </div>
                         <div className="nav-item group md:hover:shadow-[inset_0_-4px_0_-2px_#ff7d1a] md:hover:text-ecommerce-very-dark-blue md:hover:font-[500] ">
                            <a href="#">men</a>
                        </div>
                        <div className="nav-item group md:hover:shadow-[inset_0_-4px_0_-2px_#ff7d1a] md:hover:text-ecommerce-very-dark-blue  md:hover:font-[500] ">
                            <a href="#">women</a>
                        </div>
                        <div className="nav-item group md:hover:shadow-[inset_0_-4px_0_-2px_#ff7d1a] md:hover:text-ecommerce-very-dark-blue md:hover:font-[500] ">
                            <a href="#">about</a>
                        </div>
                        <div className="nav-item group md:hover:shadow-[inset_0_-4px_0_-2px_#ff7d1a] md:hover:text-ecommerce-very-dark-blue md:hover:font-[500] ">
                            <a href="#">contact</a>
                        </div>
                    </div>
                </div>
                {/* navbar profile */}
                <div className="navbar-profile border-2 justify-self-end w-auto px-3 relaitve flex justify-center items-center gap-5 ">
                {/* icon chad navbar */}
                <button className="icon-card-navbar relative ">
                    <span className="shoping-count-nav absolute py-[0.2px] text-white px-[7px] rounded-md top-[-8px] text-[8px] bg-ecommerce-orange ">1</span>
                    <img src='./images/icon-cart.svg' alt="" />
                </button>
                {/* img profile */}
                <img src='./images/image-avatar.png' alt="" className="w-[35px] h-[35px] cursor-pointer duration-200 transition-all hover:shadow-[0_0_0_2px_#ff7d1a] rounded-full" />
                </div>

                {/* // navbar cart list sneakers navbar */}
                <div className="sneakers-list-cart absolute flex flex-col overflow-hidden right-0 z-[2] top-[110%] w-full  h-[190px] rounded-md shadow-[0_5px_12px_-3px_rgba(0,0,0,0.5)] bg-white md:top-[80%] md:w-[290px]">
                    <h2 className="title-cart-sneaker border-b-[1px] border-b-slate-300 p-4 text-sm font-[600]">Cart</h2>
                {/* navbar sneaker list empty */}
                {/* <div className="sneaker-list-empty flex-1  grid place-items-center">
                    <span className="font-[600] text-ecommerce-dark-grayish-blue text-sm">Your cart is empty.</span>
                </div> */}

                {/* navbar sneaker list item */}
                <div className="nav-sneakers-list-item p-4 flex-1  flex gap-5  flex-col">
                    <div className="nav-item-sneakers w-full flex gap-3 select-none ">
                        <img src="./images/image-product-1.jpg" alt="" className="nav-img-sneakers w-[40px] h-full object-cover object-center rounded-[5px]" />
                        <div className="nav-description-sneakers-item flex-1 ">
                            <h5 className="title-descripition-sneakers capitalize font-[500] text-[0.8em] text-ecommerce-dark-grayish-blue">fall limited edition sneakers</h5>
                            <div className="price-sneaker-item  text-[0.8em] p-0 m-0">
                                $<span className="int-price-sneaker-item text-ecommerce-dark-grayish-blue font-[500]">125.00</span> x <span className="count-sneaker text-ecommerce-dark-grayish-blue font-[500]">3</span> <span className="total-price text-ecommerce-very-dark-blue font-bold">$375.00</span>
                            </div>
                        </div>
                        <button className="nav-delete-sneaker-item  px-1">
                            <img src="./images/icon-delete.svg" className='scale-90' alt="" />
                        </button>
                    </div>

                    {/* button checkou sneakers */}
                    <button className="checkout-sneakers w-full h-full bg-ecommerce-orange text-white rounded-lg font-[500]">
                        checkout 
                    </button>
                </div>

                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
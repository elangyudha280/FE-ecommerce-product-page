import iconCardNavbar from '../assets/images/icon-cart.svg'
import imgAvatar from '../assets/images/image-avatar.png'

// component navbar
const Navbar = ()=>{
    return (    
        <nav className="navbar relative w-full h-auto px-3 ">
            <div className="nav-container mx-auto max-w-5xl h-[90px] border-b-[1px] border-b-slate-200 grid grid-cols-[auto_auto_1fr_auto] grid-rows-[auto] ">

                {/* icon toggle sidebar */}
                <div className="icon-toggle-sidebar relative px-3  grid place-items-center">
                    <i className="fa-solid fa-bars text-lg cursor-pointer"></i>
                </div>
                {/* title navbar */}
                <a href="#" className="title-navbar  grid place-items-center  pr-7 text-3xl p-0 m-0  font-[700]">
                    <span className="mt-[-4px]">sneakers</span>
                </a>
                {/* navbar item */}
                <div className="container-navbar-item flex gap-5 border-2 ">
                    <div className="nav-item group cursor-pointer grid place-items-center text-sm capitalize text-ecommerce-dark-grayish-blue font-[400] duration-200 transition-all hover:shadow-[inset_0_-2px_0_#ff7d1a] hover:text-ecommerce-very-dark-blue hover:font-[500] ">
                        <a href="#">collection</a>
                    </div>
                    <div className="nav-item group cursor-pointer grid place-items-center capitalize text-sm text-ecommerce-dark-grayish-blue font-[400] duration-200 transition-all hover:shadow-[inset_0_-2px_0_#ff7d1a] hover:text-ecommerce-very-dark-blue hover:font-[500]">
                        <a href="#">men</a>
                    </div>
                    <div className="nav-item group cursor-pointer grid place-items-center capitalize text-sm text-ecommerce-dark-grayish-blue font-[400] duration-200 transition-all hover:shadow-[inset_0_-2px_0_#ff7d1a] hover:text-ecommerce-very-dark-blue hover:font-[500]">
                        <a href="#">women</a>
                    </div>
                    <div className="nav-item group cursor-pointer grid place-items-center capitalize text-sm text-ecommerce-dark-grayish-blue font-[400] duration-200 transition-all hover:shadow-[inset_0_-2px_0_#ff7d1a] hover:text-ecommerce-very-dark-blue hover:font-[500]">
                        <a href="#">about</a>
                    </div>
                    <div className="nav-item group cursor-pointer grid place-items-center capitalize text-sm text-ecommerce-dark-grayish-blue font-[400] duration-200 transition-all hover:shadow-[inset_0_-2px_0_#ff7d1a] hover:text-ecommerce-very-dark-blue hover:font-[500]">
                        <a href="#">contact</a>
                    </div>
                </div>
                {/* navbar profile */}
                <div className="navbar-profile w-auto px-3 relaitve flex justify-center items-center gap-5 ">
                {/* icon chad navbar */}
                <button className="icon-card-navbar relative ">
                    <span className="shoping-count-nav absolute py-[0.2px] text-white px-[7px] rounded-md top-[-8px] text-[8px] bg-ecommerce-orange ">1</span>
                    <img src={iconCardNavbar} alt="" />
                </button>
                {/* img profile */}
                <img src={imgAvatar} alt="" className="w-[35px] h-[35px] cursor-pointer duration-200 transition-all hover:shadow-[0_0_0_2px_#ff7d1a] rounded-full" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
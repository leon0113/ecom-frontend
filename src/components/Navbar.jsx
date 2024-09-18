import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { menu, profileMenu } from "../utlis/utlis";

function Navbar() {

    const [visible, setVisiable] = useState(false);



    return (
        <div className="flex items-center justify-between py-5 font-medium">
            {/* Logo section  */}
            <img src={assets.logo} alt="logo" className="w-36" />
            {/* Menu section  */}
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                {
                    menu.map((item) => (
                        <NavLink key={item.name} to={item.path} className='flex flex-col items-center gap-1 '>
                            <p>{item.name}</p>
                            <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
                        </NavLink>
                    ))
                }
            </ul>
            {/* Button section  */}
            <div className="flex items-center gap-6">
                {/* search icon mini section  */}
                <img src={assets.search_icon} alt="search-icon" className="w-5 cursor-pointer" />
                {/* profile icon mini section  */}
                <div className="group relative">
                    <img src={assets.profile_icon} alt="profile-icon" className="w-5 cursor-pointer" />
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <ul className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            {
                                profileMenu.map((item) => (
                                    <NavLink key={item.name} path={item?.path} className="hover:text-black">{item.name}</NavLink>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* Cart icon mini section  */}
                <Link to='/cart' className="relative">
                    <img src={assets.cart_icon} alt="car t-icon" className="w-5" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>

                </Link>
                {/* Burger menu mini section  */}
                <img onClick={() => setVisiable(true)} src={assets.menu_icon} alt="menu icon" className="w-5 cursor-pointer sm:hidden" />
            </div>

            {/* Sidebar menu for small screens when visiable state is true  */}
            <MobileSidebar visible={visible} setVisiable={setVisiable} />

        </div>
    )
}

export default Navbar
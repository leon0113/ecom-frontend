import { NavLink } from "react-router-dom"
import { assets } from "../assets/frontend_assets/assets"
import { menu } from "../utlis/utlis"

export default function MobileSidebar({ visible, setVisiable }) {
    return (
        <div className={`h-1/2 absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={() => setVisiable(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                    <img src={assets.dropdown_icon} alt="dropdown" className="h-4 rotate-180" />
                    <p>Back</p>
                </div>
                {
                    menu.map((item) => (
                        <NavLink onClick={() => setVisiable(false)} key={item.name} to={item.path} className='py-2 text-center border hover:bg-slate-50'>
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

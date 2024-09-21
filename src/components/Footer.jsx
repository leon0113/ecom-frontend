import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const company = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/'
    },
    {
        name: 'Delivery',
        path: '/'
    },
    {
        name: 'Customer Policy',
        path: '/'
    },
];

const getInTouch = [
    {
        name: '+8801686860113',
        path: '/'
    },
    {
        name: 'connect.tahjib@gmail.com',
        path: '/'
    },
    {
        name: 'Github',
        path: 'https://github.com/leon0113'
    },
]

export default function Footer() {
    return (
        <div className="">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                <div>
                    <img src={assets.logo} alt="logo" className="mb-5 w-32" />
                    <p className="w-full md:w-2/3 text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>


                <div>
                    <h3 className="text-xl font-medium mb-5">COMPANY</h3>
                    <ul className="flex flex-col gap-1 text-gray-700">
                        {
                            company.map((item) => (
                                <Link to={item.path} key={item.name} className="hover:text-gray-500">
                                    {item.name}
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-medium mb-5">GET IN TOUCH</h3>
                    <ul className="flex flex-col gap-1 text-gray-700">
                        {
                            getInTouch.map((item) => (
                                <Link to={item.path} key={item.name} className="hover:text-gray-500">
                                    {item.name}
                                </Link>
                            ))
                        }
                    </ul>
                </div>



            </div>
        </div>
    )
}

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
];

const ItemList = ({ items }) => (
    <ul className="flex flex-col gap-1 text-gray-700">
        {items.map(({ name, path }) => (
            <Link to={path} key={name} className="hover:text-gray-500">
                {name}
            </Link>
        ))}
    </ul>
);


export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                <div>
                    <img src={assets.logo} alt="logo" className="mb-5 w-32" />
                    <p className="w-full md:w-2/3 text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>


                <div>
                    <h3 className="text-xl font-medium mb-5">COMPANY</h3>
                    <ItemList items={company} />
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-5">GET IN TOUCH</h3>
                    <ItemList items={getInTouch} />
                </div>




            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center text-gray-500">Copyright 2024@ leon0113 - All Right Reserved.</p>
            </div>
        </footer>
    )
}

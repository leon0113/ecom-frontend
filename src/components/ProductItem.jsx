import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom";

export default function ProductItem({ id, name, image, price }) {

    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className="text-gray-800 cursor-pointer border">
            <div className="overflow-hidden h-80">
                <img src={image[0]} alt="product-image" className="hover:scale-110 transition ease-in-out " />
            </div>
            <div className="px-2 sm:px-4 pb-4">
                <p className="pt-3 pb-1 text-sm">{name}</p>
                <p className="text-sm font-medium"><span className="text-gray-500">{currency}</span> {price}</p>
            </div>
        </Link>
    )
}

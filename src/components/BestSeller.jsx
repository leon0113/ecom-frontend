import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function BestSeller() {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestSellerProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestSellerProduct.slice(0, 5))
    }, [])



    return (
        <div className='my-10'>
            {/* title section  */}
            <div className='text-center py-8 text-3xl'>
                <Title title1={'BEST'} title2={'SELLER'} />
                <p className='w/34 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                    Check Out Our Best Selling Items
                </p>
            </div>

            {/*rendering latest products section   */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller?.map(({ _id, name, image, price }) => (
                        <ProductItem key={_id} id={_id} name={name} image={image} price={price} />
                    ))
                }
            </div>
        </div>
    )
}

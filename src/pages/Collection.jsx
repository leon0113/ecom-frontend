import { useContext, useEffect, useState } from "react"
import { ShopContext } from '../context/ShopContext'
import { categoriesFilter, typesFilter } from "../utlis/utlis";
import Filter from "../components/Filter";
import { assets } from "../assets/frontend_assets/assets";
import Title from '../components/Title'
import ProductItem from "../components/ProductItem";



export default function Collection() {

    const { products } = useContext(ShopContext);

    const [showFilter, setShowFilter] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);
    const [sortType, setSortType] = useState('relavent')

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) => prev.filter((item) => item != e.target.value))
        } else {
            setCategory(prev => [e.target.value, ...prev])
        }
    };

    const toggleType = (e) => {
        if (type.includes(e.target.value)) {
            setType((prev) => prev.filter((item) => item != e.target.value))
        } else {
            setType(prev => [e.target.value, ...prev])
        }
    };




    const applyFilter = () => {
        let productsCopy = products.slice();
        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category))
        }
        if (type.length > 0) {
            productsCopy = productsCopy.filter((item) => type.includes(item.subCategory))
        }

        setFilteredProducts(productsCopy);

    };

    const sortByPrice = () => {
        let filteredProductsCopy = filteredProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilteredProducts(filteredProductsCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilteredProducts(filteredProductsCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break
        }

    }


    useEffect(() => {
        setFilteredProducts(products);
    }, []);

    useEffect(() => {
        applyFilter();
    }, [category, type]);

    useEffect(() => {
        sortByPrice();
    }, [sortType]);


    // useEffect(() => {
    //     console.log(category);
    // }, [category]);

    // useEffect(() => {
    //     console.log(type);
    // }, [type]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

            {/* filter options  */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
                    Filters
                    <img src={assets.dropdown_icon} alt="icon" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
                </p>
                {/* category filter  */}
                <Filter title='CATEGORIES' filter={categoriesFilter} showFilter={showFilter} toggleCategory={toggleCategory} />
                {/* type filters  */}
                <Filter title='TYPE' filter={typesFilter} showFilter={showFilter} toggleType={toggleType} />
            </div>

            {/* Products display  */}
            <div className="flex-1">

                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title title1={'All'} title2={'Collections'} />
                    {/* product sort  */}
                    <select onChange={(e) => setSortType(e.target.value)} className="border border-gray-400 text-sm px-2 outline-none">
                        <option value="relavent">Sort by: Relavent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* map all products */}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {
                        filteredProducts.map(({ _id, name, image, price }) => (
                            <ProductItem key={_id} id={_id} name={name} image={image} price={price} />
                        ))
                    }
                </div>

            </div>


        </div>
    )
}

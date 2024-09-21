import { useContext, useState } from "react"
import { ShopContext } from '../context/ShopContext'
import { categoriesFilter, typesFilter } from "../utlis/utlis";



export default function Collection() {

    const { products } = useContext(ShopContext);
    const { showFilter, setShowFilter } = useState(false);

    // reuseable filter component 
    const Filter = ({ title, filter }) => (
        <div className={`border border-gay-400 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">{title}</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {
                    filter.map(({ name, value }) => (
                        <p key={name} className="flex gap-2">
                            <input type="checkbox" value={value} className="w-3" /> {name}
                        </p>
                    ))
                }
            </div>
        </div>
    )



    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

            {/* filter options  */}
            <div className="min-w-60">
                <p className="my-2 text-xl flex items-center cursor-pointer gap-2">Filters</p>
                {/* category filter  */}
                <Filter title='CATEGORIES' filter={categoriesFilter} />
                {/* type filters  */}
                <Filter title='TYPE' filter={typesFilter} />
            </div>

        </div>
    )
}

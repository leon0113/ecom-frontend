
export default function Filter({ title, filter, showFilter, toggleCategory, toggleType }) {



    return (
        <div className={`border border-gay-400 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">{title}</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {
                    filter.map(({ name, value }) => (
                        <p key={name} className="flex gap-2">
                            <input type="checkbox" value={value} className="w-3" onChange={title === 'CATEGORIES' ? toggleCategory : toggleType} /> {name}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

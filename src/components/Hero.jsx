import Line from "./Line";

export default function Hero() {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-400">
            {/* Hero left section  */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-gray-600">
                    <div className="flex items-center gap-2 font-medium">
                        <Line />
                        <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
                    </div>
                    <h1 className="text-3xl lg:text-5xl sm:py-3 leading-relaxed">Lastest Arrivals</h1>
                    <div className="flex items-center gap-2 font-medium">
                        <p className="font-semibold text-sm md:text-base">SHOW NOW</p>
                        <Line />
                    </div>
                </div>
            </div>

            {/* Hero right section  */}
            <img src="https://images.unsplash.com/photo-1599809836744-99fdf7afd880?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cover-img" className="w-full sm:w-1/2 h-[400px] sm:h-[600px] object-cover object-center" />
        </div>
    )
}

import { assets } from "../assets/frontend_assets/assets";


const policies = [
    {
        img: assets.exchange_icon,
        text1: 'Easy Exchange Policy',
        text2: 'We offer hassle free excahnge policy'
    },
    {
        img: assets.quality_icon,
        text1: '7 Days Return Policy',
        text2: 'We provide 7 days free return policy'
    },
    {
        img: assets.support_img,
        text1: 'Best customer support',
        text2: 'we provide 24/7 customer support'
    },
]

export default function OurPolicy() {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">


            {
                policies.map(({ img, text1, text2 }) => (
                    <div key={text1}>
                        <img src={img} alt="icon" className="w-12 m-auto mb-5" />
                        <p className="font-semibold">{text1}</p>
                        <p className="text-gray-400">{text2}</p>
                    </div>
                ))
            }


        </div>
    )
}

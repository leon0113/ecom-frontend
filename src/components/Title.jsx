import Line from "./Line";

export default function Title({ title1, title2 }) {
    return (
        <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-600">{title1} <span className="text-gray-800 font-medium">{title2}</span></p>
            <Line />
        </div>
    )
}

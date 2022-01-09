export default function CampCard({ camp }) {
    const { name, image, description } = camp
    return (
        <div className = "p-2 rounded-sm border-gray-200 border">
            <img alt = "Camp Splash" src = {image} className = "w-full rounded-sm" />
            <h3 className = "font-bold text-xl">{name}</h3>
            <div className = "text-stone-600 text-lg leading-snug my-3">{description}</div>
            <button className = "w-full py-2 bg-white border-gray-400 border rounded-sm text-center transition hover:bg-black hover:text-white">View Campground</button>
        </div>
    )
}
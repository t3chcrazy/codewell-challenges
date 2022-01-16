import { Link } from 'react-router-dom'

export default function CampCard({ camp, id }) {
    const { name, image, description } = camp
    
    return (
        <div className = "p-2 rounded-sm border-gray-200 border">
            <img alt = "Camp Splash" src = {image} className = "w-full rounded-sm" />
            <h3 className = "font-bold text-xl mt-2">{name}</h3>
            <div className = "text-stone-600 text-lg leading-snug my-3">{description}</div>
            <Link to = {`/yelpcamp/camppage/${id}`}>
                <button className = "w-full py-2 bg-white border-gray-400 border rounded-md text-center transition hover:bg-black hover:text-white font-bold">View Campground</button>
            </Link>
        </div>
    )
}
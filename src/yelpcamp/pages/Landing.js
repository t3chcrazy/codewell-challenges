import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.svg'
import Airbnb from '../Assets/Airbnb.svg'
import Booking from '../Assets/Booking.svg'
import Plum from '../Assets/Plum Guide.svg'
import Hero from '../Assets/Hero Image.jpg'

import Checkmark from '../Assets/Checkmark.svg'

export default function Landing() {
    return (
        <div className = "bg-lightYellow flex lg:flex-row flex-col-reverse lg:h-screen h-auto">
            <div className = "lg:px-24 px-12 flex flex-col flex-1 py-8">
                <img className = "w-fit" src = {Logo} alt = "Yelpcamp logo" />
                <div className = "flex-1 flex flex-col justify-center text-stone-700">
                    <h1 className = "text-black leading-tight lg:text-7xl md:text-5xl text-3xl font-bold">Explore the best camps on Earth.</h1>
                    <div className = "text-lg mt-2 mb-3">YelpCamp is a curated list of the bes camping spots on Earth. Unfiltered and unbiased reviews.</div>
                    <ul className = "list-none">
                        <li className = "mb-3"><img className = "inline mr-1" src = {Checkmark} alt = "Checkmark" />Add your own camp suggestions.</li>
                        <li className = "mb-3"><img className = "inline mr-1" src = {Checkmark} alt = "Checkmark" />Leave reviews and experiences</li>
                        <li className = "mb-3"><img className = "inline mr-1" src = {Checkmark} alt = "Checkmark" />See locations for all camps</li>
                    </ul>
                    <Link className = "blackButton self-start mt-2" to = "/yelpcamp/campgrounds">
                        View Campgrounds
                    </Link>
                    <div className = "mt-4 mb-2">Partnered with:</div>
                    <div className = "flex flex-row">
                        <img src = {Airbnb} alt = "Airbnb logo" />
                        <img src = {Booking} alt = "Booking.com logo" />
                        <img src = {Plum} alt = "PLUMGUIDE logo" />
                    </div>
                </div>
            </div>
            <div className = "lg:flex-1 lg:h-auto h-80 flex justify-end">
                <img className = "lg:w-auto w-full lg:h-full h-80 object-cover object-bottom" src = {Hero} alt = "Landing Cover" />
            </div>
        </div>
    )
}
import { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import TopHeader from "../components/TopHeader"
import Search from '../Assets/Search Icon.svg'
import Buloy from '../Assets/Camp Images/Compressed Images/Buloy Springs.jpg'
import Latik from '../Assets/Camp Images/Compressed Images/Latik Riverside.jpg'
import Mount from '../Assets/Camp Images/Compressed Images/Mount Ulap.jpg'
import Onay from '../Assets/Camp Images/Compressed Images/Onay Beach.jpg'
import Seven from '../Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg'
import CampCard from "../components/CampCard"
import Navbar, { Footer } from "../components/Navbar"
import { AuthContext } from "../context"

const LIST = [
    {
        name: "Mount Ulap",
        image: Mount,
        price: 399,
        description: "One of the most famous hikes in Bengust in Mt. Ulap in Itogon."
    },
    {
        name: "Calagus Islands",
        image: Mount,
        price: 399,
        description: "One of the most famous hikes in Bengust in Mt. Ulap in Itogon."
    },
    {
        name: "Onay Beach",
        image: Onay,
        price: 399,
        description: "One of the most famous hikes in Bengust in Mt. Ulap in Itogon."
    },
    {
        name: "Seven Sisters Waterfall",
        image: Seven,
        price: 399,
        description: "One of the most famous hikes in Bengust in Mt. Ulap in Itogon."
    },
    {
        name: "Latik Riverside",
        image: Latik,
        price: 399,
        description: "One of the most famous hikes in Bengust in Mt. Ulap in Itogon."
    },
    {
        name: "Buloy Springs",
        image: Buloy,
        price: 399,
        description: "One of the most famous hikes in Bengust in Mt. Ulap in Itogon."
    },
]

export default function Campgrounds() {
    // const isLoggedIn = !!auth.currentUser
    const { user } = useContext(AuthContext)
    const isLoggedIn = useMemo(() => !!user, [user])
    return (
        <div>
            <TopHeader />
            <div className = "container mx-auto">
                <Navbar />
                <div className = "bg-stone-200 rounded-sm px-8 py-12 flex flex-col items-start lg:mb-10 mb-5">
                    <h1 className = "font-bold text-3xl">Welcome to YelpCamp!</h1>
                    <div className = "text-lg text-stone-600 mt-2 mb-3">View our hand-picked campgrounds from all over the world, or add your own.</div>
                    <div className = "flex flex-row">
                        <div className = "border-stone-700 bg-white rounded-sm flex flex-row items-center py-3 px-3">
                            <img src = {Search} alt = "Search Icon" />
                            <input className = "outline-none ml-2" placeholder = "Search for camps" />
                        </div>
                        <button className = "blackButton ml-2 px-8">Search</button>
                    </div>
                    <Link className = "underline text-stone-600 text-md mt-2" to = {isLoggedIn? "/yelpcamp/addcamp": "/yelpcamp/signin"}>
                        Or add your own campgroud
                    </Link>
                </div>
                <div className = "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    {LIST.map(camp => <CampCard key = {camp.name} camp = {camp} />)}
                </div>
                <Footer className = "lg:mt-10 mt-5" />
            </div>
        </div>
    )
}
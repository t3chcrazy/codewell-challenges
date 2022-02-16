import { useContext, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import TopHeader from "../components/TopHeader"
import Search from '../Assets/Search Icon.svg'
import CampCard from "../components/CampCard"
import Navbar, { Footer } from "../components/Navbar"
import { AuthContext } from "../context"
import { useFirebaseValues } from '../firebase-services'
import CampCardPlaceholder from "../placeholders/CampCardPlaceholder"

export default function Campgrounds() {
    const { user } = useContext(AuthContext)
    const isLoggedIn = useMemo(() => !!user, [user])
    const { data, loading } = useFirebaseValues("camps", false)
    const [query, setQuery] = useState("")
    const finalCamps = useMemo(() => Object.entries(data ?? {}).filter(camp => !!query? new RegExp(query, "gi").test(camp[1].name): true), [data, query])

    const handleChange = e => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <TopHeader />
            <div className = "container mx-auto">
                <Navbar />
                <div className = "bg-stone-200 rounded-sm px-8 py-12 flex flex-col items-start lg:mb-10 mb-5">
                    <h1 className = "font-bold text-3xl">Welcome to YelpCamp!</h1>
                    <div className = "text-lg text-stone-600 mt-2 mb-3">View our hand-picked campgrounds from all over the world, or add your own.</div>
                    <div className = "flex md:flex-row flex-col md:w-auto w-full md:items-stretch items-start">
                        <div className = "border-stone-700 bg-white rounded-sm flex flex-row items-center py-3 px-3 flex-1 md:mb-0 mb-2 md:w-auto w-80">
                            <img src = {Search} alt = "Search Icon" />
                            <input onChange = {handleChange} className = "outline-none ml-2" placeholder = "Search for camps" />
                        </div>
                        <button className = "blackButton md:ml-2 ml-0 px-8">Search</button>
                    </div>
                    <Link className = "underline text-stone-600 text-md mt-2" to = {isLoggedIn? "/yelpcamp/addcamp": "/yelpcamp/signin"}>
                        Or add your own campground
                    </Link>
                </div>
                <div className = "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    {loading? 
                    <>
                        <CampCardPlaceholder />
                        <CampCardPlaceholder />
                        <CampCardPlaceholder />
                    </>:
                    finalCamps.map(camp => <CampCard key = {camp[0]} camp = {camp[1]} id = {camp[0]} />)}
                </div>
                <Footer className = "lg:mt-10 mt-5" />
            </div>
        </div>
    )
}
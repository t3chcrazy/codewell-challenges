import Navbar, { Footer } from "../components/Navbar"
import TopHeader from "../components/TopHeader"
import Map from '../Assets/Map.png'
import Buloy from '../Assets/Camp Images/High Quality Images/Buloy Springs.jpg'
import Comment from "../components/Comment"

export default function CampPage() {
    return (
        <div>
            <TopHeader />
            {/* <Navbar className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" /> */}
            <Navbar className = "container mx-auto" />
            <div className = "container mx-auto grid items-start lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
                <div className = "col-span-1 p-10 rounded-md border border-gray-300">
                    <img className = "lg:w-fit w-full" src = {Map} alt = "Map" />
                </div>
                <div className = "lg:col-span-2 col-span-1">
                    <div className = "p-10 rounded-md border border-gray-300">
                        <img className = "w-fit rounded-md" src = {Buloy} alt = "Camp Splash" />
                        <div className = "flex flex-row justify-between">
                            <h1>Mount Utap</h1>
                            <h3>$104.99/night</h3>
                        </div>
                        <section className = "text-stone-600 my-3 leading-snug">
                            Mount Utap is a 7.7 kilometer moderately trafficked point-to-point trail located near Yuba, Benguet, Phillipines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.
                        </section>
                        <div className = "italic">Submitted by Andrew Mike</div>
                    </div>
                    <div className = "p-10 divide-y rounded-md border border-gray-300 mt-4">
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
            <Footer className = "container mx-auto" />
        </div>
    )
}
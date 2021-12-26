import Verizon from './Assets/Logos/Verizon.svg'
import Samsung from './Assets/Logos/Samsung.svg'
import Tinder from './Assets/Logos/Tinder.svg'
import Visa from './Assets/Logos/Visa.svg'
import JPMorgan from './Assets/Logos/JP Morgan.svg'
import Walmart from './Assets/Logos/Walmart.svg'

import Spense from './Assets/Spense.png'
import Yelp from './Assets/YelpCamp.png'

export default function Portfolio() {
    return (
        <div className = "font-prata">
            <nav className = "bg-gray-900 container row items-center mx-auto py-3">
                <h3 className = "text-white text-xl">Johnathan Spectre</h3>
                <ul className = "list-none md:flex flex-col md:relative fixed right-0 top-0 text-slate-200">
                    <li className = "hover:opacity-5">Articles</li>
                    <li className = "hover:opacity-5">Chats</li>
                    <li className = "hover:opacity-5">Awards</li>
                    <li className = "hover:opacity-5">About</li>
                </ul>
                <button className = "bg-yellow-400 px-4 py-3 text-gray-900">Get in touch</button>
            </nav>
            <div className = "bg-gray-900 container">
                <h1 className = "text-white">Helping companies build<br />better,scalable software.</h1>
                <div className = "text-stone-400">Award-winning web developer and author, with over 15+ years of working<br />experience with Fortune 500 companies like Apple, Google, Facebook and<br />more.</div>
                <div className = "flex lg:justify-between md:justify-around">
                    <img src = {Walmart} alt = "Brand" />
                    <img src = {JPMorgan} alt = "Brand" />
                    <img src = {Visa} alt = "Brand" />
                    <img src = {Tinder} alt = "Brand" />
                    <img src = {Samsung} alt = "Brand" />
                    <img src = {Verizon} alt = "Brand" />
                </div>
                <div className = "md:flex flex-col md:justify-between">
                    <button className = "md:w-5/12 w-1/2 group">
                        <img src = {Spense} alt = "Spense" />
                        <div className = "text-white text-xl">Spense</div>
                        <div>
                            
                        </div>
                    </button>
                    <button className = "md:w-5/12 w-1/2">
                        <img src = {Yelp} alt = "Yelp" />
                        <div className = "text-white text-xl">YelpCamp</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
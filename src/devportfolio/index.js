import Verizon from './Assets/Logos/Verizon.svg'
import Samsung from './Assets/Logos/Samsung.svg'
import Tinder from './Assets/Logos/Tinder.svg'
import Visa from './Assets/Logos/Visa.svg'
import JPMorgan from './Assets/Logos/JP Morgan.svg'
import Walmart from './Assets/Logos/Walmart.svg'

import Spense from './Assets/Spense.png'
import Yelp from './Assets/YelpCamp.png'

import Github from './Assets/Social Icons/Github.svg'
import LinkedIn from './Assets/Social Icons/LinkedIn.svg'
import Twitter from './Assets/Social Icons/Twitter.svg'

export default function Portfolio() {
    return (
        <div className = "bg-black">
            <nav className = "container md:px-0 px-2 flex flex-row md:justify-between items-center mx-auto py-8">
                <h3 className = "text-white text-xl font-prata">Johnathan Spectre</h3>
                <ul className = "list-none flex md:flex-row flex-col md:relative fixed right-0 top-0 text-slate-200">
                    <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">Articles</li>
                    <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">Chats</li>
                    <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">Awards</li>
                    <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">About</li>
                </ul>
                <button className = "bg-yellow-400 px-3 py-2 text-gray-900">Get in touch</button>
            </nav>
            <div className = "container md:px-0 px-2 mx-auto">
                <h1 className = "font-prata text-white md:text-6xl text-2xl leading-normal mt-10">Helping companies build<br />better,scalable software.</h1>
                <div className = "text-stone-400 md:w-5/12 w-full leading-normal">Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook and more.</div>
                <div className = "flex flex-wrap lg:justify-between md:justify-around justify-center my-20">
                    <img className = "md:mx-0 mx-3 mb-3" src = {Walmart} alt = "Brand" />
                    <img className = "md:mx-0 mx-3 mb-3" src = {JPMorgan} alt = "Brand" />
                    <img className = "md:mx-0 mx-3 mb-3" src = {Visa} alt = "Brand" />
                    <img className = "md:mx-0 mx-3 mb-3" src = {Tinder} alt = "Brand" />
                    <img className = "md:mx-0 mx-3 mb-3" src = {Samsung} alt = "Brand" />
                    <img className = "md:mx-0 mx-3 mb-3" src = {Verizon} alt = "Brand" />
                </div>
                <div className = "flex md:flex-row flex-col md:justify-between md:items-start items-center pt-12 pb-24">
                    <button className = "md:w-[48%] flex flex-col w-full group text-left">
                        <img className = "w-full" src = {Spense} alt = "Spense" />
                        <div className = "font-prata text-white md:text-3xl text-xl font-bold mt-3 my-3 after:content-['\2192'] after:ml-2">Spense.com</div>
                        <div className = "text-stone-600 text-lg">
                            Rethinking the way writers get paid, an open source platform designed to help writers focus more on writing, and less on <span className = "italic">when</span> and <span className = "italic">how</span> they'll get paid. Project in collaboration with Codewell.cc
                        </div>
                    </button>
                    <button className = "md:w-[48%] flex flex-col w-full text-left">
                        <img className = "w-full" src = {Yelp} alt = "Yelp" />
                        <div className = "font-prata text-white md:text-3xl text-xl font-bold mt-3 my-3 after:content-['\2192'] after:ml-2">YelpCamp</div>
                        <div className = "text-stone-600 text-lg">
                            Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021.
                        </div>
                    </button>
                </div>
            </div>
            <div className = "bg-gray-300 py-12">
                <div className = "container md:px-0 px-2 mx-auto flex md:flex-row flex-col md:justify-between items-center">
                    <div className = "md:w-[48%] w-full">
                        <h1 className = "font-prata text-white text-4xl m-0 leading-snug mb-3">A Co-founder at one of the<br />world's largest communities</h1>
                        <div className = "text-stone-600 leading-snug">
                            The combined experience I have working at the top Fortune 500 companies<br />has allowed me to develop a skillset that helps me in not just development, but in every aspect of any business.<br /><br />
                            I'm proud to announce that I am now working at one of the world's largest communities teaching young minds about how to sell yourself as a developer and open them to a whole new world of opportunities.
                        </div>
                    </div>
                    <div className = "text-stone-600 leading-snug md:w-[48%] w-full">
                        As a developer, you have everything available to you and all that's holding you back is yourself.<br /><br />
                        A quote I live by perfectly illustrates what I mean.<br /><br />
                        "How big would you dream, if you <strong>knew</strong> you wouldn't fail?"You've already gone through the hardest parts being a developer, it's time to evelate your skills and become a leader in something you're passionate about.<br /><br />
                        I'm happy to chat over coffee some time about how I can help your company.
                    </div>
                </div>
            </div>
            <div className = "container mx-auto py-24 md:px-0 px-2">
                <h1 className = "text-white font-prata text-3xl">Interested in working with me?</h1>
                <div className = "text-stone-600 leading-normal md:w-1/2 w-full mt-3 mb-5">I'm active on all social media platforms listed below, but you can also send me an email and I will get back to you within 24-48 hours.</div>
                <button className = "bg-yellow-400 px-3 py-2 text-gray-900">Get in touch</button>
            </div>
            <footer className = "bg-gray-600 py-5 md:px-0 px-2">
                <div className = "container mx-auto flex flex-row justify-between">
                    <h3 className = "text-white text-xl font-prata">Johnathan Spectre</h3>
                    <div className = "flex flex-row items-center">
                        <img className = "ml-3" src = {Twitter} alt = "Twitter" />
                        <img className = "ml-3" src = {LinkedIn} alt = "LinkedIn" />
                        <img className = "ml-3" src = {Github} alt = "Github" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
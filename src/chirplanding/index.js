import TwitterWhite from './Assets/Twitter.svg'
import HeroDesktop from './Assets/Hero Image (Desktop View).png'
import FeatureCard from './components/FeatureCard'
import TestimonialCard from './components/TestimonialCard'
import User1 from './Assets/userAvatar01.svg'
import User2 from './Assets/userAvatar02.svg'
import User3 from './Assets/userAvatar03.svg'
import User4 from './Assets/userAvatar04.svg'
import User5 from './Assets/userAvatar05.svg'
import User6 from './Assets/userAvatar06.svg'
import User7 from './Assets/userAvatar07.svg'
import User8 from './Assets/userAvatar08.svg'
import User9 from './Assets/userAvatar09.svg'
import TwitterBlack from './Assets/Twitter (Black).svg'
import Checkmark from './Assets/Checkmark.svg'
import HamburgerMenu from './Assets/Hamburger Menu.svg'

const USERS = [
    {
        likes: 2,
        createdDate: new Date(),
        review: "I tried out @chirp and its amazing, love all the analytics I can see.",
        userName: "Sara May",
        twitterHandle: "@saray_may",
        image: User1
    },
    {
        likes: 32,
        createdDate: new Date(),
        review: "I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
        userName: "Jack Scott",
        twitterHandle: "@jackscott_",
        image: User2
    },
    {
        likes: 221,
        createdDate: new Date(),
        review: "Absolutely love everything about Chirp, from the design to how everything works smoothly.",
        userName: "Jessica May",
        twitterHandle: "@jmay98",
        image: User3
    },
]

const AVATARS = [User1, User2, User3, User4, User5, User6, User7, User8, User9,]

export default function ChirpLanding() {
    return (
        <main>
            <div className = "bg-yellow-50">
                <nav className = "container mx-auto flex flex-row justify-between py-6">
                    <h2 className = "font-bold text-blue-600 italic text-3xl">Chirp</h2>
                    <div className = "md:flex hidden flex-row justify-end items-center">
                        <a className = "mx-2" href = "/">Home</a>
                        <a className = "mx-2" href = "/">Pricing</a>
                        <a className = "mx-2" href = "/">FAQ</a>
                        <button className = "transition flex flex-row items-center bg-sky-600 px-3 py-2 mr-2 rounded-[4px] hover:opacity-80">
                            <img src = {TwitterWhite} alt = "Twitter Logo" />
                            <div className = "text-white text-md ml-2">Sign In With Twitter</div>
                        </button>
                    </div>
                    <button className = "md:hidden block">
                        <img src = {HamburgerMenu} alt = "Menu" />
                    </button>
                </nav>
                <div className = "container mx-auto flex lg:flex-row flex-col-reverse py-10 min-h-screen">
                    <div className = "flex-1 flex flex-col pt-5 lg:pr-6 pr-0">
                        <h1 className = "lg:text-6xl md:text-4xl text-2xl font-bold leading-tight">Twitter analytics<br />taken to a whole new level.</h1>
                        <div className = "text-stone-600 leading-relaxed my-2">Chirp is a suite of Twitter analytics that will help you better understand<br />your audience, which tweets they like, and most importantly, when they are the most active on Twitter.</div>
                        <div className = "flex flex-row items-center">
                            <button className = "transition flex flex-row items-center bg-sky-600 p-3 mr-2 rounded-[4px] hover:opacity-80">
                                <img src = {TwitterWhite} alt = "Twitter Logo" />
                                <div className = "text-white text-sm ml-2">Sign In With Twitter</div>
                            </button>
                            <button className = "text-emerald-700 font-bold">Learn more</button>
                        </div>
                        <div className = "flex flex-row relative mt-4 mb-2">
                            {AVATARS.map((avatar, ind) => <img src = {avatar} key = {ind} className = {ind !== 0 && "absolute"} style = {{ left: 45/2*ind }} alt = "User Avatar" />)}
                        </div>
                        <div className = "text-md text-stone-500">Join <span className = "text-cyan-600 font-bold">195</span> others who have analyzed their followers and scheduled <span className = "text-cyan-600 font-bold">1342</span> tweets!</div>
                    </div>
                    <div className = "flex-1">
                        <img className = "h-fit" src = {HeroDesktop} alt = "Default hero banner" />
                    </div>
                </div>
            </div>
            <div className = "container mx-auto py-10">
                <h1 className = "text-2xl font-bold mt-4 mb-8">Features that help you<br />Tweet smarter.</h1>
                <div className = "grid lg:grid-cols-2 grid-cols-1 gap-3">
                    <FeatureCard emoji = "📈" title = "Analytics">
                        We constantly monitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to engage with your content.
                    </FeatureCard>
                    <FeatureCard emoji = "🤓" title = "Smart Analyzer">
                        We constantly monitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to engage with your content.
                    </FeatureCard>
                    <FeatureCard emoji = "📰" title = "Schedule your Tweets">
                        We constantly monitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to engage with your content.
                    </FeatureCard>
                    <FeatureCard emoji = "☀" title = "Dark Mode">
                        We constantly monitor your audience as it grows -- so you can Tweet when your followers are most likely to be online and ready to engage with your content.
                    </FeatureCard>
                </div>
            </div>
            <div className = "bg-teal-100 py-8">
                <div className = "container mx-auto">
                    <h1 className = "text-2xl font-bold mt-4 mb-8">What our customers say</h1>
                    <div className = "flex md:flex-row flex-col md:flex-nowrap md:overflow-x-scroll md:justify-between items-start">
                        {USERS.map(el => <TestimonialCard key = {el.userName} user = {el} />)}
                    </div>
                </div>
            </div>
            <div className = "flex flex-col items-center py-10">
                <h1 className = "text-2xl font-bold mt-4">One simple price plan.</h1>
                <h3 className = "text-stone-300 mb-8 text-center">Start growing your Twitter account by analyzing your follower's patterns.</h3>
                <div className = "bg-orange-50 border-orange-400 border-2 rounded-md px-5 py-4 flex flex-col mx-4">
                    <div>Monthly</div>
                    <h3 className = "text-lg text-stone-300"><span className = "text-4xl font-bold text-black">$9</span>/mo</h3>
                    <ul className = "py-3 list-none my-2 border-y-2 mb-4">
                        <li className = "flex flex-row mb-3">
                            <img src = {Checkmark} alt = "Checkmark" />
                            <div className = "text-stone-400 ml-2">Unlimited* scheduled tweets and threads.</div>
                        </li>
                        <li className = "flex flex-row mb-3">
                            <img src = {Checkmark} alt = "Checkmark" />
                            <div className = "text-stone-400 ml-2">Schedule up to 3 weeks in advance.</div>
                        </li>
                        <li className = "flex flex-row">
                            <img src = {Checkmark} alt = "Checkmark" />
                            <div className = "text-stone-400 ml-2">Real-time audience analytics tracking up to 5k followers.</div>
                        </li>
                    </ul>
                    <button className = "flex flex-row justify-center items-center bg-sky-400 p-2 rounded-md hover:opacity-80">
                        <img src = {TwitterWhite} alt = "Twitter Logo" />
                        <div className = "text-white text-lg ml-2">Start Trial with Twitter</div>
                    </button>
                </div>
            </div>
            <footer className = "bg-teal-100">
                <div className = "container mx-auto py-3 flex md:flex-row flex-col md:justify-between md:items-center">
                    <h2 className = "font-bold text-blue-600 italic text-3xl">Chirp.</h2>
                    <div className = "flex flex-row items-center md:mt-0 mt-3">
                        <img src = {TwitterBlack} alt = "Twitter black logo" />
                        <button className = "mx-3">Privacy Policy</button>
                        <button>Terms of use</button>
                    </div>
                </div>
            </footer>
        </main>
    )
}
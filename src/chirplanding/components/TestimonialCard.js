import Twitter from '../Assets/Twitter (Blue).svg'
import Heart from '../Assets/Like.svg'

export default function TestimonialCard({ user, hasAdditionalHeight }) {
    const { likes, createdDate, review, userName, twitterHandle, image } = user
    return (
        <div className = "rounded-md bg-white p-4 lg:w-[32%] md:w-1/2 flex-shrink-0 w-full lg:mr-0 md:mr-3 mr-0">
            <div className = "flex flex-row items-center">
                <img src = {image} alt = "Testimonial avatar" />
                <div className = "flex-1 ml-1">
                    <h1 className = "font-bold text-lg">{userName}</h1>
                    <div className = "text-md text-stone-400">{twitterHandle}</div>
                </div>
                <img alt = "Twitter logo" src = {Twitter} />
            </div>
            <div className = "text-stone-700 text-md leading-snug my-5">
                {review}
            </div>
            <div className = "flex flex-row justify-between">
                <div className = "flex flex-row">
                    <img src = {Heart} alt = "Heart icon" className = "transform scale-90" />
                    <div className = "text-stone-400 ml-1">{likes}</div>
                </div>
                <div>{createdDate.toLocaleString()}</div>
            </div>
        </div>
    )
}
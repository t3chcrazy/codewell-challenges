import { useMemo, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar, { Footer } from "../components/Navbar"
import TopHeader from "../components/TopHeader"
import Map from '../Assets/Map.png'
import Comment from "../components/Comment"
import ChatBubble from '../Assets/Chat Bubble.svg'
import { useFirebaseValues } from '../firebase-services'
import { AuthContext } from '../context'
import CommentPlaceholder from '../placeholders/CommentPlaceholder'
import CampPlaceholder from '../placeholders/CampPlaceholder'

export default function CampPage() {
    const { campID } = useParams()
    const { data: { name, image, price, description, submittedBy } = {}, loading: campLoading } = useFirebaseValues(`/camps/${campID}`)
    const { data: comments = {}, loading: commentsLoading } = useFirebaseValues(`/comments/${campID}`)
    const { user } = useContext(AuthContext)
    const isLoggedIn = useMemo(() => !!user, [user])

    return (
        <div>
            <TopHeader />
            <Navbar className = "container mx-auto" />
            <div className = "container mx-auto grid items-start lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
                <div className = "col-span-1 p-10 rounded-md border border-gray-300">
                    <img className = "lg:w-fit w-full" src = {Map} alt = "Map" />
                </div>
                <div className = "lg:col-span-2 col-span-1">
                    <div className = "p-10 rounded-md border border-gray-300">
                        {campLoading?
                        <CampPlaceholder />:
                        <>
                            <img className = "w-fit rounded-md" src = {image} alt = "Camp Splash" />
                            <div className = "flex flex-row justify-between">
                                <h1>{name}</h1>
                                <h3>${price}/night</h3>
                            </div>
                            <section className = "text-stone-600 my-3 leading-snug">
                                {description}
                            </section>
                            <div className = "italic">Submitted by {submittedBy}</div>
                        </>}
                    </div>
                    <div className = "p-10 rounded-md border border-gray-300 mt-4 flex flex-col">
                        <div className = "divide-y">
                            {commentsLoading?
                            <>
                                <CommentPlaceholder />
                                <CommentPlaceholder />
                                <CommentPlaceholder />
                            </>:
                            Object.values(comments).map(comment => <Comment key = {comment?.submittedOn} comment = {comment} />)}
                        </div>
                        <Link className = "lg:self-end" to = {isLoggedIn? `/yelpcamp/addcomment/${campID}`: `/yelpcamp/signin`}>
                            <button className = "blackButton flex flex-row items-center">
                                <img className = "mr-2" src = {ChatBubble} alt = "Chat Bubble" />
                                Leave a review
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer className = "container mx-auto" />
        </div>
    )
}
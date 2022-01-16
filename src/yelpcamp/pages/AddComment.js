import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ref, update, push, child } from 'firebase/database'
import TopHeader from "../components/TopHeader"
import Input from "../components/Input"
import Navbar, { Footer } from "../components/Navbar"
import { AuthContext } from '../context'
import { db } from '../firebase-services'

export default function AddComment() {
    const { user: { email } = {} } = useContext(AuthContext)
    const { campID } = useParams()
    const navigate = useNavigate()

    const submitComment = async e => {
        e.preventDefault()
        try {
            const newComment = {
                comment: e.target.elements.description.value,
                submittedOn: new Date(),
                [campID]: true,
                createdBy: email
            }
            const newCommentID = push(child(ref(db), `comments/${campID}`)).key
            await update(ref(db), {
                [`comments/${campID}/${newCommentID}`]: newComment
            })
            alert("Comment created successfully!")
            navigate(`/yelpcamp/camppage/${campID}`)
        }
        catch (err) {
            console.log("Comment creation error", err)
        }
    }

    return (
        <div className = "flex flex-col lg:h-screen">
            <TopHeader />
            <Navbar className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
            <form onSubmit = {submitComment} className = "lg:mx-auto lg:w-2/5 md:px-16 md:container w-full px-8 flex-1 lg:mt-10">
                <h1 className = "lg:text-3xl md:text-2xl font-bold">Add new comment</h1>
                <Input name = "description" required style = {{ height: 150 }} isTextArea label = "Description" placeholder = "Enter Description" />
                <button type = "submit" className = "blackButton w-full inline-block text-center mt-4">Post Comment</button>
            </form>
            <Footer className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
        </div>
    )
}
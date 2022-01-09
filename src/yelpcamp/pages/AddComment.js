import TopHeader from "../components/TopHeader"
import Input from "../components/Input"
import Navbar, { Footer } from "../components/Navbar"

export default function AddComment() {
    return (
        <div className = "flex flex-col lg:h-screen">
            <TopHeader />
            <Navbar className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
            <div className = "lg:mx-auto lg:w-2/5 md:px-16 md:container w-full px-8 flex-1 lg:mt-10">
                <h1 className = "lg:text-3xl md:text-2xl font-bold">Add new comment</h1>
                <Input style = {{ height: 150 }} cols = "8" isTextArea label = "Description" placeholder = "Enter Description" />
                <buton className = "blackButton w-full inline-block text-center mt-4">Post Comment</buton>
            </div>
            <Footer className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
        </div>
    )
}
import Navbar, { Footer } from "../components/Navbar"
import TopHeader from "../components/TopHeader"
import Input from "../components/Input"

export default function AddCamp() {
    return (
        <div>
            <TopHeader />
            <Navbar className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
            <div className = "lg:mx-auto lg:w-2/5 md:px-16 md:w-2/3 w-full px-8">
                <h1 className = "lg:text-3xl md:text-2xl font-bold">Add new campground</h1>
                <Input label = "Campground Name" placeholder = "Seven Sisters Waterfall" />
                <Input label = "Price" placeholder = "$149" />
                <Input label = "Image" placeholder = "Image" />
                <Input cols = {5} isTextArea label  ="Description" placeholder = "Enter Description" />
                <buton className = "blackButton w-full inline-block text-center">Add Campground</buton>
            </div>
            <Footer className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
        </div>
    )
}
import { useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { ref, push, child, update } from 'firebase/database'
import Navbar, { Footer } from "../components/Navbar"
import TopHeader from "../components/TopHeader"
import Input from "../components/Input"
import { db } from '../firebase-services'
import { AuthContext } from '../context'

const INITIAL = {
    name: "",
    price: "",
    image: "",
    description: ""
}

function reducer(state, action) {
    switch (action.type) {
        case "onchange":
            return { ...state, [action.key]: action.value }
        default:
            return state
    }
}

export default function AddCamp() {
    const [state, dispatch] = useReducer(reducer, INITIAL)
    const { name, price, image, description } = state
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const addCamp = async e => {
        e.preventDefault()
        try {
            const newCamp = {
                name,
                price,
                image,
                description,
                [user.uid]: true,
                submittedBy: user.email
            }
            const newCampKey = push(child(ref(db), 'posts')).key
            await update(ref(db), {
                [`/camps/${newCampKey}`]: newCamp
            })
            alert("Camp successfully created!")
            navigate("/yelpcamp/campgrounds")
        }
        catch (err) {
            console.log("Camp creation error", err)
        }
    }

    const handleChange = name => e => dispatch({ type: "onchange", key: name, value: e.target.value })

    return (
        <div>
            <TopHeader />
            <Navbar className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
            <form onSubmit = {addCamp} className = "lg:mx-auto lg:w-2/5 md:px-16 md:w-2/3 w-full px-8">
                <h1 className = "lg:text-3xl md:text-2xl font-bold">Add new campground</h1>
                <Input autoFocus value = {name} onChange = {handleChange("name")} required label = "Campground Name" placeholder = "Seven Sisters Waterfall" />
                <Input value = {price} onChange = {handleChange("price")} required label = "Price" placeholder = "$149" />
                <Input value = {image} onChange = {handleChange("image")} required label = "Image" placeholder = "Image" />
                <Input value = {description} onChange = {handleChange("description")} required cols = {5} isTextArea label  ="Description" placeholder = "Enter Description" />
                <button type = "submit" className = "blackButton w-full inline-block text-center">Add Campground</button>
            </form>
            <Footer className = "lg:w-4/5 lg:mx-auto md:px-16 md:container w-full px-8" />
        </div>
    )
}
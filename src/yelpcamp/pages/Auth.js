import { useState, useMemo } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { set, ref } from 'firebase/database'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../Assets/Logo.svg'
import Input from '../components/Input'
import { auth, db } from '../firebase-services'
import Avatar from '../Assets/User Testimonial.svg'

export default function AuthScreen() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { pathname } = useLocation()
    const slug = useMemo(() => {
        const slug = pathname.split("/")
        return slug[slug.length-1]
    }, [pathname])
    const isSignIn = useMemo(() => slug === "signin", [slug])
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            setError(prev => !!prev? "": prev)
            setLoading(prev => !prev? true: prev)
            if (slug === "signin") {
                const result = await signInWithEmailAndPassword(auth, name, password)
                console.log("Result", result)
                navigate("/yelpcamp/campgrounds")
            }
            else {
                const result = await createUserWithEmailAndPassword(auth, name, password)
                await set(ref(db, `users/${result.user.uid}`), {
                    email: result.user.email
                })
                navigate("/yelpcamp/campgrounds")
            }
        }
        catch (err) {
            let finalErrorMessage = ""
            switch (err?.code) {
                case "auth/user-not-found":
                    finalErrorMessage = "User not found. Please signup"
                    break
                case "auth/email-already-in-use":
                    finalErrorMessage = "Email already exists. Please login"
                    break
                case "auth/wrong-password":
                    finalErrorMessage = "Wrong password. Please try again"
                    break
                case "auth/invalid-app-credential":
                    finalErrorMessage = "API credentials don't seem valid anymore. Please contact abhishekprashant09@gmail.com"
                    break
                case "auth/too-many-requests":
                    finalErrorMessage = "Too many requests. Please try again after sometime"
                    break
                default:
                    finalErrorMessage = "Something went wrong. Please try again"
            }
            setError(finalErrorMessage)
        }
        finally {
            setLoading(false)
        }
    }

    const handleName = e => setName(e.target.value)

    const handlePassword = e => setPassword(e.target.value)

    if (slug !== "signup" && slug !== "signin") {
        return <Navigate to = "/yelpcamp" />
    }
    
    return (
        <div className = "flex lg:flex-row flex-col lg:h-screen h-auto">
            <div className = "lg:pl-24 lg:pr-36 px-12 flex flex-col flex-1 py-8">
                <div className = "flex flex-row justify-between items-center lg:mb-0 mb-3">
                    <img className = "w-fit" src = {Logo} alt = "Yelpcamp logo" />
                    <Link to = "/yelpcamp/campgrounds">
                        <button>Back to campgrounds</button>
                    </Link>
                </div>
                <form onSubmit = {handleSubmit} className = "flex-1 flex flex-col justify-center text-stone-700">
                    <h1 className = "text-black leading-tight lg:text-5xl md:text-3xl text-xl font-bold">Start exploring camps from all around the world.</h1>
                    <Input required pattern = "[^@\s]+@[^@\s]+\.[^@\s]+" type = "email" label = "User Name" value = {name} onChange = {handleName} placeholder = "john_doe@gmail.com" />
                    <Input required type = "password" label = "Password" value = {password} onChange = {handlePassword} placeholder = "Enter your password" />
                    <div className = {`text-red-500 text-md my-2 transition ${!!error? "translate-x-0 opacity-100": "translate-x-10 opacity-0"}`}>{error}</div>
                    <button type = "submit" disabled = {loading} className = {`blackButton my-3 ${loading && "bg-gray-600"}`}>{loading? "Loading": isSignIn? "Login": "Create an account"}</button>
                    <div className = "text-stone-600 text-md font-medium">
                        {isSignIn? "Not a user yet?": "Already a user?"} <Link className = "text-sky-500 bg-transparent underline" to = {`${isSignIn? "/yelpcamp/signup": "/yelpcamp/signin"}`}>{isSignIn? "Create an account": "Sign In"}</Link>
                    </div>
                </form>
            </div>
            <div className = "bg-lightYellow lg:flex-1 flex flex-col justify-center items-center lg:py-0 py-4 lg:px-0 px-6">
                <div className = "lg:w-1/2 w-3/4">
                    <h1 className = "font-bold text-2xl">YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.</h1>
                    <div className = "flex flex-row items-center mt-3">
                        <img className = "mr-2" src = {Avatar} alt = "Profile avatar" />
                        <div>
                            <h4 className = "font-bold">May Andrews</h4>
                            <div className = "text-stone-500">Professional Hiker</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
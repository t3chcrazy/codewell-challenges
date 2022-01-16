import { useNavigate } from 'react-router-dom'
import { useMemo, useContext, useState } from 'react'
import Logo from '../Assets/Logo.svg'
import Menu from '../Assets/Hamburger Menu.svg'
import { auth } from '../firebase-services'
import { AuthContext } from '../context'

export default function Navbar({ className }) {
    const [visible, setVisible] = useState(false)
    const { user } = useContext(AuthContext)
    const { isLoggedIn, name } = useMemo(() => ({ 
        isLoggedIn: !!user,
        name: user?.email
     }), [user])
    const navigate = useNavigate()

    const logout = async () => {
        try {
            await auth.signOut()
            navigate("/yelpcamp/signin")
        }
        catch (err) {

        }
    }

    const goToRoute = route => {
        navigate(`/yelpcamp/${route}`)
    }

    return (
        <nav className = {`flex flex-row justify-between items-center my-4 ${className}`}>
            <div className = "flex flex-row items-center">
                <img className = "w-fit mr-2" src = {Logo} alt = "YelpCamp Logo" />
                <button onClick = {() => goToRoute("/")} className = "bg-transparent text-stone-600">Home</button>
            </div>
            <div className = "lg:hidden block relative">
                <button onClick = {() => setVisible(prev => !prev)} className = "lg:hidden block p-2 rounded-md border border-black">
                    <img src = {Menu} alt = "Hamburger Menu" />
                </button>
                {visible && 
                <ul className = "w-28 list-none lg:hidden block p-2 rounded-md border border-gray-500 absolute top-full left-1/2 -translate-x-2/3 shadow-md bg-white">
                    {isLoggedIn?
                    <>
                        <div className = "mb-2 bg-transparent text-stone-600">{name}</div>
                        <button onClick = {logout} className = "bg-transparent text-stone-600 ml-2">Logout</button>
                    </>:
                    <>
                        <button onClick = {() => goToRoute("signin")} className = "block w-full mb-2 bg-transparent text-stone-600">Login</button>
                        <button onClick = {() => goToRoute("signup")} className = "block w-full bg-transparent text-stone-600">Create an account</button>
                    </>}
                </ul>}
            </div>
            <div className = "lg:flex hidden flex-row items-center">
                {isLoggedIn?
                <>
                    <div className = "bg-transparent text-stone-600">{name}</div>
                    <button onClick = {logout} className = "bg-transparent text-stone-600 ml-2">Logout</button>
                </>:
                <>
                    <button onClick = {() => goToRoute("signin")} className = "bg-transparent text-stone-600">Login</button>
                    <button onClick = {() => goToRoute("signup")} className = "blackButton ml-2">Create an account</button>
                </>}
            </div>
        </nav>
    )
}

export const Footer = ({ className }) => {
    return (
        <footer className = {`py-4 ${className}`}>
            <img className = "w-fit" src = {Logo} alt = "YelpCamp Logo" />
        </footer>
    )
}
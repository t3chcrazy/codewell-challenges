import Logo from '../Assets/Logo.svg'

export default function Navbar({ className }) {
    return (
        <nav className = {`flex flex-row justify-between items-center my-4 ${className}`}>
            <div className = "flex flex-row items-center">
                <img className = "w-fit mr-2" src = {Logo} alt = "YelpCamp Logo" />
                <button className = "bg-transparent text-stone-600">Home</button>
            </div>
            <div className = "flex flex-row items-center">
                <button className = "bg-transparent text-stone-600">Login</button>
                <button className = "blackButton ml-2">Create an account</button>
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
import Menu from './Assets/Hamburger Menu.svg'
export default function NavMenu() {

    const handleClick = () => window.location.replace("https://www.linkedin.com/in/abhishek-prashant-92b152a9/")

    return (
        <nav className = "container flex flex-row justify-between items-center mx-auto py-8">
            <h3 className = "text-white text-xl font-prata">Johnathan Spectre</h3>
            <ul className = {`list-none  md:flex-row flex-col md:flex hidden right-0 top-0 text-slate-200`}>
                <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">Articles</li>
                <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">Chats</li>
                <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">Awards</li>
                <li className = "cursor-pointer transition-opacity mx-2 hover:opacity-90">About</li>
            </ul>
            <button onClick = {handleClick} className = "bg-yellow-400 px-3 py-2 md:block hidden text-gray-900">Get in touch</button>
            <button className = "md:hidden block"><img src = {Menu} alt = "Hamburger Menu" /></button>
        </nav>
    )
}
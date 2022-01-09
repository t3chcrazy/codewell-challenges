import { useRef } from 'react'
import Close from '../Assets/Close.svg'

export default function TopHeader() {
    const ctaRef = useRef()

    const handleClose = () => ctaRef.current.classList.add("hidden")

    return (
        <div ref = {ctaRef} className = "bg-black text-center py-2 text-white">
            This project was made by <a rel = "noreferrer" target = "_blank" href = "https://www.linkedin.com/in/abhishek-prashant-92b152a9/" className = "text-sky-600">Abhishek Prashant</a> and designed by <a href = "https://codewell.cc" className = "text-sky-600">Codewell</a><button className = "bg-transparent md:ml-4 ml-2" onClick = {handleClose}><img src = {Close} alt = "Close Button" /></button>
        </div>
    )
}
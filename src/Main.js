import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div className = "flex flex-col p-10">
            <h1 className = "text-3xl font-bold mb-6">Codewell projects</h1>
            <Link to = "/dev-portfolio">
                Dev portfolio challenge
            </Link>
            <Link to = "/yelpcamp">
                Yelpcamp
            </Link>
            <Link to = "/chirp-landing">
                Chirp Landing
            </Link>
        </div>
    )
}
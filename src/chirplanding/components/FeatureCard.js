export default function FeatureCard({ emoji, title, children }) {
    return (
        <div className = "border border-gray-200 rounded-md px-3 py-4">
            <h1>{emoji}</h1>
            <h1 className = "font-bold text-lg mt-2 mb-3">{title}</h1>
            <div className = "text-gray-600">
                {children}
            </div>
        </div>
    )
}
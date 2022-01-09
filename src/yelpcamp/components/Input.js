export default function Input({ isTextArea, label, ...props }) {
    return (
        <div className = "my-3">
            <div className = "mb-2 text-gray-800 text-lg">{label}</div>
            {isTextArea?
            <textarea className = "outline-none w-full rounded-md py-3 px-4 bg-stone-100 transition border-1 border-transparent focus:border-stone-600" {...props}></textarea>:
            <input className = "outline-none w-full rounded-md py-3 px-4 bg-stone-100 transition border-1 border-transparent focus:border-stone-600" {...props} />}
        </div>
    )
}
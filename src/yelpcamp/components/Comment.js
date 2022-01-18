import { useMemo } from "react"

export default function Comment({ comment }) {
    const { comment: review, createdBy, submittedOn } = comment
    const formattedDate = useMemo(() => new Date(Date.parse(submittedOn)).toDateString(), [submittedOn])
    
    return (
        <div className = "py-6">
            <div className = "flex flex-row justify-between">
                <h1 className = "font-bold font-lg text-black">{createdBy}</h1>
                <div className = "text-gray-400 font-lg">{formattedDate}</div>
            </div>
            <div className = "mt-3">
                {review}
            </div>
        </div>
    )
}
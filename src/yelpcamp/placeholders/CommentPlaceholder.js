import ContentLoader from "react-content-loader"

export default function CommentPlaceholder() {
    return (
        <ContentLoader viewBox = "0 0 100 40">
            <rect x = "0" y = "0" width = "20" height = "4" />
            <rect x = "85" y = "0" width = "15" height = "4" />
            <rect x = "0" y = "15" width = "100" height = "2" />
            <rect x = "0" y = "20" width = "80" height = "2" />
        </ContentLoader>
    )
}
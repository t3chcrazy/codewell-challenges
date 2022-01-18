import ContentLoader from "react-content-loader"

export default function CampPlaceholder() {
    return (
        <ContentLoader viewBox = "0 0 100 90">
            <rect x = "0" y = "0" width = "100" height = "60" />
            <rect x = "0" y = "65" width = "20" height = "5" />
            <rect x = "85" y = "65" width = "15" height = "5" />
            <rect x = "0" y = "75" width = "90" height = "5" />
            <rect x = "0" y = "85" width = "85" height = "5" />
        </ContentLoader>
    )
}
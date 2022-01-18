import ContentLoader from "react-content-loader"

export default function NavRightPlaceholder() {
    return (
        <ContentLoader width = "60" height = "20" viewBox = "0 0 60 20">
            <rect x = "0" y = "0" r = "10" width = "40" height = "20" />
            <rect x = "45" y = "0" r = "10" width = "15" height = "20" />
        </ContentLoader>
    )
}
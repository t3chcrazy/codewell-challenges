import ContentLoader from "react-content-loader"

export default function CampCardSkeleton() {
    return (
        <ContentLoader viewBox = "0 0 100 80" backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb">
            <rect x = "0" y = "0" rx = "2" ry = "2" width = "100" height = "2" />
            <rect x = "98" y = "0" rx = "2" ry = "2" width = "2" height = "100" />
            <rect x = "0" y = "78" rx = "2" ry = "2" width = "100" height = "2" />
            <rect x = "0" y = "0" rx = "2" ry = "2" width = "2" height = "80" />
            <rect x = "4" y = "4" r = "2" width = "92" height = "40" />
            <rect x = "4" y = "50" r = "4" width = "70" height = "3" />
            <rect x = "4" y = "60" r = "4" width = "80" height = "3" />
            <rect x = "4" y = "67" r = "4" width = "75" height = "3" />
        </ContentLoader>
    )
}
import './firebase-services'
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from '../Loader'
import Landing from './pages/Landing'

const Auth = lazy(() => import("./pages/Auth"))
const Campgrounds = lazy(() => import("./pages/Campgrounds"))
const NotFound = lazy(() => import("../404"))
const AddCamp = lazy(() => import("./pages/AddCamp"))
const AddComment = lazy(() => import("./pages/AddComment"))
const CampPage = lazy(() => import("./pages/CampPage"))

export default function YelpCamp() {
    return (
        <Routes>
            <Route index element = {<Suspense fallback = {<Loader />}><Landing /></Suspense>} />
            <Route path = "/signin" element = {<Suspense fallback = {<Loader />}><Auth /></Suspense>} />
            <Route path = "/signup" element = {<Suspense fallback = {<Loader />}><Auth /></Suspense>} />
            <Route path = "/campgrounds" element = {<Suspense fallback = {<Loader />}><Campgrounds /></Suspense>} />
            <Route path = "/addcamp" element = {<Suspense fallback = {<Loader />}><AddCamp /></Suspense>} />
            <Route path = "/addcomment/:campID" element = {<Suspense fallback = {<Loader />}><AddComment /></Suspense>} />
            <Route path = "/camppage/:campID" element = {<Suspense fallback = {<Loader />}><CampPage /></Suspense>} />
            <Route path = "*" element = {<Suspense fallback = {<Loader />}><NotFound /></Suspense>} />
            {/* <Route path = "/signup" element = {<Suspense fallback = {<Loader />}><Auth /></Suspense>} /> */}
        </Routes>
    )
}
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from './Loader';

const DevPortfolio = lazy(() => import('./devportfolio'))
const Main = lazy(() => import('./Main'))
const YelpCamp = lazy(() => import('./yelpcamp'))
const ChirpLanding = lazy(() => import('./chirplanding'))

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Suspense fallback = {<Loader />}><Main /></Suspense>} />
      <Route path = "/dev-portfolio" element = {<Suspense fallback = {<Loader />}><DevPortfolio /></Suspense>} />
      <Route path = "yelpcamp/*" element = {<Suspense fallback = {<Loader />}><YelpCamp /></Suspense>} />
      <Route path = "/chirp-landing" element = {<Suspense fallback = {<Loader />}><ChirpLanding /></Suspense>} />
    </Routes>
  );
}

export default App;

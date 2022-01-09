import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from './Loader';

const DevPortfolio = lazy(() => import('./devportfolio'))
const Main = lazy(() => import('./Main'))
const YelpCamp = lazy(() => import('./yelpcamp'))

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Suspense fallback = {<Loader />}><Main /></Suspense>} />
      <Route path = "/dev-portfolio" element = {<Suspense fallback = {<Loader />}><DevPortfolio /></Suspense>} />
      <Route path = "yelpcamp/*" element = {<Suspense fallback = {<Loader />}><YelpCamp /></Suspense>} />
    </Routes>
  );
}

export default App;

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutMain from './Layout/LayoutMain'
import Home from './Pages/Home'
import Cars from './Pages/Cars'
import Showroom from './Pages/Showroom'
import About from './Pages/About'
import Help from './Pages/Help'
import Specs from './Pages/Specs'
import Buy from './Pages/Buy'
import Order from './Pages/Order'


function App() {
  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutMain/>}>
        <Route index element={<Home/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/showroom' element={<Showroom/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/specs' element={<Specs/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/ordered' element={<Order/>}/>
       </Route> 
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App

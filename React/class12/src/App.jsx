import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>}>
        <Route path='/courses' element={<AllCourses/>} />
        <Route path='/courses/kodr' element={<Kodr/>} />
        <Route path='/courses/kodex' element={<Kodex/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App


// import React from 'react'
// import Navbar from './components/Navbar'
// import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Courses from './pages/Courses'
// import Kodr from './pages/Kodr'
// import Kodex from './pages/Kodex'
// import AllCourses from './pages/AllCourses'
// import Layout from './pages/Layout'

// const App = () => {

//   const allRoutes = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />
//         },
//         {
//           path: 'about',
//           element: <About />
//         },
//         {
//           path: 'courses',
//           element: <Courses />,
//           children: [
//             {
//               path: 'kodex',
//               element: <Kodex />
//             },
//             {
//               path: 'kodr',
//               element: <Kodr />
//             },
//             {
//               index:true,
//               element:<AllCourses />
//             }
//           ]
//         }
//       ]
//     }
//   ])

//   return (<RouterProvider router={allRoutes} />

//   )
// }

// export default App
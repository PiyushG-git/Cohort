import {BrowserRouter,Route,Routes} from 'react-router'
import Login from './features/auth/Pages/Login'
import Register from './features/auth/Pages/Register'

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Welcome to Home</h1>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes

import{BrowserRouter,Routes,Route} from 'react-router-dom'

import AboutPage from '../about/AboutPage'
import Contactpage from '../contact/Contactpage'
import Homepage from '../home/Homepage'
import PageNotFound from '../pageNotFound/PageNotFound'
import Header from '../../core/json/reusuable-components/Header'
import LoginForm from '../loginform/LoginForm'

export default function RoutingOutlet() {

    return <div>

        <BrowserRouter>
        <Header/>
    
        
        <Routes> 
            <Route index element ={<AboutPage/>} />  
            <Route path= "about" element ={<AboutPage/>} />  
            <Route path= "contact" element ={<Contactpage/>} />  
            <Route path= "home" element={<Homepage/>} />  
            <Route path= "login" element={<LoginForm/>} />   
            <Route path="*" element={<PageNotFound/>} />
        </Routes>        
        </BrowserRouter>
    </div>
}
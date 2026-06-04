
import{BrowserRouter,Routes,Route} from 'react-router'

import AboutPage from '../about/AboutPage'
import Contactpage from '../contact/Contactpage'
import PageNotFound from '../pageNotFound/PageNotFound'
import Header from '../../core/json/reusuable-components/Header'

export default function RoutingOutlet() {

    return <div>

        <BrowserRouter>
        <Header/>
        
        <Routes> 
            <Route index element ={<AboutPage/>} />  
            <Route path= "about" element ={<AboutPage/>} />  
            <Route path= "contact" element ={<Contactpage/>} />  
            <Route path="*" element={<PageNotFound/>} />
        </Routes>        
        </BrowserRouter>
    </div>
}
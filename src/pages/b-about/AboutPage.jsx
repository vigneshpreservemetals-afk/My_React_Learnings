
import Header from "../../reusuable_Components/header/Header"
import Footer from "../../reusuable_Components/footer/Footer"
import customerList from "../../reusuable_Components/CustomerData/CustomerList"


export default function AboutPage() {


    return <div>
        <Header/>

        <div>
            Am About Page 
            <CustomerList/>
        </div>

        <Footer/>
    </div>
}

import Header from "../../reusuable_Components/header/Header"
import Footer from "../../reusuable_Components/footer/Footer"
import customerList from "../../reusuable_Components/customer_data/customerList"


export default function AboutPage() {


    return <div>
        <Header/>

        <div>
            Am About Page 
            <customerList/>
        </div>

        <Footer/>
    </div>
}
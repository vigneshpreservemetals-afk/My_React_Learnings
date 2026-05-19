
import Header from "../../reusuable_Components/header/Header";
import Footer from "../../reusuable_Components/footer/Footer";
import CustomerList from "../../reusuable_Components/CustomerData/CustomerList";


export default function HomePage() {


    return <div>
        <Header/>

        <div>
            Am a Home Page
            <CustomerList/>
        </div>

        <Footer/>
    </div>
}
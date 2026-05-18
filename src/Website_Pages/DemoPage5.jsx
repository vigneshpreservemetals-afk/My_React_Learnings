
export default function DemoPage5() {

const car = {
Brand: "Skoda",
Model:   "Slavia",
Price: "1500000",
Location: "Chennai"
}

return(

    <div className="VehicleInformation"> 

    <div>
    <h3> Vehicle Information </h3>
    <p> CarBrand: {car?.Brand} </p>
    <p> CarModel: {car?.Model} </p>
    <p> CarPrice: {car?.Price} </p>
    <p> CarLocation: {car?.Location} </p>
    </div>

    </div>
    
)
}
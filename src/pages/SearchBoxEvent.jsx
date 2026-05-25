import { useState } from "react";

export default function SearchBoxEvent() {

    const BikeData = ["RoyalEnfield","Harley","TVS","Suzuki","KTM"]

    const[Bike,SetBike] = useState(BikeData)

    const[SearchBox,SetSearchbox] = useState("")

    const handleSearch = () => {

        if (SearchBox.length === 0) {
            return SetBike(BikeData)
    }
        
        const BikeFilter = BikeData.filter(
        (value) => value.toLowerCase().includes(SearchBox.toLowerCase())  
        )

        SetBike(BikeFilter)
        
}

return <div>

    <input type="text" onChange={(event) => SetSearchbox(event?.target?.value)}
    value={SearchBox} />
 
    <div>
        <button onClick={handleSearch}> Search </button>
    </div>

    <div>
        {Bike.map((value,index) => <p key={index}> {value} </p>)}
    </div>

</div>

}
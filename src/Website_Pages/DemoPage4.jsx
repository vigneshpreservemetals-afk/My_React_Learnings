

export default function DemoPage4() {

    const cars = ["Swift","Baleno","Dzire","Brezza"];
    const isCarAvailable = true;

    return(

        <div>
            {
                isCarAvailable? cars.map((value,index) => <p key={index}> {value} </p>)
                : 
                "Cars are unavailable at the moment"
            }
        </div>
    )
}
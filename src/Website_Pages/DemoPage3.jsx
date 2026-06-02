

export default function DemoPage3() {

    const IsProductAvailable = true;
    const Products = ["skoda","volkswagen","audi","maruti"];


    return(
        <div>
            <p> {IsProductAvailable ? Products : "Cars are not in Stock"}</p>
        </div>
    )
}
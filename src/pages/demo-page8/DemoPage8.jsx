import React from "react";

import { useState } from "react";

export default function DemoPage8() {

    const [fruitsList, SetfruitsList] = useState(["Apple", "Mango", "Lichi", "Grapes", "Banana"])

    const handleDelete = (fruitIndex) => {

        const UpdatedFruitlist = fruitsList.filter((value, index) => index != fruitIndex)

    SetfruitsList(UpdatedFruitlist)

}

return <div>

    <h3> Fruits List </h3>

    {fruitsList.map((value, index) => {

    return <React.Fragment key={index}>
            <div> <span> {value} </span>
                <button onClick={()=> handleDelete(index)}> X </button>
            </div>
        </React.Fragment>
    })}

    <button onClick={() => SetfruitsList([...fruitsList, "guava"])}> Add Fruits  </button>
    <hr />

    
</div>
}

 
 import { useState } from "react";


import states from'../core/json/stateList.json'
import cities from '../core/json/cityList.json'

export default function SelectBoxEvent() {

const[stateList,setStateList] = useState(states)

const[cityList,setcityList]   = useState(cities)

const[selectedState,setselectedState] = useState('TN')


return <div>

<h1> States </h1>

<select onChange={(event) => setselectedState(event.target.value)}>

{stateList.map((value,index)=> {

return <option value={value?.stateCode}> {value?.stateName} </option>

})}
</select>

<p> your selected State is : {selectedState} </p>

<h1> City </h1>

<select>

{cityList.map((value,index)=> {
return (selectedState == value.stateCode) && <option> {value.city} </option>
})
}
</select>


</div>

}
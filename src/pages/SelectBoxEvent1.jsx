 
import { useState } from "react";


import Meals from'../core/json/MealsList.json'
import Menu from '../core/json/MenuList.json'

export default function SelectBoxEvent1() {

const[MealsList,setMealsList] = useState(Meals)

const[MenuList,setMenuList]   = useState(Menu)

const[selectedMeals,setselectedMeals] = useState('VG')


return <div>

<h1> Meals List </h1>

<select onChange={(event) => setselectedMeals(event.target.value)}>

{MealsList.map((value,index)=> {

return <option key={index}value={value?.MealsCode}> {value?.MealsName} </option>

})}
</select>

<p> your selected Meals is : {selectedMeals} </p>

<h1> Menu List </h1>

<select>

{MenuList.map((value,index)=> {
return (selectedMeals === value.MealsCode) && <option> {value.Menu} </option>
})
}
</select>


</div>

}
 
import { useState } from "react";

import Meals from '../core/json/MealsList.json'
import Menu from '../core/json/MenuList.json'

export default function SelectBoxEvent1() {

    const[MealsList,setMealsList] = useState(Meals)
    const[MenuList, setMenuList]  = useState(Menu)

    const[SelectedMeal, setSelectedMeal] = useState('VG')

    return <div>
    
    <div> 
        <h3> Meals List </h3>

        <select onChange={((event)=> setSelectedMeal(event.target.value))}>

            {MealsList.map((value,index) => {
                return <option value={value?.MealsCode}> {value?.MealsName} </option>
            })}
            
        </select>

        <p> your Selected Meals is : {SelectedMeal} </p>

        <h3> List of Menu Items </h3>

        <select> 
            {MenuList.map((value,index) => {
                return (SelectedMeal === value.MealsCode) && <option> {value.Menu} </option>
            } )}
        </select>

    </div>
    </div>


}
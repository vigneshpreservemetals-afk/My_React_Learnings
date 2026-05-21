
export default function B_Child(
    {
        clickMe,
        clickedBy,
        addCount
    }
){

    return <div> 
        <button onClick={clickMe}> Click Me </button>
        <button onClick={()=>clickedBy("Vignesh")}> Clicked By </button>
        <button onClick={() =>addCount(1)}> Add Count</button>
    </div>

}


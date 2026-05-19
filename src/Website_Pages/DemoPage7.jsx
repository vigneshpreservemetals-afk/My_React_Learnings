

export default function DemoPage7() {

  const handleClick = () => {

    console.log("Button is Clicked")
    console.log("Clicked by Vignesh")
    console.log("He is an UX Designer")
  }

  return <div>

    <button onClick={handleClick} > Primary Button </button>
    <button onClick={() => console.log("Button is Clicked by Kiruba")}> Secondary Button </button>
    
  </div>
  

}
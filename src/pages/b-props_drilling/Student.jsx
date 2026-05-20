

export default function Students() {
    

    const studentName     = "Vignesh"
    const studentAge      = 31
    const studentMedium   = "CBSE"
    const studentLocation = "Velachery"
    const studentSkillSet = [

        { 
         year   : 2020,
         course :"Commerce",
         grade  : "A - grade"   
        },

        {
         year   : 2021,
         course : "Maths",
         grade  : "B - grade"
        }, 

        {
         year   : 2022,
         course : "Maths",
         grade  : "B - grade"
        } 
    ]


return <div>

    <h3> Welcome to DAV Matriculation School </h3>

    <h5> Top Performer Student </h5>

    <h5> The Student Name is : {studentName} </h5>

    <h5> The Student Medium is : {studentMedium} </h5>

    <AddionalInformation

    studentAge= {studentAge}
    studentLocation ={velachery}
    studentSkillSet = {studentSkillSet}
    />

    
</div>

}
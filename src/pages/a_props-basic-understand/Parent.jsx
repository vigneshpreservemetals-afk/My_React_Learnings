import Child from "./Child";

export default function Parent() {
    const studentName = "Vignesh";
    const studentAge = 6;
    const BoardOfMedium = "CBSE";
    const studentLocation = "Velachery";
    const studentSkillset = [
        "Grammar and vocabulary",
        "Mathemetics",
        "Drawing",
        "Craft",
    ];
    const AcademicResult = {
        Quaterly: "FirstGrade",
        HalfYearly: "SecondGrade",
        Annual: "FirstGrade",
    };

    return (
        <div>
            <h3> Am a Parent Component </h3>
            <hr />
            <Child
                studentName={studentName}
                studentAge={studentAge}
                BoardOfMedium={BoardOfMedium}
                studentLocation={studentLocation}
                studentSkillset={studentSkillset}
                AcademicResult={AcademicResult}

            />
        </div>
    );
}

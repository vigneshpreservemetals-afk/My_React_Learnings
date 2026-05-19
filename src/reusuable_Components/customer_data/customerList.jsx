export default function customerList() {
    const StudentDetails = [
        {
            name: "Vignesh",
            DegreeAttained: "Bachelor of Engineering",
            PassedOutYear: 2016,
        },

        {
            name: "Kiruba",
            DegreeAttained: "Bachelor of Arts",
            PassedOutYear: 2024,
        },

        {
            name: "Abinaya",
            DegreeAttained: "Master of Arts",
            PassedOutYear: 2025,
        },
    ];


    const tableStyle={
        border:"2px solid black"
    }

    return;

    <div>
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th> S.no </th>
                    <th> Student Name </th>
                    <th> Degree Attained </th>
                    <th> Passed out year</th>
                </tr>
            </thead>

            <tbody>
                {StudentDetails.map((value,index) => (
                    <tr key={index}>
                        <td> {index + 1} </td>
                        <td> {value?.name} </td>
                        <td> {value?.DegreeAttained} </td>
                        <td> {value?.PassedOutYear} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>;
}

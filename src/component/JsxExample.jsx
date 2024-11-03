export default function User({subject}){
    const teacherName = "Toan";
    const lsStudentName = ["Ngọc Hà", "Nguyên Khang", "Quốc Huy "]
    return <section>
        <h3>Teacher name: {teacherName}</h3>
        <h3>Subject: {subject}</h3>
        <table>
            <thead>
            <tr>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>

            {lsStudentName.map((item)=>(
                    <tr>
                        <td>{item}</td>
                    </tr>
                        ))}
            </tbody>
        </table>
    </section>
}
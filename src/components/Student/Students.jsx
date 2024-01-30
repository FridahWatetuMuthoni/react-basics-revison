import Student from "./Student";

function Students() {
  const data = [
    {
      id: 1,
      username: "Fridah",
      age: 30,
      is_student: true,
    },
    {
      id: 2,
      username: "Patrick",
      age: 42,
      is_student: false,
    },
    {
      id: 3,
      username: "Squidward",
      age: 50,
      is_student: false,
    },
    {
      id: 4,
      username: "Sandy",
      age: 27,
      is_student: true,
    },
  ];

  return data.map((student) => {
    return data.length > 0 && <Student key={student.id} student={student} />;
  });
}

export default Students;

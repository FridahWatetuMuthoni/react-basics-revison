import "./Student.css";
import PropTypes from "prop-types";

function Student(props) {
  const { username, age, is_student } = props.student;
  return (
    <div className="student">
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <p>Student: {is_student ? "Is a Student" : "Is not a student"} </p>
    </div>
  );
}

Student.propTypes = {
  student: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      age: PropTypes.number,
      is_student: PropTypes.bool,
    })
  ),
};

// Student.propTypes = {
//   username: PropTypes.string,
//   age: PropTypes.number,
//   is_student: PropTypes.bool,
//   student: PropTypes.object,
// };

Student.defaultProps = {
  username: "Guest",
  age: 0,
  is_student: false,
};

export default Student;

import PropTypes from "prop-types";

function Greetings(props) {
  const { isLoggedIn, username } = props;

  return isLoggedIn ? (
    <p>Welcome back {username}</p>
  ) : (
    <p> You are not logged in </p>
  );
}

export default Greetings;

Greetings.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

Greetings.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

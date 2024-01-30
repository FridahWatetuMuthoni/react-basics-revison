import image from "../../assets/image-jeanette.jpg";

function Profile() {
  const handleClick = (e) => {
    e.target.style.display = "none";
    console.log("ouuch");
  };

  return (
    <>
      <img onClick={(e) => handleClick(e)} src={image} alt="profile image" />
    </>
  );
}

export default Profile;

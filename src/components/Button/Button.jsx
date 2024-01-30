function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const handleClick = (e) => {
    e.target.textContent = "Ouch 😫";
    console.log("button clicked");
  };

  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me`);
  };

  return (
    <>
      <button style={styles} onClick={handleClick}>
        Click Me 😀
      </button>
      <br />
      <br />
      <button style={styles} onClick={() => handleClick2("Yasmin")}>
        Try me😜
      </button>
    </>
  );
}

export default Button;

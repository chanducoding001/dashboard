import React, { useState } from "react";
import "../styles.css";

const ReUseButton = (props) => {
  const { btnText, btnStyles, handleBtn, icon } = props;
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    backgroundColor: isHovered
      ? "rgba(0,0,255,0.3)"
      : btnStyles?.backgroundColor || "whitesmoke",
    color: isHovered ? "blue" : btnStyles?.color || "black",
    fontWeight: 500,
    fontSize: "0.875rem",
    height: btnStyles?.height || "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    border: "none",
    borderRadius: btnStyles?.borderRadius || "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  const iconStyles = {
    marginRight: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <button
      onClick={handleBtn}
      style={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <span style={iconStyles}>{icon}</span>}
      {btnText}
    </button>
  );
};

export default ReUseButton;

import React from "react";

const styles = {
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        width: "100%",
        gap : "10px",
    },
    cardImage: {
        width: "80%",
        height: "auto",
    },
};

const Card = ({ id, flag, name }) => {
  return (
    <div style={styles.cardContainer}>
      <img style={styles.cardImage} src={flag} alt={`Flag of ${name}`} />
      <h3>{name}</h3>
    </div>
  );
};
export default Card;

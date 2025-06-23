

import React, { useEffect, useState } from "react";
import Card from "./Components/Card";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    marginTop: "30px",
  },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid black",
    width: "12%",
    padding: "10px",
  },
};

const App = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
      const data = await response.json();
      const dataWithIds = data.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      setCountries(dataWithIds);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div style={styles.container}>
      {countries.map((country) => (
        <div key={country.id} style={styles.cardWrapper}>
          <Card flag={country.flag} name={country.name} />
        </div>
      ))}
    </div>
  );
};

export default App;


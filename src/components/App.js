import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";
import FilterButton from "./FilterButton";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [filterGoodDogs, setFilterGoodDogs] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((response) => response.json())
      .then((data) => setDogs(data));
  }, []);

  const toggleGoodness = () => {
    if (selectedDog) {
      const updatedDog = { ...selectedDog, isGoodDog: !selectedDog.isGoodDog };
      setSelectedDog(updatedDog);

      fetch(`http://localhost:3001/pups/${selectedDog.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDog),
      });
    }
  };

  return (
    <div className="App">
      <FilterButton
        filterGoodDogs={filterGoodDogs}
        setFilterGoodDogs={setFilterGoodDogs}
      />
      <DogBar
        dogs={dogs}
        filterGoodDogs={filterGoodDogs}
        setSelectedDog={setSelectedDog}
      />
      <DogInfo selectedDog={selectedDog} toggleGoodness={toggleGoodness} />
    </div>
  );
}

export default App;
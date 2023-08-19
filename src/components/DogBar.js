import React from "react";

function DogBar({ dogs, filterGoodDogs, setSelectedDog }) {
  const dogsToDisplay = filterGoodDogs ? dogs.filter(dog => dog.isGoodDog) : dogs;

  return (
    <div id="dog-bar">
      {dogsToDisplay.map(dog => (
        <span key={dog.id} onClick={() => setSelectedDog(dog)}>
          {dog.name}
        </span>
      ))}
    </div>
  );
}

export default DogBar;
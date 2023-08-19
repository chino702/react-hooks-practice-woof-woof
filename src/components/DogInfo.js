import React from "react";

function DogInfo({ selectedDog, toggleGoodness }) {
  if (!selectedDog) {
    return <div>No dog selected.</div>;
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <img src={selectedDog.image} alt={selectedDog.name} />
      <h2>{selectedDog.name}</h2>
      <button onClick={toggleGoodness}>
        {selectedDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}
      </button>
    </div>
  );
}

export default DogInfo;
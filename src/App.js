import { useState } from "react";
import "./App.css";
import { animals, searchGifs } from "./services/giphy-service";
import { Grid, AnimalOptions } from "./componets";

function App() {
  const [results, setResults] = useState([]);

  const onButtonPress = (value) => {
    searchGifs(value)
      .then((GifResults) => {
        setResults(GifResults);
      })
      .catch(console.log);
  };

  return (
    <div>
      <AnimalOptions animalOptions={animals} onClick={onButtonPress} />
      <Grid results={results.data} />
    </div>
  );
}

export default App;

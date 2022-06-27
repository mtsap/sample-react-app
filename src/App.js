import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { animals } from "./services/giphy-service";
import { GiphyFetch } from "@giphy/js-fetch-api";
import Carousel from "better-react-carousel";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

const createAnimalButton = (animal, onClick) => {
  return (
    <Button
      key={animal}
      value={animal}
      onClick={(e) => {
        onClick(e.target.value);
      }}
    >
      {animal}
    </Button>
  );
};

const AnimalOptions = ({ animalOptions, onClick }) => {
  return (
    <div>
      {animalOptions.map((animal) => createAnimalButton(animal, onClick))}
    </div>
  );
};

const Grid = ({ results, wee }) => {
  console.log(results, wee);
  return (
    <Carousel cols={5} rows={10} gap={10} loop>
      {results.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img width="50%" src={item.images.downsized.url} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

Grid.defaultProps = {
  results: [],
};

const searchGifs = (searchTerm) =>
  giphyFetch.search(searchTerm, { offset: 0, limit: 40 });

function App() {
  const [results, setResults] = useState([]);

  const onButtonPress = (value) => {
    searchGifs(value)
      .then((GifResults) => {
        console.log("weee");
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

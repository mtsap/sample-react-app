import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch("D31L73ySufmBJ3YBDkmbVnH9TuWXuvMa");

const animals = ["cat", "dog", "elephant", "lion", "monkey"];

const searchGifs = (searchTerm) =>
  gf.search(searchTerm, {
    offset: Math.floor(Math.random() * 500),
    limit: 40,
  });

export { animals, searchGifs };

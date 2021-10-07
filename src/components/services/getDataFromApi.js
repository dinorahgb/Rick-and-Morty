const result =
  "//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";
// "//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";
const getDataFromApi = () => {
  return fetch(result)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((characters) => {
        return {
          id: characters.id,
          image: characters.image,
          name: characters.name,
          status: characters.status,
          specie: characters.species,
          origin: characters.origin.name,
          episode: characters.episode,
          url: characters.url,
        };
      });
    });
};

export default getDataFromApi;

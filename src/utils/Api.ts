const baseUrl = "https://rickandmortyapi.com/api";
const characterPath = "/character/?page=";
const episodePath = "/episode/";

export const getCharacterInfo = (pageCount: number) => {
  return fetch(`${baseUrl}${characterPath}${pageCount}`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("API Error");
      return {};
    });
};

export const getEpisodes = (episodes: string) => {
  return fetch(`${baseUrl}${episodePath}${episodes}`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("API Error");
      return {};
    });
};

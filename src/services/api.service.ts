import { Character, CharacterResponse } from '../features/characters/models/Character';
const baseUrl = `https://rickandmortyapi.com/api`;

export const getCharacters = () => {
  return fetch(`${baseUrl}/character`);
};

export const getCharacterBySearch = (pageNumber: number, search: string) => {
  return fetch(`${baseUrl}/character/?page=${pageNumber}&name=${search}`)
    .then((res) => res.json() as Promise<CharacterResponse>)
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const getCharacterById = (id: string) => {
  return fetch(`${baseUrl}/character/${id}`).then(
    (res) => res.json() as Promise<Character>,
  );
};

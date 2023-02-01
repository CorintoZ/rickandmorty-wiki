import { CharacterResponse } from '../features/characters/models/Character';
const baseUrl = `https://rickandmortyapi.com/api`;

export const getCharacters = () => {
  return fetch(`${baseUrl}/character`);
};

export const getCharacter = (pageNumber: number, search: string) => {
  return fetch(`${baseUrl}/character/?page=${pageNumber}&name=${search}`).then(
    (res) => res.json() as Promise<CharacterResponse>,
  );
};

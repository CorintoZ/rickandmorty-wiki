import { Character, CharacterResponse } from '../features/characters/models/Character';
import { IUserAuth } from '../models/User';
const baseUrl = `https://rickandmortyapi.com/api`;
const localhostUrl = `http://localhost:9000`;

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

export const loginUser = (user: IUserAuth) => {
  return fetch(`${localhostUrl}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export const registerUser = (user: IUserAuth) => {
  return fetch(`${baseUrl}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

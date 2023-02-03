import axios from 'axios';

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
  return axios.post(`${localhostUrl}/auth/login`, {
    email: user.email,
    password: user.password,
  });
};

export const registerUser = (user: IUserAuth) => {
  return axios.post(`${localhostUrl}/auth/register`, {
    email: user.email,
    password: user.password,
  });
};

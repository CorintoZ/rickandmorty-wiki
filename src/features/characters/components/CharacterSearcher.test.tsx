import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { getCharacterBySearch } from '../../../services/api.service';
import { CharacterResponse, Gender, Species, Status } from '../models/Character';
import CharacterSearcher from './CharacterSearcher';
jest.mock('../../../services/api.service');

const res: CharacterResponse = {
  info: {
    count: 2,
    pages: 1,
    next: '1',
    prev: null,
  },
  results: [
    {
      id: 595,
      name: 'Floaty Non-Gasm Brotherhood Member',
      species: Species.Alien,
      type: 'Soulless Puppet',
      gender: Gender.Male,
      status: Status.Alive,
      origin: {
        name: 'Tickets Please Guy Nightmare',
        url: 'https://rickandmortyapi.com/api/location/98',
      },
      location: {
        name: 'Tickets Please Guy Nightmare',
        url: 'https://rickandmortyapi.com/api/location/98',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/595.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/37'],
      url: 'https://rickandmortyapi.com/api/character/595',
      created: '2020-08-06T11:30:50.675Z',
    },
    {
      id: 596,
      name: 'Floaty Non-Gasm Brotherhood Member Friend',
      status: Status.Alive,
      species: Species.Alien,
      type: 'Soulless Puppet',
      gender: Gender.Female,
      origin: {
        name: 'Tickets Please Guy Nightmare',
        url: 'https://rickandmortyapi.com/api/location/98',
      },
      location: {
        name: 'Tickets Please Guy Nightmare',
        url: 'https://rickandmortyapi.com/api/location/98',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/596.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/37'],
      url: 'https://rickandmortyapi.com/api/character/596',
      created: '2020-08-06T11:31:40.334Z',
    },
  ],
};
describe('CharacterSearcher', () => {
  let component: RenderResult;
  const mockGetUserDetails = getCharacterBySearch as jest.MockedFunction<
    typeof getCharacterBySearch
  >;
  mockGetUserDetails.mockResolvedValue(res);
  // Provide our custom implementation here
  beforeEach(async () => {
    fetchMock.resetMocks();
    await act(() => {
      component = render(
        <MemoryRouter>
          <CharacterSearcher />
        </MemoryRouter>,
      );
    });
  });
  test('renders content', () => {
    component.getByPlaceholderText('Search for characters');
  });
  test('display results on populated response', async () => {
    await waitFor(() => {
      screen.getByText('Floaty Non-Gasm Brotherhood Member Friend');
      expect(screen.queryByText('No results found')).toBeFalsy();
    });
  });
  test('display no resuls on empty response', async () => {
    await waitFor(() => {
      screen.getByText('No results found');
    });
  });
});

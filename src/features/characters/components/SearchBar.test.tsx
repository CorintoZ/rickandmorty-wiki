import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { SearchBar } from './SearchBar';

test('renders content', () => {
  const component = render(
    <SearchBar
      setSearch={() => {
        return null;
      }}
      setPageNumber={() => {
        return null;
      }}
    />,
  );

  component.getByPlaceholderText('Search for characters');
});

test('on write calls setSearch', () => {
  const mockHandler = jest.fn();
  const component = render(
    <SearchBar
      setSearch={mockHandler}
      setPageNumber={() => {
        return null;
      }}
    />,
  );
  const input = component.getByPlaceholderText('Search for characters');
  fireEvent.change(input, { target: { value: 'test' } });

  expect(component.getByDisplayValue('test')).toBeInTheDocument();
  expect(mockHandler).toHaveBeenCalledTimes(1);
});

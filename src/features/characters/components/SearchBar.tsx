import React from 'react';
import { Dispatch, SetStateAction } from 'react';

export const SearchBar = ({
  setSearch,
  setPageNumber,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <form className="flex m-2 p-2 bg-blue-300 rounded-lg shadow-sm">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="border-2 border-solid"
        type="text"
      />
    </form>
  );
};

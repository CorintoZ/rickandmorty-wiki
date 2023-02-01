import { Dispatch, SetStateAction } from 'react';

export const SearchBar = ({
  setSearch,
  setPageNumber,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <form className="flex grow-1">
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

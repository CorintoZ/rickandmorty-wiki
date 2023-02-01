export const SearchBar = ({
  setSearch,
  setPageNumber,
}: {
  setSearch: any;
  setPageNumber: any;
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

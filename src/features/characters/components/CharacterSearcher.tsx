import React, { useEffect, useState } from 'react';

import { getCharacter } from '../../../services/api.service';
import { CharacterResponse } from '../models/Character';
import CharacterItem from './CharacterItem';
import Pagination from './Pagination';
import { SearchBar } from './SearchBar';

const CharacterSearcher = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [fetchedData, setFetchedData] = useState<CharacterResponse>();

  useEffect(() => {
    getCharacter(pageNumber, search).then((res) => setFetchedData(res));
  }, [search, pageNumber]);

  return (
    <>
      <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container mx-auto h-max-vh">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
          {fetchedData?.results.map(({ id, name, image }) => {
            return <CharacterItem key={id} name={name} image={image} />;
          })}
        </div>
      </div>
      {fetchedData?.info && (
        <Pagination
          info={fetchedData.info}
          pageNumber={pageNumber}
          updatePageNumber={setPageNumber}
        />
      )}
    </>
  );
};

export default CharacterSearcher;

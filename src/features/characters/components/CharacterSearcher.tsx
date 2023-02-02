import React, { useEffect, useState } from 'react';

import { getCharacterBySearch } from '../../../services/api.service';
import { CharacterResponse } from '../models/Character';
import CharacterItem from './CharacterItem';
import Pagination from './Pagination';
import { SearchBar } from './SearchBar';

const CharacterSearcher = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [fetchedData, setFetchedData] = useState<CharacterResponse | null>();

  useEffect(() => {
    getCharacterBySearch(pageNumber, search).then((res) => setFetchedData(res));
  }, [search, pageNumber]);

  return (
    <>
      <div className="flex justify-center">
        <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} />
      </div>
      <div className="container mx-auto h-max-vh flex ">
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
          {fetchedData?.results?.map(({ id, name, image }) => {
            return <CharacterItem key={id} id={id} name={name} image={image} />;
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

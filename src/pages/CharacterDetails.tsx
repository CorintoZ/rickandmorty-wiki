import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Character } from '../features/characters/models/Character';
import { getCharacterById } from '../services/api.service';

const CharacterDetails = () => {
  const params = useParams();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    if (params?.id) getCharacterById(params.id).then((res) => setCharacter(res));
  }, []);

  return (
    <div className="container flex justify-center mb-5">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-center text-xl font-bold">{character?.name}</h1>
        <img src={character?.image} alt="" />
        <div className="content">
          <div>
            <span className="font-bold">Gender: </span>
            {character?.gender}
          </div>
          <div>
            <span className="font-bold">Origin: </span>
            {character?.location.name}
          </div>
          <div>
            <span className="font-bold">Species: </span>
            {character?.species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;

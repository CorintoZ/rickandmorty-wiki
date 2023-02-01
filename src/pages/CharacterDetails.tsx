import React from 'react';

const CharacterDetails = () => {
  const params = useParams();
  useEffect(() => {
    fetch(api).then((res) => res.json());
  }, []);

  return <div>CharacterDetails</div>;
};

export default CharacterDetails;

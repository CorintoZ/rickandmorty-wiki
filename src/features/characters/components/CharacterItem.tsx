import { Link } from 'react-router-dom';

const CharacterItem = ({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: number;
}) => {
  return (
    <Link to={`character/${id}`} className="no-underline">
      <div className="flex flex-col justify-center ">
        <img className="rounded-lg" src={image} alt="" />
        <div className="p-4">
          <div>{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterItem;

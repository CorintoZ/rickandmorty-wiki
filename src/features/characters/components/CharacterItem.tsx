const CharacterItem = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="flex flex-col justify-center">
      <img src={image} alt="" />
      <div className="p-4">
        <div>{name}</div>
      </div>
    </div>
  );
};

export default CharacterItem;

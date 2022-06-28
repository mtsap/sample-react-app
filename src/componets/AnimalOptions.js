import Button from "./Button";
const createAnimalButton = (animal, onClick) => {
  return (
    <Button
      key={animal}
      value={animal}
      onClick={(e) => {
        onClick(e.target.value);
      }}
    >
      {animal}
    </Button>
  );
};

const AnimalOptions = ({ animalOptions, onClick }) => {
  return (
    <div>
      {animalOptions.map((animal) => createAnimalButton(animal, onClick))}
    </div>
  );
};

export default AnimalOptions;

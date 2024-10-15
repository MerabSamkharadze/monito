import Card from "./Card";

export default function CardsList() {
  const dogs = [
    {
      id: "1",
      name: "MO231 - Pomeranian White",
      sex: "Male",
      age: "02 months",
    },
    {
      id: "2",
      name: "MO502 - Poodle Tiny Yellow",
      sex: "Female",
      age: "03 months",
    },
    {
      id: "3",
      name: "MO318 - Beagle Brown",
      sex: "Male",
      age: "04 months",
    },
    {
      id: "4",
      name: "MO105 - Dachshund Black",
      sex: "Female",
      age: "01 month",
    },
    {
      id: "5",
      name: "MO403 - Golden Retriever",
      sex: "Male",
      age: "06 months",
    },
    {
      id: "6",
      name: "MO294 - Chihuahua White",
      sex: "Female",
      age: "02 months",
    },
    {
      id: "7",
      name: "MO527 - Shih Tzu Brown",
      sex: "Male",
      age: "03 months",
    },
    {
      id: "8",
      name: "MO309 - Border Collie Black",
      sex: "Female",
      age: "05 months",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {dogs.map((dog) => {
        return (
          <Card name={dog.name} sex={dog.sex} age={dog.age} key={dog.id} />
        );
      })}
    </div>
  );
}

const people = [
  { id: 0, name: "Carol" },
  { id: 1, name: "Marcos" },
  { id: 2, name: "Odin" },
  { id: 3, name: "Lucas" },
  { id: 4, name: "Mat" },
];

export function List() {
  const listItems = people.map((person) => {
    return <li>{person.name}</li>;
  });
  return <ul className="">{listItems}</ul>;
}

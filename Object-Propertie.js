const students = [
    {id: 54, name: 'Omar Sunny'},
    {id: 78, name: 'Manaaaa'},
    {id: 94, name: 'Moyouri'},
    {id: 34, name: 'DeepJol'},
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
  console.log(bigger);
  
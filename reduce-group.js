const names = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Charlotte",
  "James",
  "Amelia",
  "Elijah",
  "Sophia",
  "William",
  "Mia",
  "Henry",
  "Isabella",
  "Lucas",
  "Evelyn",
  "Benjamin",
  "Harper",
  "Theodore",
  "Luna",
  "Mateo",
  "Abigail",
  "Levi",
  "Gianna",
  "Sebastian",
  "Elizabeth",
  "Daniel",
  "Eleanor",
  "Jack",
  "Ella",
  "Alexander",
  "Renata",
  "Owen",
  "Hazel",
  "Asher",
  "Aurora",
  "Samuel",
  "Maya",
  "Ethan",
  "Chloe",
  "Leo",
  "Elena",
  "Jackson",
  "Mila",
  "Mason",
  "Layla",
  "Ezra",
  "Ivy",
  "John",
  "Lily",
];

const namedGroups = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if (firstLetter in acc) {
    
    acc[firstLetter].push(cur);
  } else {
    acc[firstLetter] = [cur];
  }

  
  return acc;
}, {});


Object.keys(namedGroups).forEach((key) => {
  console.log("-----------", key, "--------------");

  namedGroups[key].forEach((name) => console.log(name)
  )
})

interface User {
  name: string;
  age: number;
  permission: string;
  type: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
  type: string;
}

type Person = Admin | User;
const p: Person = {
  name: "gal",
  age: 35,
  role: "admin",
  type: "main",
  permission: "write",
};
const persons: Person[] = [
  {
    name: "Israel",
    age: 20,
    permission: "user",
    type: "User",
  },
  {
    name: "Snir",
    age: 20,
    role: "admin",
    type: "Admin",
  },
  {
    name: "Ronit",
    age: 20,
    role: "admin",
    type: "Admin",
  },
];

function extraInfo(p: Person) {
  let additionalInfo: string = "";
  if ("role" in p) {
    additionalInfo = p.role;
  } else if ("permission" in p) {
    additionalInfo = p.permission;
  }
  return additionalInfo;
}

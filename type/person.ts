interface Person {
  name: string;
  age: number;
}

function birthday (someone : Person) : Person {
  return { name: someone.name, age: someone.age + 1 };
}

console.dir(birthday({ name: "Judgy", age: 39 }));

//tsc person.ts
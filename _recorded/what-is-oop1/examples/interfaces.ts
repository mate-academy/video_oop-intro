{
  interface User {
    name: string;
    age: number;
    isCoach: boolean;
  }

  const misha: User = {
    name: 'Misha',
    age: 38,
    isCoach: true,
  };
  
  function sayHi4(user: User) {
    let message = 'Hi!';
  
    if (user.isCoach) {
      message += ` I am your coach ${user.name}.`;
    } else {
      message += ` I am a student ${user.name}.`;
    }
  
    message += ` I am ${user.age}`;

    console.log(message);
  }
  
  sayHi4(misha);
  // sayHi4({});
  
  sayHi4({
    name: 'Perto',
    age: 57,
    isCoach: false,
  });
}

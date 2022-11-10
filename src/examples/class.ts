{
  class User {
    name: string;
    age: number;
    isCoach: boolean;

    constructor(name: string, age: number, isCoach: boolean) {
      this.name = name;
      this.age = age;
      this.isCoach = isCoach;
    }
  }

  function sayHi5(user: User) {
    let message = 'Hi!';

    if (user.isCoach) {
      message += ` I am your coach ${user.name}.`;
    } else {
      message += ` I am a student ${user.name}.`;
    }
  
    message += ` I am ${user.age}`;

    console.log(message);
  }

  const misha: User = new User('Misha', 38, true);

  sayHi5(misha);
}

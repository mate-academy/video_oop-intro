{
  class User {
    private name: string;
    private _age: number;
    public isCoach: boolean;

    constructor(name: string, age: number, isCoach: boolean) {
      if (age < 0) {
        throw new Error("Age can't be negative");
      }

      this.name = name;
      this._age = age;
      this.isCoach = isCoach;
    }

    getName() {}
    setName(value: number) {}

    get age() {
      return this._age;
    }

    set age(value: number) {
      if (value < 0) {
        throw new Error("Age can't be negative");
      }

      this._age = value;
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

  console.log(misha.age);
  misha.age = 39;

  sayHi5(misha);
}

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

    sayHi() {
      let message = 'Hi!';
  
      if (this.isCoach) {
        message += ` I am your coach ${this.name}.`;
      } else {
        message += ` I am a student ${this.name}.`;
      }
    
      message += ` I am ${this.age}`;

      console.log(message);
    }
  }
  
  let misha = new User('Misha', 38, true);
  let petro = new User('Petro', 57, false);
  
  misha.sayHi();
  petro.sayHi();
}

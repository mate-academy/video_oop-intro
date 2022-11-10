{
  let age = 38;
  let name = 'Misha';
  let isCoach = true;


  function sayHi2(name: string, age: number, isCoach: boolean) {
    let message = 'Hi!';

    if (isCoach) {
      message += ` I am your coach ${name}.`;
    } else {
      message += ` I am a student ${name}.`;
    }

    message += ` I am ${age}`;

    console.log(message);
  }

  sayHi2(name, age, isCoach);
  sayHi2('Petro', 57, false);
  // sayHi2(38, true, 'Roma');
  // sayHi2('Petro', age, isCoach);
}

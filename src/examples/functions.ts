{
  let age = 38;
  let name = 'Misha';
  let isCoach = true;

  // Methods, functions
  function sayHi1(name, age, isCoach) {
    let message = 'Hi!';

    if (isCoach) {
      message += ` I am your coach ${name}.`;
    } else {
      message += ` I am a student ${name}.`;
    }

    message += ` I am ${age}`;

    console.log(message);
  }

  sayHi1(name, age, isCoach);
  sayHi1('Petro', 57, false);
  // sayHi1(25, true, 'Roma');
}

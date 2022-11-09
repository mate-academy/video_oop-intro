{
  const misha = {
    name: 'Misha',
    age: 38,
    isCoach: true,
  };
  
  function sayHi3(user) {
    let message = 'Hi!';
  
    if (user.isCoach) {
      message += ` I am your coach ${user.name}.`;
    } else {
      message += ` I am a student ${user.name}.`;
    }
  
    message += ` I am ${user.age}`;

    console.log(message);
  }
  
  sayHi3(misha);
  
  sayHi3({
    name: 'Perto',
    age: 57,
    isCoach: false,
  });
  
  // sayHi3({});
}

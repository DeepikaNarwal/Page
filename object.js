var person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
  };
  
  
  function printPersonDetails(personObject) {
    for (var property in personObject) {
      if (personObject.hasOwnProperty(property)) {
        console.log(property + ": " + personObject[property]);
      }
    }
  }
  
  printPersonDetails(person);
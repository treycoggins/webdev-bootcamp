// Leixcal Scope

function bankRobbery() {
  const heros = ['Spiderman', 'Wolverine', 'Black Panther', 'Super Woman'];
  function cryForHelp() {
    for (let hero of heros) {
      // heros is not accessible in this function because cryForHelp was never executed
      console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
    }
  }
}

  // Alternatively:
function bankRobbery() {
  const heros = ['Spiderman', 'Wolverine', 'Black Panther', 'Super Woman'];
  function cryForHelp() {
    for (let hero of heros) {
      console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
    }
  }
  // calling the inner function, heroes is accessible when the inner function is invoked
  cryForHelp();
}

// variables are accessible from inner functions when they exist in outer functions, but variables in inner functions are not accessible by outer functions

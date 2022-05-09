/*
What are the primitive types?
Number, String, Boolean, Null, Undefined (Symbol & BigInt)


Numbers:
JS has one number type. Can represent:
  -Positive Numbers
  -Negative Numbers
  -Whole Numbers (Integers)
  -Decimal Numbers
  
Mathematical Operators:
  Addition (3 + 1 = 4)  
  Subtraction (4 - 5 = -1)
  Multiplication (8 * 8 = 64)
  Division (9 / 3 = 3)
  Modulo (27 % 2 = 1)
  Exponentiation (4 ** 4 = 16)

Other Mathematical Operators:
  += , -= , *= , /= (Updates the current value of a variable)
  ++ , -- (Adds or subtracts one to a variable)


Order of Operations follows PEMDAS:
  1. Parentheses
  2. Exponents
  3. Multiplication
  4. Division
  5. Addition
  6. Subtraction

NaN (Not a Number):
  NaN is a numeric value that represents something that is not a number.
  0 / 0 = NaN
  1 + NaN = NaN
  (Anything operated on with NaN is NaN)

Variables:
  Variables are like labels for values
  We can store a value and give it a name
  Refer back to it later
  Use it to do stuff
  Change it later

  let
    let birthYear = 1984;
    let age = 37;
    let currentYear = birthYear + age;

  const
    const birthYear = 1984;
    const variables behave like let variables, but their value cannot  be changed or reassigned

  var (deprecated way of declaring variables)
    still works to declare variables
    no real reason to use it

  true/false
    boolean values
    usually begins with 'is' (e.g. isGameOver, isLoggedIn)
  
  **Variables can change type by reassignment
    let x = 5;
    let x = 'A'; <-- This is valid

Variable Naming & Conventions:
  -variables can contain letters, numbers, underscores, and dollar signs
  -variables cannot begin with a number
  -variables are case sensitive
  -variables in JS are conventionally cased with 'camelCase'
  -underscores are typically NOT used in variable names
  -good variable names are concise but descriptive to the meaning
  -avoid one letter variables, unless it makes sense

*/
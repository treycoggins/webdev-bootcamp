/*
Strings: A string of characters (textual information)
  strings must be enclosed by quotations, either single or double
    e.g. "Trey", "bird", 'A', 'z'
  quotations cannot be mixed 
    e.g. "Trey' is invalid
  use of double or single quotes should be consistent throughout
  single quotes can be enclosed by double quotes
  double quotes can be enclosed by single quotes

Indices & Length
  strings are indexed beginning at zero
  each character has a corresponding index
  */
    let str = "Trey";
    str[0] = 'T'; // This evaluates to true.
    str[3] = 'y'; // This also evaluates to true.
    str[99]  // This evaluates to'undefined'.
  
  
  // every string has a property called length

    str = 'Trey'
    str.length == 4; // This evaluates to true.
  
  // strings can be 'added' or concatenated:
    'Trey' + 'Coggins' = 'TreyCoggins';
    'Trey' + ' ' + 'Coggins = 'Trey Coggins';

  // *When concatenating two different types JavaScript will try to coerce them to the same type:
      1 + 'Trey' == '1Trey'

parseInt();
parseFloat();  // converts a numeric string to  a number
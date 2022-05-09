let product = 'Artichoke';
let price = 2.25;
let qty = 5;

// To create the string 'You bought 5 Artichokes. Total is $11.25.'
  // With concatenation:

msg = 'You bought ' + qty + ' ' + product + 's. Total is $' + price * qty + '.';

  // With string literals:
  // *String literals must be enclosed with back-ticks

msg = `You bought ${qty} ${product}s. Total is $${price * qty}.`;
// Switch statement
  // a control-flow statement that can replace multiple if-statements

  // In order to print a day of the week by number with if-statements
const day = 2;

if (day === 1){
  console.log('Monday');
} else if (day === 2){
  console.log('Tuesday');
} else if (day === 3){
  console.log('Wednesday');
} else if (day === 4){
  console.log('Thursday');
} else if (day === 5){
  console.log('Friday');
}


// Day of the week by number using switch

const day2 = 2;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
  case 7:
    console.log('Weekend');
  default:
    console.log('Invalid Number');
}

  // switch statements require the break keyword in order to stop operation.
  //Without a break it is possible to have multiple cases with the same codeblock.
  //Default is the catch-all for any value not expressed by the cases.
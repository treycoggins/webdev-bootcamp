const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(hash);
//   console.log(salt);

// }

const hashPassword = async (pw) => {
  // run has and with hashrounds passed in
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
}

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw)
  if(result) {
    console.log('LOGGED YOU IN!')
  } else {
    console.log('INCORRECT!')
  }
}

// hashPassword('monkey');
login('monkey', '$2b$10$8meN7IATfjYv4CITtZxNnOADuImW5P49Tv8YuBVHbAkziRw.trbai')
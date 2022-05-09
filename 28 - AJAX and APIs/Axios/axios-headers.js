// Some APIs require other information to fetch data from their server
// One way APIs fetch data is through using headers
// axios.get() accepts an argument, 'headers', which is an object

const getDadJoke = async () => {
  const config = { headers: { Accept: 'application/json'}}
  const res = await axios.get('https://icanhazdadjoke.com/', config)
  console.log(res.data.joke);
}


// HTTP request with DOM manipulation

const jokes = document.getElementById('jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
  const jokeText = await displayDadJoke();
  const newLI = document.createElement('li');
  newLI.append(jokeText);
  jokes.append(newLI);
}
const displayDadJoke = async () => {

  try {

    // The headers object is passed to axios
  const config = { headers: { Accept: 'application/json'}}
  const res = await axios.get('https://icanhazdadjoke.com/', config)
 return res.data.joke; 
} catch (e) {
  return "No Jokes Available, Sorry :(";
  }
}


button.addEventListener('click', addNewJoke);


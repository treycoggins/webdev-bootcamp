// HTTP request using Axios
  // Axios returns the data object without having to call res.json() 

axios.get("https://swapi.dev/api/people/1/")
.then(res => {
  console.log("RESPONSE: ", res);
})
.catch((e) => {
  console.log("ERROR! ", e);
});



  // HTTP request using async function

const getStarWarsPerson = async () => {
try {
const res = await axios.get("https://swapi.dev/api/people/1/");
console.log(res.data);
} catch (e) {
  console.log("ERROR!!", e);
  }
};


  // HTTP request using a value passed into the async function


const getStarWarsPersonWithID = async (id) => {
  try {
  const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
  console.log(res.data);
  } catch (e) {
    console.log("ERROR!!", e);
    }
  };

getStarWarsPersonWithID(11);
getStarWarsPersonWithID(20);
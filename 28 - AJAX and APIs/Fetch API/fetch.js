// The newer way of making HTTP requests via Javascript
// Supports Promises


    // HTTP requests using the Fetch API


fetch("https://swapi.dev/api/people/1/")
.then(res => {
  console.log("RESOLVED", res);
  return res.json();
})
.then((data) => {
  console.log(data);
  return fetch("https://swapi.dev/api/people/3/")
})
.then((res) => {
  console.log("SECOND REQUEST RESOLVED!!");
  return res.json();
})
.then((data) => {
  console.log(data);
})
.catch((e) => {
  console.log("ERROR!", e);
});



    /// Same requests using an async function

const loadStarWarsPeople = async () => {
  try{
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
} catch(e) {
  console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();
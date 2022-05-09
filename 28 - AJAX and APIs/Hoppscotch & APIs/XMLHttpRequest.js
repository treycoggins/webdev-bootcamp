/// the 'original' way of sending requests via Javascript
/// does not support Promises

const req = new XMLHttpRequest();

req.onload = function() {
  console.log("IT LOADED!");
  console.log(this.responseText);
  
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(data.name, data.height);
}

req.onerror = function() {
  console.log("ERROR!!");
  console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/")
req.send();


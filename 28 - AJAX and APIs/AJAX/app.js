// AJAX : Asynchronous Javascript And XML (Now JSON)
// JSON : Java Script Object Notation

// Sometimes when we make an HTTP request we don't want all the HTML, CSS, and Javascript. Instead we simply want the data from a Web API (Application Programming Interface)


// Web Servers expose certain 'endpoints' which responds to requests with data, in the form of JSON


// JSON:
  // Javascript Object Notation is a way of sending data back from servers
  // JSON objects keys must be enclosed in double quotations
  // JSON object values can be strings, numbers, booleans, null, other objects, and arrays


// example JSON from Bitcoin API

const data = `{ "ticker":{"base":"BTC","target":"USD","price":"11288.4913289","volume":"92818.2934029","change":"-39.293243"}, "timestamp":183924839,"success":true,"error":"" }`


// JSON Method to turn a JSON string into a Javascript object -> JSON.parse();
  // save to a varible and access its properties

  const parsedData = JSON.parse(data);


// JSON Method to turn a Javascript object into a JSON string -> JSON.stringify()
  const dog = {breed:'lab', color:'black', isAlive:true, owner:undefined}


//// JSON is just a format of sharing information between different programming infrastructures
//// JSON can be parsed by Python, Ruby, Java, among others


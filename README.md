# SOP/CORS
Example of SOP (Same-origin policy) preventing a ´fetch´ response.

## Usage
1. Start the server that does not include an `Access-Control-Allow-Origin` header: `node server/server-no-allow-origin.js`. It will run in port 9000
2. Start the server that includes an `Access-Control-Allow-Origin` header: `node server/server-allow-origin.js`. It will run in port 9001
3. Open the client (`index.html`) in the browser in port 5500. Make sure it is served as `localhost` and not `127.0.0.1`
4. Check out the browser console
    - For the server that does not include the header, the request is not cancelled, but the client cannot reach the response
    - For the server that includes the header, the response is readable

## Tools
Node.js / JavaScript / HTML5

## Author
Arturo Mora-Rioja, with assistance from ChatGPT 5.2.
import * as http from 'node:http';

function isPrime(value) {
  for(var i = 2; i < value; i++) {
    if(value % i === 0) {
      return false;
    }
    // Print some logs every 1,000,000
    if(i % 1000000000 === 0) {
      console.log(`Currently at ${i}`);
    }
  }
  return value > 1;
}

const port = process.env.PORT || 8080;
const n =  parseInt(process.env.N) || 2038074743;

console.info(`🔥 Let's start burning CPU cycles by checking if ${n} is prime! 🔥`);

console.info(`Is ${n} prime? ${isPrime(n)}!`);

const server = http.createServer((req, res) => { res.end("🔥"); });
server.listen(port, () => console.info(`Server is now listening for requests.`));

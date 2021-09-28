# nodejs-notes
Node.JS [Referans Document](https://nodejs.dev/learn)

The Net Ninja [Referans Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
## Intro 

Node.js is an open-source and cross-platform JavaScript runtime environment which is born in 2009. Node.js runs the V8 JavaScript engine, the core of Google Chrome. V8 is written in C++, and it's continuously improved.

V8 engine compiles JavaScript into machine code. So there is no assembly language in compile time. It compiles into directly machine code.

After installed node.js, we can get result node's version from cmd.
```sh
node -v
```

## Run node.js scripts from the command line

Create app.js file. 
```js
const value = 'hello world';
console.log(value);
```
then run
```bash
node app.js
```

## Build an HTTP Server
Create server.js file.
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
then run
```bash
node server.js
```
after that visit http://localhost:3000 and you will see a message saying "Hello World".

## Lessons
### Lessons-1: Run node.js script, simple console.log
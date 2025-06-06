const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.on('practice', ()=> {
    console.log('Hay you know i am learning event of node js')
})
myEmitter.emit('event');
myEmitter.emit('practice');
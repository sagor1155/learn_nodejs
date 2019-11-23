var events = require('events');
var eventEmitter = new events.EventEmitter();

var connection_event = "connection";

var listener1 = function listener1(){
    console.log("listener 1 executed");
}

var listener2 = function listener2(){
    console.log("listener 2 executed");
}

eventEmitter.addListener(connection_event, listener1);
eventEmitter.addListener(connection_event, listener2);
eventEmitter.on(connection_event, listener2);
eventEmitter.emit(connection_event);

var total_listener = events.EventEmitter.listenerCount(eventEmitter, connection_event);
console.log("total listener: ", total_listener);

eventEmitter.removeListener(connection_event, listener2);
eventEmitter.emit(connection_event);
total_listener = events.EventEmitter.listenerCount(eventEmitter, connection_event);
console.log("total listener: ", total_listener);
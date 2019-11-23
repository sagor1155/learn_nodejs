// var buff = new Buffer.alloc(32);
// console.log(buff);
// var len = buff.write("singlebyte", 3, 8, 'utf-8');
// console.log(buff);
// console.log(buff.toString());
// console.log(buff.toJSON());
// console.log("total bytes written: " + len);

//buffer concat
var buff1 = new Buffer.from('g-string 3 ');
var buff2 = new Buffer.from('e-string 1');
var buff3 = Buffer.concat([buff1, buff2]);
console.log(buff3.toString());

//buffer compare 
var result = buff1.compare(buff2);
if(result < 0) {
    console.log(buff1 +" comes before " + buff2);
}else if(result === 0) {
    console.log(buff1 +" is same as " + buff2);
}else {
    console.log(buff1 +" comes after " + buff2);
}

//copy buffer 
var buffer1 = new Buffer.from('ABC');
var buffer2 = new Buffer.alloc(3);
buffer1.copy(buffer2);      //copy buffer1 and paste into buffer2 
console.log("buffer2 content: " + buffer2.toString());

//slice buffer 
var slicedBuff = buff1.slice(0, 5);
console.log('slicedBuff content: ' + slicedBuff.toString());
console.log('slicedBuff length: ' + slicedBuff.length);


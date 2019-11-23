
console.log("Hello World");

function myFunction(a, b) {
  return a * b;             
}

for (var i=1; i<3; i++)
{
  for(var j=1; j<3; j++)
  {
    var x = myFunction(i, j);   
    console.log(x);
  }
}


// var mystr = "it's a string";
// for(var element in mystr)
// {
//   console.log(mystr[element].toString());
// }

function makeMultiplier(multiplier) {
  var x=2;
  console.log("x bef "+x);
console.log("mult "+multiplier);
  var myFunFunc = function (x) {
    console.log("inside myfunc "+x);
    return multiplier * x;
  };

  return myFunFunc;
}

var operation = makeMultiplier(5);
console.log("oper "+ operation(10));

'use strict';
// eslint-disable-next-line no-unused-vars
// function greaterThan(){
//   if (greaterThan(3)[4,2,3,1] >= 1){
// document.write (greaterThan[]);
//   }
// }

function greaterThan(val)
{
  return function(evalue, index, array)
  {
    return (evalue >= val);
  };
}
var result = [4, 2, 3, 1]. filter(greaterThan(1));
console.log(result);
document.write(result);


// greaterThan([2,8,-1],8) => 0
// eslint-disable-next-line no-redeclare
function greaterThan(val)
{
  return function(evalue, index, array)
  {
    return (evalue >= val);
  };
}
var result1 = [2, 8, -1]. filter(greaterThan(0));
console.log(result1);
document.write(result1);

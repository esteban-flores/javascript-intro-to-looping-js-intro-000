//Create an empty array that will have strings added to it by the function loops
var array = [];

//Build a function forLoop. It takes an array as an argument. Start counting from 0,
//and, using a for loop, add a string to the array 25 times. We don't want just any
//string. If your i value is 1, add the string "I am 1 strange loop." If your i value
//is anything else, add the string "I am ${i} strange loops." Once the loop is
//finished, return the array full of strings.

function forLoop(array){
  //expect(strangeArray[34]).to.equal(rest)
  for(var i = 0; i < 25; i++){
    if(array[i] === undefined){
      array[i] = `I am 1 strange loop.`;
    } else if(i === 1 || i === 11){
      array[i] = "I am 1 strange loop.";
    } else{
      //array[i] = `I am ${i} strange loops.`;
      array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`;
    }
  };
  return array;
};

//Create a function called whileLoop in loops.js. The function should take a number
//as an argument. Using a while loop, count down (using console.log) from the
//passed in number to 0. Then return the string 'done'.

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n -= 1;
  }
  return `done`;
};

//Define a function called doWhileLoop in loops.js. The function should take an
//integer as an argument. Use the incrementVariable() function
//(you can copy it from this README) in the condition, and console log
//"I run once regardless." while incrementVariable() returns a number less than
//the parameter received. (Your condition might look something like
//incrementVariable() < num.) Remember that it should also console log when
//receiving 0 as a parameter because the do-while runs before the condition is
//checked.

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  do{
    console.log("I run once regardless. while incrementVariable() returns a number less than the parameter received.");
  } while (incrementVariable() <= num);
};

/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

    /* =====================


    Write a program that uses console.log to print the numbers from 1 to 100.
    For multiples of three, print "Fizz" instead of the number. For multiples
    of five, print "Buzz" instead of the number. For numbers which are multiples
    of both three and five, print "FizzBuzz".

    Believe it or not, this is a common programming challenge in job interviews.

    ===================== */
    var x = [];

    x.push()
      for (var i=1;i<=100;i++){
        x.push(i)
      }

    var check = _.each(function(

                if (x[i]%15 == 0) {
                  console.log("BuzzFizz");
                }

                if (x[i]%5 == 0) {
                  console.log("Fizz");
                }

                if (x[i]%3 == 0) {
                  console.log("Buzz");
                }

                if (x[i]%15 != 0) {
                  console.log(x[i]);
                }
              )




    </script>
  </body>
</html>

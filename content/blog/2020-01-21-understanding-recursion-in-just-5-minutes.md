---
title: Understanding Recursion - in just 5 minutes
date: 2020-01-21T08:20:04.355Z
description: >-
  Recursive functions sound scary, but with a little breakdown you'll be using
  them in no time.
---
Recursion is something we do in every day life without thinking. It applies to programming too but the name often confuses people as it sounds fancier than it is. This short post is to help break that confusion with a quick example.

Recursion is the act of defining something by using itself. In programming, this means a function which calls itself.



A simple example of this would be to work out how many times a number needs to be doubled to reach the goal of 100 (or more). I'm going to write mine in javascript but this applies to any language.

```js
function howManyDoubles(value, currentCount = 0) {
  // we have our target defined as a numeric value of 100
  const target = 100

  // and we double our initial value
  const doubledValue = value * 2

  // we also need to track the number of times the number has been doubled
  const count = currentCount + 1

  // then we run our function, testing if the value is greater or equal to our target
  if (value >== 100) {
    // if the test succeeds, we end the function entirely
    // this will chain all the way up and end the recursion
    // (note: in javascript, once return is reached, all remaining code is ignored)
    return count
  }

  // if the test fails we call the function again, and again, until it passes.
  // we make sure we pass in the values which are most up to date and to return the result of the function so that once the recursion has been broken, the result gets passed all the way back to the top.
  return howManyDoubles(doubledValue, count)
}
```
This code works, so feel free to copy and paste it into your browser inspector and give it a run by calling `howManyDoubles(x)` with your own number values


So what's really happening here?

If we were to call the above function with the value "20", we would see the following result (with less detail)

```js
20 is doubled to 40, which is less than 100 so the function is called using 40
  40 is doubled to 80, which is less than 100 so the function is called using 80
    80 is doubled to 160 which is greater than 100 so the function returns a count of 3
  3 was returned so this function also returns 3
3 was returned so this function also returns 3
```

Once the function reaches its passing criteria, the recursion breaks and everything continues as normal. Failing to include a pass criteria will create an infinite loop.

And that's it. Recursive functions have a fancy name but aren't too different from regular functions. The key difference is that it is a function which calls itself - and that's it!


Mathematics is a great place to start learning about recursive functions but they can be used in other areas of web development too. I've used recursive components to create navigation menus with multiple levels of child links before, for example.

If you want to go further you can practice creating your own recursive function to work out if a number is even or odd (hint: you'll need to halve the numbers till you hit 0 or 1).

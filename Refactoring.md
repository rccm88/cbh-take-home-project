# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here 

In my refactored version of the `deterministicPartitionKey` function, I focused on simplifying the logic by using early returns to handle the case where the `event` parameter is null or undefined, reducing the nested if statements. I also extracted the creation of a partition key into a separate function `createPartitionKey` to make the code more modular and readable. Additionally, I reduced the number of variables used, and I made sure the variables' names were similar to the previous function. Overall, the refactored version has a clearer flow and structure, with less complexity and more readability, making it easier to understand and maintain.
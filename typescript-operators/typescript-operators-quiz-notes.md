# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  - `&&` returns the first falsy operand or the last truthy operand.
  - `||` returns the first truthy operand or the last falsy operand.
  - They can be used outside of `if` statements to simplify conditional assignments and function calls.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  - `&&` stops evaluation if the first operand is falsy.
  - `||` stops evaluation if the first operand is truthy.
  - This behavior can be used to assign default values or prevent unnecessary function calls.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  - It returns the right-hand operand only if the left-hand operand is `null` or `undefined`.
  - Unlike `||`, it does not treat `0`, `false`, or `''` as falsy values.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?

  - A shorthand for `if/else`, returning one of two values based on a condition.
  - Unlike `if/else`, it is an expression that can be directly assigned to a variable.

- What is the `?.` (optional chaining) operator? When would you use it?
  - Used to access properties of objects that may be `null` or `undefined`, preventing runtime errors.
  - Useful in deeply nested object structures where properties might not exist.
- What is `...` (spread) syntax? How do you use it with arrays and objects?

  - Expands arrays or objects into individual elements or properties.
  - Used for copying, merging, and passing values into functions.

- What data types can be spread into an array? Into an object?
  - Arrays: strings, numbers, booleans, objects.
  - Objects: other objects but not primitives directly.
- How does spread syntax differ from rest syntax?
  - Spread (`...`) expands elements.
  - Rest (`...`) collects multiple arguments into an array in function parameters.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

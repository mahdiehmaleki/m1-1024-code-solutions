# typescript-destructuring-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is destructuring, conceptually?
  Destructuring is a convenient way to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It allows us to "unpack" the values from the structure and assign them to variables in one step.
- What is the syntax for `Object` destructuring?
  The syntax for Object destructuring involves matching variable names to property names of an object.
  const person = { name: 'John', age: 30 };
  const { name, age } = person;
  console.log(name);
  console.log(age);
- What is the syntax for `Array` destructuring?
  The syntax for Array destructuring involves matching variables to positions in an array.
  const numbers = [1, 2, 3, 4];
  const [first, second] = numbers;
  console.log(first);
  console.log(second);
- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
  Object/Array literals are used when creating or defining objects or arrays. but, Destructuring occurs on the right-hand side of an assignment to extract data from existing objects or arrays.
  When you see the pattern on the left-hand side of an assignment, with curly braces {} or square brackets [], it indicates destructuring, while using the same on the right-hand side suggests object or array creation.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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

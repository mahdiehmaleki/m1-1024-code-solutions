# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
    It iterates over each element in an array and executes a provided callback function for each element.
  - What should the callback function do?
    The callback function should perform an operation on each element of the array (e.g., logging values, modifying elements, updating external variables).
  - What is `Array.forEach` useful for?
    It is useful for performing side effects, such as updating UI elements, making API calls, or modifying objects, but it does not return a new array.
- `Array.map`:
  - What does `Array.map` do?
    It creates a new array by applying a provided callback function to each element of the original array.
  - What should the callback function return?
    The callback function should return the transformed value for each element, which will be stored in the new array.
  - What is `Array.map` useful for?
    It is useful for transforming data, such as formatting values, modifying object properties, or converting data structures while keeping the original array unchanged.
- `Array.find`:

  - What does `Array.find` do?
    It returns the first element in an array that satisfies the given condition in the callback function.
  - What should the callback function return?
    The callback function should return true when the desired element is found; otherwise, it should return false.
  - What is `Array.find` useful for?
    It is useful for locating a single specific item in an array, such as finding a user by ID or getting the first product that meets certain criteria.

- `Array.filter`:
  - What does `Array.filter` do?
    It creates a new array containing all elements that satisfy the given condition in the callback function.
  - What should the callback function return?
    The callback function should return true for elements that should be included in the new array and false for those that should be excluded.
  - What is `Array.filter` useful for?
    It is useful for extracting subsets of data, such as filtering out inactive users, getting products under a specific price, or selecting elements that match a specific condition.

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

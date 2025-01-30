# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  It allows us to determine which element the user interacted with when an event occurs.
- What is the effect of setting an element to `display: none`?
  hides the element from the page completely
- What does the `element.matches()` method take as an argument and what does it return?
  takes a CSS selector string as an argument and returns true if the element matches the selector, otherwise it returns false.
- How can you retrieve the value of an element's attribute?
  .getAttribute(attributeName)
- At what steps of the solution would it be helpful to log things to the console?
  When an event is triggered, to check event.target.
  Before modifying the DOM, to ensure the correct elements are selected.
  After making updates to elements, to verify changes.
  Inside loops or conditionals, to debug logic errors.
  When handling errors, to pinpoint issues.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  we would add separate event listeners for each tab
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  Without a loop, we would have to manually hide all views before showing the selected one.

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

# typescript-timers-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a "callback" function?
  A callback function is a function that is passed as an argument to another function and is executed later, typically after some event occurs or a task completes. In JavaScript, callbacks are often used for asynchronous operations, such as handling events, reading files, or making API requests.
- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  setTimeout() function
- How can you set up a function to be called repeatedly without using a loop?
  setInterval()
- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  The default delay is 0 milliseconds, meaning the function is executed as soon as possible after the current execution context is cleared.
- What do `setTimeout()` and `setInterval()` return?
  Both functions return a unique timer ID (a numerical value), which can be used to cancel the scheduled execution using clearTimeout() or clearInterval(), respectively.

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

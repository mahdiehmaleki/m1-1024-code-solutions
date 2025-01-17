# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The event.target is a property of the Event object that refers to the specific DOM element that triggered the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  This is possible due to event bubbling in the DOM. When an event occurs on an element, it first triggers any event listeners on that element and then "bubbles up" the DOM tree, triggering listeners on its ancestors.
- What DOM element property tells you what type of element it is?
  The tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  The element.closest() method takes a CSS selector as its argument. It returns the closest ancestor (including the element itself) that matches the given selector. If no matching element is found, it returns null.
- How can you remove an element from the DOM?
  element.remove();
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  using event delegation, which involves attaching an event listener to a common ancestor of the elements. then we can check the event.target to identify which descendant element triggered the event.

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

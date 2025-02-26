# http-messages-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?
  A client is a device or application (e.g., web browser, mobile app) that requests resources or services from a server.

- What is a server?
  A server is a system or program that listens for and responds to client requests over a network.

- Which HTTP method does a browser issue to a web server when you visit a URL?
  the browser issues an HTTP GET request to the web server. The GET method requests data from the server without modifying any resources on the server.

- What three things are on the start-line of an HTTP **request** message?
  HTTP method (e.g., GET, POST, PUT, DELETE)
  Request target (URI) (the path to the resource being requested, e.g., /index.html)
  HTTP version (e.g., HTTP/1.1 or HTTP/2)
- What three things are on the start-line of an HTTP **response** message?
  HTTP version (e.g., HTTP/1.1)
  Status code (e.g., 200, 404, 500)
  Reason phrase (a brief description of the status code, e.g., "OK" for 200, "Not Found" for 404)
- What are HTTP headers?
  HTTP headers are key-value pairs sent in HTTP requests and responses. They provide metadata about the request or response, such as content type, content length, authorization information, caching instructions, and much more.

- Where would you go if you wanted to learn more about a specific HTTP Header?
  We would refer to the official documentation on headers, such as:
  MDN Web Docs (Mozilla Developer Network): MDN HTTP Headers
  RFC Specifications (for technical details): For example, RFC 2616 covers HTTP/1.1.
- Is a body required for a valid HTTP request or response message?
  No

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

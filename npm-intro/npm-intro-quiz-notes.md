# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  npm (Node Package Manager) is both an online repository for Node.js packages and a command-line tool for interacting with that repository. It allows developers to easily share, install, and manage reusable code modules (packages) for Node.js projects.
- What is a package?
  A package is a bundle of code (modules, libraries, utilities) that performs specific functionality and can be reused in various projects. Each package includes a package.json file that contains metadata like its name, version, dependencies, and scripts, making it easy to integrate and manage within a project.
- What are some other popular package managers?
  Yarn: Developed by Facebook, it offers speed and security improvements.
  pnpm: Focuses on efficient disk space usage with a unique symlink-based strategy.
  pip: Used for Python packages.
- How can you create a `package.json` with `npm`?
  npm init -y
- What is a dependency and how do you add one to a package?
  A dependency is a package that your project requires to run. To add a dependency.
  npm install <package-name>
- What happens when you add a dependency to a package with `npm`?
  The package is downloaded into the node_modules folder.
  The package name and version are recorded in the "dependencies" section.
  The exact version and dependency tree are recorded to ensure consistent installations across environments.
- What is a devDependency and how do you add one to a package?
  A devDependency is a package required only during development (e.g., testing frameworks, build tools, linters) and not needed in the production environment.
  npm install --save-dev <package-name>
- How do you define and run `npm` scripts? Why are these useful?
  Defining using "script" property. and run using this command: npm run <script name>
  Automation: They simplify repetitive tasks (e.g., starting the server, running tests, building the project).
  Consistency: Ensure that everyone on the team uses the same commands and settings.
  Convenience: Hide complex command-line instructions behind simple script names.

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

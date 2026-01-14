
# Real DOM vs Virtual DOM

## Real DOM

The Real DOM is the actual browser Document Object Model.
Every UI element is a real node in memory.

### Characteristics

- Directly represents the UI on the browser
- Updating any element causes reflow and repaint
- Slower for frequent UI updates
- Manipulated using JavaScript (document.createElement, appendChild, etc.)

#### Example (Real DOM update)

```javascript
const div = document.getElementById("box");
div.innerText = "Hello";
```

Every update directly touches the browser DOM.

## Virtual DOM

The Virtual DOM is a lightweight JavaScript object representation of the Real DOM, maintained by React.

### Characteristics

- Exists in memory (not in the browser)
- Changes are first applied to Virtual DOM
- React compares old and new Virtual DOM (diffing)
- Only the minimum required changes are applied to the Real DOM
- Faster and more efficient

### How React Uses Virtual DOM

- State/props change
- New Virtual DOM is created
- React compares it with previous Virtual DOM
- React updates only the changed nodes in Real DOM

### Why Virtual DOM is Important

- Better performance
- Smooth UI updates
- Predictable UI behavior

| Feature          | Real DOM   | Virtual DOM |
| ---------------- | ---------- | ----------- |
| Update Speed     | Slow       | Fast        |
| DOM Manipulation | Direct     | Batched     |
| Memory Usage     | Higher     | Lower       |
| Used By          | Vanilla JS | React       |

# JSX (JavaScript XML) and Its Importance

## JSX

JSX is a syntax extension of JavaScript that allows writing HTML-like code inside JavaScript.

JSX is not HTML.
It is converted into JavaScript by Babel.

### JSX Example

```javascript
const element = <h1>Hello React</h1>;
```

## Component Naming Rules

- Component names must start with a Capital Letter
- Lowercase names are treated as HTML elements

### Correct

```javascript
function Header() {
  return <h1>Header</h1>;
}
```

A component is a reusable, independent UI block.

### Basic Functional Component

```javascript
function Button() {
  return <button>Click Me</button>;
}
```

## Keep Components Small

- Easier to read
- Easier to debug
- Easier to reuse

Displaying Day 69 Notes.md.







# Styling in React

## 1. Different Styling Approaches in React

React supports multiple ways to style UI components. The most commonly used approaches are:

- Inline Styles
- CSS Stylesheets
- CSS Modules
- Utility-First CSS (Tailwind CSS)
- Styled Components / CSS-in-JS (advanced, optional)

Each approach has different use cases depending on scalability, maintainability, and team workflow.

## 2. Importance of Component-Based Styling

React follows a component-based architecture, so styling should align with this philosophy.

Why component-based styling is important:

- Styles remain scoped to a component
- Avoids global CSS conflicts
- Improves code readability
- Makes components reusable
- Easier to maintain in large applications

Component-based styling ensures that UI logic and styles evolve together.

## CSS Modules

### What are CSS Modules?

CSS files where class names are locally scoped to the component.

File naming convention:

- `ComponentName.module.css`

### Example CSS (Button.module.css)

```css
.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}
```

### Example React Component

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```

### Benefits:

- No class name collision
- Clean and maintainable
- Works well with large projects

## 5. Tailwind CSS with React (Vite)

### What is Tailwind CSS?

A utility-first CSS framework that provides small, reusable classes for styling.

### Setup (One-Line Instruction as Requested):

Go to the Tailwind CSS website, click Get Started, then go to the Using Vite section and follow the steps provided to set up Tailwind CSS with React.

## 6. Basic Tailwind CSS Utilities

### Height & Width

```html
<div class="h-24 w-24 bg-orange-500"></div>
```

### Flexbox

```html
<div class="flex"></div>
```

### Center Items (Both Axis)

```html
<div class="flex items-center justify-center"></div>
```

### Space Between Items

```html
<div class="flex justify-between"></div>
```

### Background Color

```html
<div class="bg-blue-500"></div>
```

### Background Opacity

```html
<div class="bg-black bg-opacity-50"></div>
```

## 7. Custom CSS Values in Tailwind ([] syntax)

Tailwind allows custom values using square brackets.

### Examples:

```html
<div class="h-[120px] w-[300px]"></div>

<div class="bg-[#1e293b]"></div>

<div class="text-[18px]"></div>
```

### Why it's useful:

- No need to write custom CSS files
- Keeps everything inside JSX
- Fast UI experimentation

## 8. Why Tailwind Works Well with React

- Perfect for component-based styling
- No context switching between CSS and JSX
- Faster development
- Consistent design system
- Eliminates unused CSS

## Summary

- Inline Styles → Quick, dynamic, but limited
- CSS Modules → Scoped, maintainable, production-ready
- Tailwind CSS → Utility-first, fast, scalable, modern

Component-based styling is essential for clean React architecture
Displaying Day 70 Notes.md.




//.....

# React Props: Passing Data to Components

Props are read-only inputs passed from parent to child.

```javascript
function Card(props) {
  return <h2>{props.title}</h2>;
}

<Card title="React Notes" />
```

Props are:

- Immutable
- Passed top-down
- Used for configuration

## Rendering Array Data using map

```javascript
const users = ["A", "B", "C"];

users.map(user => <li key={user}>{user}</li>);
```

## Eliminating Array Data using filter

```javascript
const filteredUsers = users.filter(user => user !== "B");

filteredUsers.map(user => <li key={user}>{user}</li>);
```

### Concept

- `filter()` removes data
- `map()` transforms data
- Both are immutable operations

## Reusing Components, Lists & Keys

### Reusing Components

```jsx
<Card title="HTML" />
<Card title="CSS" />
<Card title="React" />
```

### Lists & Keys

```jsx
items.map(item => (
  <Card key={item.id} title={item.name} />
));
```

### Why Keys Matter

- Helps React track changes efficiently
- Prevents unnecessary re-renders
- Keys must be unique & stable

## Passing Inline Styles as Props (Most Common)

### Parent Component

```javascript
function App() {
  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: "orange",
    borderRadius: "8px"
  };

  return <Box style={boxStyle} />;
}
```

### Child Component

```javascript
function Box({ style }) {
  return <div style={style}></div>;
}
```

### Key Points

- Style object must be camelCased
- Passed as a normal prop
- Applied using `style={propName}`

## 3. Passing Partial Styles & Merging in Child

### Parent

```jsx
function App() {
  return (
    <Card
      bgColor="black"
      textColor="white"
    />
  );
}
```

### Child

```javascript
function Card({ bgColor, textColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "20px"
      }}
    >
      Styled via Props
    </div>
  );
}
```
Displaying Day 71 notes.md.
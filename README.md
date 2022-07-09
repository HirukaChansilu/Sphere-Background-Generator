# Sphere-Background-Generator

A Simple tool to create beautiful sphere background each time refreshed.

<hr>

## Find Demo On:

- https://sphere-background-generator.web.app/

## Installation in React.js

```
npm install sphere-background-generator
```

<hr>

### Using Background for the whole page

```jsx
import React from "react";
import SpheresBackground from "sphere-background-generator";

function App() {
  return (
    <SpheresBackground
      animate={true}
      content={
        // All your content to be included with the background must go here
        <div style={{ height: "2000px" }}>Hello World!</div>
      }
    />
  );
}

export default App;
```

### Using Background for a specific area

```jsx
import React from "react";
import SpheresBackground from "sphere-background-generator";

function App() {
  return (
    <div>
      // This will not include the background
      <div style={{ height: "200px", backgroundColor: "#000", color: "#fff" }}>
        Background Will not Appear in here
      </div>
      <SphereBackground
        animate={true}
        content={
          // All your content to be included with the background must go here
          <div style={{ height: "2000px" }}>Hello World!</div>
        }
      />
    </div>
  );
}

export default App;
```

<hr>

## Accepted Props

### animate

- `true` - If this prop set to true, a growing and shrinking animation will be applied to the spheres.
- `false` - If this prop set to false, only appearing animation will be applied to the spheres.

<span style="color:#f03c15; font-size:1.5rem">Note !</span>

> Using `animate = {true}` might be inconvenient for some users as it needs some processing power. Experience might be bugged.

### content

- You Must add all your content that are needed to be wrapped with the background in here.

<hr>

- The Code in the package is not compiled.
- If you get a warning like this, just ignore as Typescript is not provided.

![warning](https://i.ibb.co/QCQxyZY/image.png)

<hr>

Copyright [Hiruka Chansilu](https://github.com/HirukaChansilu) 2022©
